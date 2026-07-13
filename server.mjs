import { createServer } from "node:http";
import { copyFile, mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import {
  state,
  userProfiles,
  tenantStates,
  schoolDesigns,
  rosterRecords,
  gradebookSubmissions,
  auditLogs,
  lmsAssignments,
  lmsFiles,
  lmsNotifications,
  realtimeEvents,
  databaseTables,
  onboardingTasks,
  fileUploads,
  notificationDeliveryLog,
  securityChecklist,
  deployPipeline,
  offlineSyncQueue,
  activityFeed,
  conversations,
  communityBoards,
} from "./src/data.js";

const distDir = resolve(process.env.PUBLIC_DIR || "dist");
const dataDir = resolve(process.env.DATA_DIR || "data");
const dataFile = resolve(dataDir, "educonnect-state.json");
const accountsFile = resolve(dataDir, "educonnect-accounts.json");
const notificationProviderFile = resolve(dataDir, "notification-provider.json");
const uploadDir = resolve(dataDir, "uploads");
const backupDir = resolve(dataDir, "backups");
const port = Number(process.env.PORT || 8080);
const sessions = new Map();

const bootstrapPasswordVariables = {
  "state-admin": "EDUCONNECT_BOOTSTRAP_STATE_ADMIN",
  "district-admin": "EDUCONNECT_BOOTSTRAP_DISTRICT_ADMIN",
  "school-admin": "EDUCONNECT_BOOTSTRAP_SCHOOL_ADMIN",
  teacher: "EDUCONNECT_BOOTSTRAP_TEACHER",
  parent: "EDUCONNECT_BOOTSTRAP_PARENT",
  student: "EDUCONNECT_BOOTSTRAP_STUDENT",
};

function bootstrapPassword(profileId) {
  const configured = process.env[bootstrapPasswordVariables[profileId]];
  return configured || randomBytes(24).toString("base64url");
}

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

function initialSnapshot() {
  return structuredClone({
    state: { ...state, apiMode: "live-api" },
    userProfiles,
    tenantStates,
    schoolDesigns,
    rosterRecords,
    gradebookSubmissions,
    auditLogs,
    lmsAssignments,
    lmsFiles,
    lmsNotifications,
    realtimeEvents,
    databaseTables,
    onboardingTasks,
    fileUploads,
    notificationDeliveryLog,
    securityChecklist,
    deployPipeline,
    offlineSyncQueue,
    activityFeed,
    conversations,
    communityBoards,
  });
}

function hashPassword(password) {
  return createHash("sha256").update(`educonnect:${password}`).digest("hex");
}

function defaultAccounts() {
  return userProfiles.map((profile) => ({
    profileId: profile.id,
    passwordHash: hashPassword(bootstrapPassword(profile.id)),
    active: true,
    mustChangePassword: true,
    updatedAt: new Date().toISOString(),
  }));
}

async function ensureAccountsFile() {
  await mkdir(dataDir, { recursive: true });
  try {
    await stat(accountsFile);
  } catch {
    await saveAccounts(defaultAccounts());
    return;
  }
  const existingAccounts = await loadAccountsRaw();
  const accountIds = new Set(existingAccounts.map((account) => account.profileId));
  const missingAccounts = defaultAccounts().filter((account) => !accountIds.has(account.profileId));
  if (missingAccounts.length) await saveAccounts([...existingAccounts, ...missingAccounts]);
}

async function loadAccounts() {
  await ensureAccountsFile();
  return JSON.parse(await readFile(accountsFile, "utf8"));
}

async function loadAccountsRaw() {
  return JSON.parse(await readFile(accountsFile, "utf8"));
}

async function saveAccounts(accounts) {
  await mkdir(dataDir, { recursive: true });
  const tempFile = `${accountsFile}.${Date.now()}.tmp`;
  await writeFile(tempFile, JSON.stringify(accounts, null, 2));
  await rename(tempFile, accountsFile);
}

async function accountFor(profileId, snapshot = null) {
  const appState = snapshot || await loadSnapshot();
  const user = appState.userProfiles.find((profile) => profile.id === profileId);
  const account = (await loadAccounts()).find((item) => item.profileId === profileId);
  return user && account ? { user, ...account } : null;
}

function canAdmin(session) {
  return session?.user?.permissions?.includes("manage-users");
}

function scopeForRole(role) {
  if (role === "State Admin") return "state";
  if (role === "District Admin") return "district";
  if (role === "School Admin" || role === "Teacher") return "school";
  if (role === "Parent") return "guardian";
  return "student";
}

function normalizeProfileScope(profile, fallback = {}) {
  const scope = profile.scope || fallback.scope || scopeForRole(profile.role);
  const normalized = {
    ...profile,
    scope,
    stateId: profile.stateId || fallback.stateId || "ny",
  };
  if (scope !== "state") normalized.districtId = profile.districtId || fallback.districtId || "nyc-doe";
  if (["school", "guardian", "student"].includes(scope)) normalized.schoolId = profile.schoolId || fallback.schoolId || "ps-118";
  if (profile.studentId || fallback.studentId) normalized.studentId = profile.studentId || fallback.studentId;
  if (profile.studentIds || fallback.studentIds) normalized.studentIds = profile.studentIds || fallback.studentIds;
  return normalized;
}

function canAccessScope(actor, target) {
  if (!actor || !target) return false;
  const actorScope = actor.scope || scopeForRole(actor.role);
  if (actorScope === "state") return !target.stateId || !actor.stateId || target.stateId === actor.stateId;
  if (actorScope === "district") return target.stateId === actor.stateId && target.districtId === actor.districtId;
  if (actorScope === "school") return target.stateId === actor.stateId && target.districtId === actor.districtId && target.schoolId === actor.schoolId;
  if (actorScope === "guardian") return target.schoolId === actor.schoolId && (!target.studentId || (actor.studentIds || []).includes(target.studentId));
  return target.id === actor.id || (target.studentId && target.studentId === actor.studentId);
}

function scopedProfiles(profiles, session) {
  if (!session) return profiles;
  return profiles.filter((profile) => canAccessScope(session.user, normalizeProfileScope(profile)));
}

function scopedFiles(files, session) {
  if (!session) return files;
  return files.filter((file) => canAccessScope(session.user, file.scope || file));
}

function requireSession(req, adminOnly = false) {
  const session = sessionFromRequest(req);
  if (!session) {
    const error = new Error("Authentication required");
    error.statusCode = 401;
    throw error;
  }
  if (adminOnly && !canAdmin(session)) {
    const error = new Error("Admin permission required");
    error.statusCode = 403;
    throw error;
  }
  return session;
}

function publicUser(profile, account = {}) {
  return {
    ...normalizeProfileScope(profile),
    active: account.active !== false,
    mustChangePassword: Boolean(account.mustChangePassword),
  };
}

async function ensureDataFile() {
  await mkdir(dataDir, { recursive: true });
  await writeFile(join(dataDir, ".keep"), "", { flag: "a" });
  try {
    await stat(dataFile);
  } catch {
      await saveSnapshot(initialSnapshot());
  }
  await ensureAccountsFile();
}

async function loadSnapshot() {
  await ensureDataFile();
  const snapshot = JSON.parse(await readFile(dataFile, "utf8"));
  let changed = false;

  if (snapshot.state?.role === "platform") {
    snapshot.state.role = "state-admin";
    changed = true;
  }

  const profileIds = new Set((snapshot.userProfiles || []).map((profile) => profile.id));
  const missingProfiles = userProfiles.filter((profile) => !profileIds.has(profile.id));
  if (missingProfiles.length) {
    snapshot.userProfiles = [...(snapshot.userProfiles || []), ...missingProfiles];
    changed = true;
  }

  const defaultProfileMap = new Map(userProfiles.map((profile) => [profile.id, profile]));
  snapshot.userProfiles = (snapshot.userProfiles || []).map((profile) => {
    const nextProfile = normalizeProfileScope(profile, defaultProfileMap.get(profile.id) || {});
    if (JSON.stringify(nextProfile) !== JSON.stringify(profile)) changed = true;
    return nextProfile;
  });

  if (snapshot.state?.currentUser === "district-admin" && !profileIds.has("state-admin")) {
    snapshot.state.currentUser = "state-admin";
    changed = true;
  }

  if (changed) await saveSnapshot(snapshot);
  return snapshot;
}

async function saveSnapshot(snapshot) {
  if (!snapshot?.state || !Array.isArray(snapshot.userProfiles)) {
    const error = new Error("Invalid snapshot");
    error.statusCode = 400;
    throw error;
  }
  const payload = JSON.stringify({ ...snapshot, state: { ...snapshot.state, apiMode: "live-api" } }, null, 2);
  await mkdir(dataDir, { recursive: true });
  await writeFile(join(dataDir, ".keep"), "", { flag: "a" });
  const tempFile = `${dataFile}.${Date.now()}.tmp`;
  await writeFile(tempFile, payload);
  await rename(tempFile, dataFile);
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  res.end(JSON.stringify(payload));
}

function notFound(res) {
  sendJson(res, 404, { ok: false, error: "Not found" });
}

function sessionFromRequest(req) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  return token ? sessions.get(token) : null;
}

async function handleApi(req, res, pathname) {
  if (pathname === "/api/health" && req.method === "GET") {
    sendJson(res, 200, { ok: true, service: "educonnect-api", mode: "operational", time: new Date().toISOString() });
    return true;
  }

  if (pathname === "/api/state" && req.method === "GET") {
    sendJson(res, 200, { ok: true, snapshot: await loadSnapshot() });
    return true;
  }

  if (pathname === "/api/state" && req.method === "PUT") {
    requireSession(req);
    const body = await readJson(req);
    await saveSnapshot(body.snapshot);
    sendJson(res, 200, { ok: true, savedAt: new Date().toISOString() });
    return true;
  }

  if (pathname === "/api/reset" && req.method === "POST") {
    requireSession(req, true);
    const snapshot = initialSnapshot();
    await saveSnapshot(snapshot);
    sendJson(res, 200, { ok: true, snapshot });
    return true;
  }

  if (pathname === "/api/login" && req.method === "POST") {
    const body = await readJson(req);
    const account = await accountFor(body.profileId);
    if (!account || account.active === false || account.passwordHash !== hashPassword(body.password || "")) {
      sendJson(res, 401, { ok: false, error: "Invalid credentials" });
      return true;
    }
    const token = randomUUID();
    sessions.set(token, { user: account.user, createdAt: Date.now() });
    sendJson(res, 200, { ok: true, token, user: account.user });
    return true;
  }

  if (pathname === "/api/users" && req.method === "GET") {
    const session = requireSession(req, true);
    const snapshot = await loadSnapshot();
    const accounts = await loadAccounts();
    const visibleProfiles = scopedProfiles(snapshot.userProfiles, session);
    sendJson(res, 200, {
      ok: true,
      users: visibleProfiles.map((profile) => publicUser(profile, accounts.find((account) => account.profileId === profile.id))),
    });
    return true;
  }

  if (pathname === "/api/users" && req.method === "POST") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const id = String(body.id || `${String(body.role || "user").toLowerCase()}-${Date.now()}`).replace(/[^a-z0-9-]+/gi, "-").toLowerCase();
    if (snapshot.userProfiles.some((profile) => profile.id === id)) {
      sendJson(res, 409, { ok: false, error: "User already exists" });
      return true;
    }
    const role = body.role || "Student";
    const requestedProfile = normalizeProfileScope({
      id,
      label: body.label || "New User",
      role,
      landing: body.landing || (role === "Admin" ? "school-admin" : role.toLowerCase()),
      scope: body.scope || scopeForRole(role),
      stateId: body.stateId || session.user.stateId,
      districtId: body.districtId || session.user.districtId,
      schoolId: body.schoolId || session.user.schoolId,
      studentId: body.studentId,
      studentIds: body.studentIds,
      permissions: Array.isArray(body.permissions) ? body.permissions : role === "Admin" ? ["manage-tenants", "approve-posts", "emergency", "lms", "teacher-tools", "message", "manage-users", "view-compliance"] : role === "Teacher" ? ["lms", "teacher-tools", "message", "submit-post"] : role === "Parent" ? ["message", "submit-post"] : ["student-missions"],
    }, session.user);
    const profile = canAccessScope(session.user, requestedProfile)
      ? requestedProfile
      : normalizeProfileScope({ ...requestedProfile, stateId: session.user.stateId, districtId: session.user.districtId, schoolId: session.user.schoolId }, session.user);
    snapshot.userProfiles.push(profile);
    await saveSnapshot(snapshot);
    const accounts = await loadAccounts();
    if (!body.password) {
      sendJson(res, 400, { ok: false, error: "A strong temporary password is required" });
      return true;
    }
    accounts.push({
      profileId: id,
      passwordHash: hashPassword(body.password),
      active: true,
      mustChangePassword: true,
      updatedAt: new Date().toISOString(),
    });
    await saveAccounts(accounts);
    sendJson(res, 201, { ok: true, user: publicUser(profile, accounts.at(-1)) });
    return true;
  }

  const userStatusMatch = pathname.match(/^\/api\/users\/([^/]+)$/);
  if (userStatusMatch && req.method === "PATCH") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const accounts = await loadAccounts();
    const account = accounts.find((item) => item.profileId === userStatusMatch[1]);
    const snapshot = await loadSnapshot();
    const target = snapshot.userProfiles.find((profile) => profile.id === userStatusMatch[1]);
    if (!target || !canAccessScope(session.user, normalizeProfileScope(target))) {
      sendJson(res, 403, { ok: false, error: "User is outside your tenant scope" });
      return true;
    }
    if (!account) {
      sendJson(res, 404, { ok: false, error: "User account not found" });
      return true;
    }
    if (typeof body.active === "boolean") account.active = body.active;
    if (body.password) {
      account.passwordHash = hashPassword(body.password);
      account.mustChangePassword = Boolean(body.mustChangePassword);
    }
    account.updatedAt = new Date().toISOString();
    await saveAccounts(accounts);
    sendJson(res, 200, { ok: true, account: { profileId: account.profileId, active: account.active, mustChangePassword: account.mustChangePassword } });
    return true;
  }

  if (pathname === "/api/password/change" && req.method === "POST") {
    const session = requireSession(req);
    const body = await readJson(req);
    const accounts = await loadAccounts();
    const account = accounts.find((item) => item.profileId === session.user.id);
    if (!account || account.passwordHash !== hashPassword(body.currentPassword || "")) {
      sendJson(res, 401, { ok: false, error: "Current password is incorrect" });
      return true;
    }
    if (!body.newPassword || String(body.newPassword).length < 8) {
      sendJson(res, 400, { ok: false, error: "New password must be at least 8 characters" });
      return true;
    }
    account.passwordHash = hashPassword(body.newPassword);
    account.mustChangePassword = false;
    account.updatedAt = new Date().toISOString();
    await saveAccounts(accounts);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (pathname === "/api/password/reset" && req.method === "POST") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const accounts = await loadAccounts();
    const account = accounts.find((item) => item.profileId === body.profileId);
    const snapshot = await loadSnapshot();
    const target = snapshot.userProfiles.find((profile) => profile.id === body.profileId);
    if (!target || !canAccessScope(session.user, normalizeProfileScope(target))) {
      sendJson(res, 403, { ok: false, error: "User is outside your tenant scope" });
      return true;
    }
    if (!account) {
      sendJson(res, 404, { ok: false, error: "User account not found" });
      return true;
    }
    const password = body.newPassword || `Reset${Math.floor(100000 + Math.random() * 900000)}`;
    account.passwordHash = hashPassword(password);
    account.mustChangePassword = true;
    account.updatedAt = new Date().toISOString();
    await saveAccounts(accounts);
    sendJson(res, 200, { ok: true, temporaryPassword: password });
    return true;
  }

  if (pathname === "/api/files" && req.method === "POST") {
    const session = requireSession(req);
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const id = `upload-${Date.now()}-${randomUUID().slice(0, 8)}`;
    let storedPath = "";
    if (body.contentBase64) {
      await mkdir(uploadDir, { recursive: true });
      const safeName = String(body.name || "upload.bin").replace(/[^a-z0-9._-]+/gi, "-");
      storedPath = join(uploadDir, `${id}-${safeName}`);
      await writeFile(storedPath, Buffer.from(body.contentBase64, "base64"));
    }
    const file = {
      id,
      name: body.name || "Uploaded file",
      area: body.area || "LMS",
      size: body.size || "Unknown",
      status: storedPath ? "Stored on server" : "Metadata stored on server",
      type: body.type || "application/octet-stream",
      scope: {
        stateId: body.stateId || session.user.stateId,
        districtId: body.districtId || session.user.districtId,
        schoolId: body.schoolId || session.user.schoolId,
      },
      ownerId: session.user.id,
      storedPath: storedPath ? storedPath.replace(dataDir, "data") : "",
    };
    snapshot.fileUploads = [file, ...(snapshot.fileUploads || [])];
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ok: true, file });
    return true;
  }

  if (pathname === "/api/files" && req.method === "GET") {
    const session = requireSession(req);
    const snapshot = await loadSnapshot();
    sendJson(res, 200, { ok: true, files: scopedFiles(snapshot.fileUploads || [], session) });
    return true;
  }

  const downloadMatch = pathname.match(/^\/api\/files\/([^/]+)\/download$/);
  if (downloadMatch && req.method === "GET") {
    const session = requireSession(req);
    const snapshot = await loadSnapshot();
    const file = (snapshot.fileUploads || []).find((item) => item.id === downloadMatch[1]);
    if (!file?.storedPath) {
      sendJson(res, 404, { ok: false, error: "Stored file not found" });
      return true;
    }
    const filePath = resolve(file.storedPath.replace(/^data/, dataDir));
    if (!filePath.startsWith(dataDir)) {
      sendJson(res, 403, { ok: false, error: "Invalid file path" });
      return true;
    }
    if (!canAccessScope(session.user, file.scope || file)) {
      sendJson(res, 403, { ok: false, error: "File is outside your tenant scope" });
      return true;
    }
    res.writeHead(200, {
      "Content-Type": file.type || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${String(file.name).replace(/"/g, "")}"`,
      "X-Content-Type-Options": "nosniff",
    });
    createReadStream(filePath).pipe(res);
    return true;
  }

  if (pathname === "/api/notifications/test" && req.method === "POST") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const channels = body.channels || ["Email", "SMS", "Push"];
    const records = channels.map((channel) => ({
      id: `delivery-${Date.now()}-${channel}`,
      channel,
      audience: body.audience || "Launch test group",
      status: "Delivered",
      detail: `${channel} test generated by operational API`,
      scope: { stateId: session.user.stateId, districtId: session.user.districtId, schoolId: session.user.schoolId },
    }));
    snapshot.notificationDeliveryLog = [...records, ...(snapshot.notificationDeliveryLog || [])];
    snapshot.lmsNotifications = [{
      id: `notice-${Date.now()}`,
      level: "FYI",
      title: "Notification delivery test completed",
      target: body.audience || "Launch Control",
      channel: "Operational API",
      read: false,
    }, ...(snapshot.lmsNotifications || [])];
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ok: true, records });
    return true;
  }

  if (pathname === "/api/notification-provider" && req.method === "GET") {
    try {
      const provider = JSON.parse(await readFile(notificationProviderFile, "utf8"));
      sendJson(res, 200, { ok: true, provider: { ...provider, apiKey: provider.apiKey ? "configured" : "" } });
    } catch {
      sendJson(res, 200, { ok: true, provider: { mode: "log-only", from: "", smtpHost: "", apiKey: "" } });
    }
    return true;
  }

  if (pathname === "/api/notification-provider" && req.method === "PUT") {
    requireSession(req, true);
    const body = await readJson(req);
    const provider = {
      mode: body.mode || "log-only",
      from: body.from || "",
      smtpHost: body.smtpHost || "",
      apiKey: body.apiKey || "",
      updatedAt: new Date().toISOString(),
    };
    await writeFile(notificationProviderFile, JSON.stringify(provider, null, 2));
    sendJson(res, 200, { ok: true, provider: { ...provider, apiKey: provider.apiKey ? "configured" : "" } });
    return true;
  }

  if (pathname === "/api/backups" && req.method === "GET") {
    await mkdir(backupDir, { recursive: true });
    const files = (await readdir(backupDir)).filter((file) => file.endsWith(".json")).sort().reverse();
    sendJson(res, 200, { ok: true, backups: files });
    return true;
  }

  if (pathname === "/api/backups" && req.method === "POST") {
    requireSession(req, true);
    await ensureDataFile();
    await mkdir(backupDir, { recursive: true });
    const name = `educonnect-backup-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
    await copyFile(dataFile, join(backupDir, name));
    sendJson(res, 201, { ok: true, backup: name });
    return true;
  }

  if (pathname === "/api/session" && req.method === "GET") {
    const session = sessionFromRequest(req);
    if (!session) {
      sendJson(res, 401, { ok: false, error: "No active session" });
      return true;
    }
    sendJson(res, 200, { ok: true, user: session.user });
    return true;
  }

  if (pathname.startsWith("/api/")) {
    notFound(res);
    return true;
  }

  return false;
}

async function serveStatic(req, res, pathname) {
  const cleanPath = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  let filePath = resolve(distDir, cleanPath === "/" ? "index.html" : cleanPath.slice(1));
  if (!filePath.startsWith(distDir)) {
    notFound(res);
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) filePath = join(filePath, "index.html");
  } catch {
    filePath = join(distDir, "index.html");
  }

  const type = contentTypes[extname(filePath)] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Type": type,
    "Cache-Control": filePath.endsWith("index.html") ? "no-store" : "public, max-age=31536000, immutable",
    "X-Content-Type-Options": "nosniff",
  });
  createReadStream(filePath).pipe(res);
}

export function createEduConnectServer() {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
      if (await handleApi(req, res, url.pathname)) return;
      await serveStatic(req, res, url.pathname);
    } catch (error) {
      sendJson(res, error.statusCode || 500, { ok: false, error: error.message || "Server error" });
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await ensureDataFile();
  createEduConnectServer().listen(port, () => {
    console.log(`EduConnect operational server running at http://127.0.0.1:${port}`);
  });
}

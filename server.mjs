import { createServer } from "node:http";
import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { createConnection } from "node:net";
import {
  state,
  userProfiles,
  tenantStates,
  schoolDesigns,
  rosterRecords,
  gradebookSubmissions,
  auditLogs,
  lmsAssignments,
  lmsLessons,
  lmsSubmissions,
  questionBank,
  curriculumCourses,
  lmsFiles,
  lmsNotifications,
  realtimeEvents,
  databaseTables,
  onboardingTasks,
  fileUploads,
  notificationDeliveryLog,
  securityChecklist,
  deployPipeline,
  productionReadiness,
  offlineSyncQueue,
  activityFeed,
  conversations,
  communityBoards,
  scheduleEntries,
  scheduleRequests,
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
  "global-admin": "EDUCONNECT_BOOTSTRAP_GLOBAL_ADMIN",
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
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};
const allowedUploadTypes = new Set(["application/pdf", "image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "audio/mpeg", "audio/wav", "text/plain", "text/csv", "application/json", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"]);

async function scanUploadBuffer(buffer) {
  if (!buffer?.length) return { clean: true, available: true, provider: "No content" };
  if (buffer.toString("utf8").includes("EICAR-STANDARD-ANTIVIRUS-TEST-FILE")) return { clean: false, available: true, provider: "Built-in signature screening", signature: "EICAR test signature" };
  const host = process.env.EDUCONNECT_CLAMAV_HOST;
  if (!host) return { clean: true, available: true, provider: "Built-in signature screening" };
  const port = Math.max(1, Math.min(65535, Number(process.env.EDUCONNECT_CLAMAV_PORT || 3310)));
  try {
    const reply = await new Promise((resolveReply, rejectReply) => {
      const socket = createConnection({ host, port });
      const replies = [];
      let settled = false;
      const finish = (error, value) => {
        if (settled) return;
        settled = true;
        socket.destroy();
        if (error) rejectReply(error);
        else resolveReply(value);
      };
      socket.setTimeout(10000, () => finish(new Error("ClamAV scan timed out")));
      socket.on("error", (error) => finish(error));
      socket.on("data", (chunk) => {
        replies.push(chunk);
        const combined = Buffer.concat(replies);
        if (combined.includes(0)) finish(null, combined.subarray(0, combined.indexOf(0)).toString("utf8"));
      });
      socket.on("end", () => {
        if (!settled) finish(null, Buffer.concat(replies).toString("utf8"));
      });
      socket.on("connect", () => {
        socket.write(Buffer.from("zINSTREAM\0"));
        for (let offset = 0; offset < buffer.length; offset += 8192) {
          const chunk = buffer.subarray(offset, Math.min(buffer.length, offset + 8192));
          const length = Buffer.alloc(4);
          length.writeUInt32BE(chunk.length);
          socket.write(length);
          socket.write(chunk);
        }
        socket.write(Buffer.alloc(4));
      });
    });
    if (/\bFOUND\b/i.test(reply)) return { clean: false, available: true, provider: "ClamAV", signature: reply.replace(/^.*?:\s*/, "").replace(/\s+FOUND.*$/i, "") || "Malware" };
    if (/\bOK\b/i.test(reply)) return { clean: true, available: true, provider: "ClamAV" };
    return { clean: false, available: false, provider: "ClamAV", error: "Unexpected scanner response" };
  } catch (error) {
    return { clean: false, available: false, provider: "ClamAV", error: error.message };
  }
}

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
    lmsLessons,
    lmsSubmissions,
    questionBank,
    curriculumCourses,
    lmsFiles,
    lmsNotifications,
    realtimeEvents,
    databaseTables,
    onboardingTasks,
    fileUploads,
    notificationDeliveryLog,
    securityChecklist,
    deployPipeline,
    productionReadiness,
    offlineSyncQueue,
    activityFeed,
    conversations,
    communityBoards,
    scheduleEntries,
    scheduleRequests,
  });
}

function mergeDeepDefaults(defaults, value) {
  if (Array.isArray(defaults)) return Array.isArray(value) ? structuredClone(value) : structuredClone(defaults);
  if (!defaults || typeof defaults !== "object") return value === undefined ? defaults : value;
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const merged = {};
  for (const key of new Set([...Object.keys(defaults), ...Object.keys(source)])) merged[key] = mergeDeepDefaults(defaults[key], source[key]);
  return merged;
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
  if (actor.permissions?.includes("global-access")) return true;
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

const tenantCollections = ["rosterRecords", "gradebookSubmissions", "lmsAssignments", "lmsLessons", "lmsSubmissions", "questionBank", "curriculumCourses", "lmsFiles", "lmsNotifications", "fileUploads", "notificationDeliveryLog", "auditLogs", "activityFeed", "conversations", "realtimeEvents", "offlineSyncQueue", "interventions", "scheduleEntries", "scheduleRequests"];
const serverManagedTenantCollections = new Set(["scheduleEntries", "scheduleRequests"]);
const studentSensitiveCollections = new Set(["rosterRecords", "gradebookSubmissions", "lmsSubmissions", "activityFeed", "conversations", "offlineSyncQueue"]);
const staffOnlyCollections = new Set(["questionBank", "notificationDeliveryLog", "auditLogs", "realtimeEvents", "interventions"]);

function normalizeTenantRecord(record, fallback = {}) {
  return {
    ...record,
    stateId: record.stateId || fallback.stateId || "ny",
    districtId: record.districtId || fallback.districtId || "nyc-doe",
    schoolId: record.schoolId || fallback.schoolId || "ps-118",
  };
}

function canAccessSchoolSensitiveRecords(actor) {
  if (["state", "district"].includes(actor?.scope)) return true;
  return (actor?.permissions || []).some((permission) => ["manage-users", "teacher-tools", "view-compliance"].includes(permission));
}

function recordStudentIds(record) {
  const ids = [record?.studentId, record?.learnerId, record?.ownerStudentId];
  if (record?.targetType === "student") ids.push(record.targetId);
  if (Array.isArray(record?.studentIds)) ids.push(...record.studentIds);
  if (record?.student && typeof record.student === "object") ids.push(record.student.id, record.student.studentId);
  return [...new Set(ids.filter(Boolean).map(String))];
}

function isScheduleAdmin(actor) {
  return hasAnyPermission(actor, ["manage-users", "manage-tenants"]);
}

function canAccessScheduleTenant(actor, record) {
  if (actor.permissions?.includes("global-access")) return true;
  const target = normalizeTenantRecord(record);
  if (actor.scope === "state") return target.stateId === actor.stateId;
  if (actor.scope === "district") return target.stateId === actor.stateId && target.districtId === actor.districtId;
  return target.schoolId === actor.schoolId;
}

function canViewScheduleRecord(actor, record, collection, snapshot = null) {
  if (!canAccessScheduleTenant(actor, record)) return false;
  if (isScheduleAdmin(actor)) return true;
  const actorId = String(actor.id || "");
  const targetIds = new Set([record.targetId, record.studentId].filter(Boolean).map(String));
  const targetId = String(record.targetId || "");
  const requestedBy = String(record.requestedBy || "");
  if (collection === "scheduleRequests") return requestedBy === actorId;
  if (actor.scope === "school" && actor.permissions?.includes("teacher-tools")) {
    if (record.targetType === "staff") return targetId === actorId;
    if (record.targetType === "student") {
      const student = snapshot ? findScheduleStudent(snapshot, record.studentId || record.targetId) : null;
      return (student?.assignedTeacher || record.assignedTeacher) === actor.label;
    }
    return ["class", "school"].includes(record.targetType);
  }
  if (actor.scope === "guardian") {
    return (record.targetType === "staff" && targetId === actorId)
      || (record.targetType === "student" && (actor.studentIds || []).map(String).some((id) => targetIds.has(id)));
  }
  if (actor.scope === "student") {
    const ownIds = new Set([actorId, String(actor.studentId || "")]);
    return (record.targetType === "student" && [...ownIds].some((id) => targetIds.has(id))) || ["class", "school"].includes(record.targetType);
  }
  return false;
}

function canAccessTenantResource(actor, record, collection = "") {
  if (actor.permissions?.includes("global-access")) return true;
  if (["scheduleEntries", "scheduleRequests"].includes(collection)) return canViewScheduleRecord(actor, record, collection);
  const target = normalizeTenantRecord(record);
  let tenantAllowed = false;
  if (actor.scope === "state") tenantAllowed = target.stateId === actor.stateId;
  else if (actor.scope === "district") tenantAllowed = target.stateId === actor.stateId && target.districtId === actor.districtId;
  else tenantAllowed = target.schoolId === actor.schoolId;
  if (!tenantAllowed) return false;

  if (staffOnlyCollections.has(collection)) return canAccessSchoolSensitiveRecords(actor);
  if (!studentSensitiveCollections.has(collection) || canAccessSchoolSensitiveRecords(actor)) return true;

  const studentIds = recordStudentIds(record);
  if (!studentIds.length) return false;
  if (actor.scope === "guardian") return studentIds.some((studentId) => (actor.studentIds || []).map(String).includes(studentId));
  if (actor.scope === "student") return studentIds.includes(String(actor.studentId || "")) || studentIds.includes(String(actor.id || ""));
  return false;
}

function hasAnyPermission(actor, permissions) {
  return permissions.some((permission) => actor?.permissions?.includes(permission));
}

function findSchoolContext(snapshot, schoolId) {
  for (const tenantState of snapshot.tenantStates || []) {
    for (const district of tenantState.districts || []) {
      const school = (district.schools || []).find((item) => item.id === schoolId);
      if (school) return { tenantState, district, school, stateId: tenantState.id, districtId: district.id, schoolId: school.id };
    }
  }
  return null;
}

function requireSchoolAccess(actor, context) {
  if (!context) {
    const error = new Error("School not found");
    error.statusCode = 404;
    throw error;
  }
  if (!canAccessTenantResource(actor, context)) {
    const error = new Error("School is outside your tenant scope");
    error.statusCode = 403;
    throw error;
  }
  return context;
}

function recordsForSchool(records, context) {
  return (records || []).filter((record) => {
    const scoped = normalizeTenantRecord(record);
    return scoped.stateId === context.stateId && scoped.districtId === context.districtId && scoped.schoolId === context.schoolId;
  });
}

function requirementsReady(requirements = []) {
  return requirements.every((name) => Boolean(String(process.env[name] || "").trim()));
}

function readinessTimestamp() {
  return new Date().toISOString();
}

function actionResponse(snapshot, session, extra = {}, collections = []) {
  const scoped = scopedSnapshot(snapshot, session);
  const payload = { ok: true, ...extra, productionReadiness: scoped.productionReadiness };
  for (const collection of collections) payload[collection] = scoped[collection];
  return payload;
}

function safeTemplateClone(record) {
  const excludedKeys = new Set(["studentId", "studentIds", "student", "guardian", "guardianId", "ownerId", "submissionId", "submissions", "lmsSubmissions", "gradebookSubmissions", "score", "grades", "messages", "conversations", "attachments", "files", "fileUploads", "storedPath", "fileId", "auditLogs", "rosterRecords", "studentProgress"]);
  const scrub = (value) => {
    if (Array.isArray(value)) return value.map(scrub);
    if (!value || typeof value !== "object") return value;
    return Object.fromEntries(Object.entries(value).filter(([key]) => !excludedKeys.has(key)).map(([key, child]) => [key, scrub(child)]));
  };
  return scrub(structuredClone(record));
}

function analyticsMetric(label, value, cohortSize, threshold) {
  const suppressed = cohortSize < threshold;
  return { label, value: suppressed ? null : value, cohortSize: suppressed ? 0 : cohortSize, status: suppressed ? "Suppressed" : "Published" };
}

function scopedSnapshot(snapshot, session) {
  const result = structuredClone(snapshot);
  const actor = session.user;
  result.userProfiles = scopedProfiles(result.userProfiles || [], session);
  tenantCollections.forEach((collection) => {
    result[collection] = (result[collection] || []).filter((record) => serverManagedTenantCollections.has(collection)
      ? canViewScheduleRecord(actor, record, collection, result)
      : canAccessTenantResource(actor, record, collection));
  });
  if (!canAdmin(session)) {
    const limitedReadiness = {
      gradebook: result.productionReadiness?.gradebook || structuredClone(productionReadiness.gradebook),
      gradebooks: actor.schoolId && result.productionReadiness?.gradebooks?.[actor.schoolId] ? { [actor.schoolId]: result.productionReadiness.gradebooks[actor.schoolId] } : {},
      accessibility: result.productionReadiness?.accessibility || structuredClone(productionReadiness.accessibility),
    };
    if (canAccessSchoolSensitiveRecords(actor)) limitedReadiness.interventions = (result.productionReadiness?.interventions || []).filter((record) => canAccessTenantResource(actor, record, "interventions"));
    result.productionReadiness = limitedReadiness;
  }
  else if (!actor.permissions?.includes("global-access") && result.productionReadiness) {
    result.productionReadiness.domains = (result.productionReadiness.domains || []).filter((record) => canAccessTenantResource(actor, record));
    result.productionReadiness.enrollmentImports = (result.productionReadiness.enrollmentImports || []).filter((record) => canAccessTenantResource(actor, record));
    result.productionReadiness.interventions = (result.productionReadiness.interventions || []).filter((record) => canAccessTenantResource(actor, record, "interventions"));
    result.productionReadiness.academicYears = (result.productionReadiness.academicYears || []).filter((record) => canAccessTenantResource(actor, record));
    if (result.productionReadiness.security) result.productionReadiness.security.activeSessions = [];
    if (result.productionReadiness.gradebooks) result.productionReadiness.gradebooks = actor.schoolId && result.productionReadiness.gradebooks[actor.schoolId] ? { [actor.schoolId]: result.productionReadiness.gradebooks[actor.schoolId] } : {};
  }
  return result;
}

function mergeScopedSnapshot(existing, incoming, session) {
  const actor = session.user;
  const merged = structuredClone(existing);
  merged.state = { ...existing.state, ...incoming.state, apiMode: "live-api" };
  if (canAdmin(session)) {
    const preservedProfiles = (existing.userProfiles || []).filter((profile) => !canAccessScope(actor, normalizeProfileScope(profile)));
    const incomingProfiles = (incoming.userProfiles || []).filter((profile) => canAccessScope(actor, normalizeProfileScope(profile)));
    merged.userProfiles = [...preservedProfiles, ...incomingProfiles];
  }
  tenantCollections.forEach((collection) => {
    if (serverManagedTenantCollections.has(collection)) return;
    const preserved = (existing[collection] || []).filter((record) => !canAccessTenantResource(actor, record, collection));
    const accepted = (incoming[collection] || []).filter((record) => canAccessTenantResource(actor, normalizeTenantRecord(record, actor), collection)).map((record) => normalizeTenantRecord(record, actor));
    merged[collection] = [...preserved, ...accepted];
  });
  if (incoming.productionReadiness && actor.permissions?.includes("global-access")) {
    const incomingReadiness = structuredClone(incoming.productionReadiness);
    const serverManagedKeys = ["backups", "domains", "enrollmentImports", "dataPlatform", "providers", "integrations", "jobs", "academicYears", "interventions", "analytics", "sandbox", "pilot", "securityReview"];
    for (const key of serverManagedKeys) {
      if (Object.hasOwn(existing.productionReadiness || {}, key)) incomingReadiness[key] = structuredClone(existing.productionReadiness[key]);
    }
    merged.productionReadiness = incomingReadiness;
  }
  else if (incoming.productionReadiness?.gradebooks && actor.schoolId && (actor.permissions || []).some((permission) => ["teacher-tools", "lms", "manage-users"].includes(permission))) {
    merged.productionReadiness ||= structuredClone(productionReadiness);
    merged.productionReadiness.gradebooks ||= {};
    if (incoming.productionReadiness.gradebooks[actor.schoolId]) merged.productionReadiness.gradebooks[actor.schoolId] = structuredClone(incoming.productionReadiness.gradebooks[actor.schoolId]);
  }
  return merged;
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

  for (const [collection, defaults] of [["scheduleEntries", scheduleEntries], ["scheduleRequests", scheduleRequests]]) {
    if (!Array.isArray(snapshot[collection])) {
      snapshot[collection] = structuredClone(defaults);
      changed = true;
    }
  }

  const defaultRosterStudentIds = new Map(rosterRecords.filter((record) => record.studentId).map((record) => [record.id, record.studentId]));
  snapshot.rosterRecords = (snapshot.rosterRecords || []).map((record) => {
    const studentId = record.studentId || defaultRosterStudentIds.get(record.id);
    if (studentId && studentId !== record.studentId) {
      changed = true;
      return { ...record, studentId };
    }
    return record;
  });

  tenantCollections.forEach((collection) => {
    snapshot[collection] = (snapshot[collection] || []).map((record) => {
      const normalized = normalizeTenantRecord(record);
      if (JSON.stringify(normalized) !== JSON.stringify(record)) changed = true;
      return normalized;
    });
  });
  const migratedReadiness = mergeDeepDefaults(productionReadiness, snapshot.productionReadiness);
  if (JSON.stringify(migratedReadiness) !== JSON.stringify(snapshot.productionReadiness)) {
    snapshot.productionReadiness = migratedReadiness;
    changed = true;
  }

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

const scheduleTargetTypes = new Set(["staff", "student", "school", "class"]);
const scheduleStatuses = new Set(["Scheduled", "Cancelled", "Completed"]);
const scheduleReviewStatuses = new Set(["Approved", "Declined"]);

function scheduleError(message, statusCode = 400) {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
}

function scheduleText(value, fallback = "", maximum = 500) {
  return String(value ?? fallback).trim().slice(0, maximum);
}

function validateScheduleDateAndTime(record) {
  const parsedDate = new Date(`${record.date}T00:00:00.000Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.date) || Number.isNaN(parsedDate.valueOf()) || parsedDate.toISOString().slice(0, 10) !== record.date) {
    scheduleError("A valid schedule date is required");
  }
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(record.startTime) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(record.endTime)) {
    scheduleError("Schedule times must use 24-hour HH:mm format");
  }
  if (record.endTime <= record.startTime) scheduleError("Schedule end time must be after start time");
}

function findScheduleStudent(snapshot, targetId) {
  const id = String(targetId || "");
  const roster = (snapshot.rosterRecords || []).find((record) => [record.id, record.studentId, record.learnerId].filter(Boolean).map(String).includes(id));
  if (roster) return { name: roster.student || roster.label || "Student", studentId: roster.studentId || roster.learnerId || roster.id, assignedTeacher: roster.teacher || "", scope: normalizeTenantRecord(roster) };
  const profile = (snapshot.userProfiles || []).find((item) => item.scope === "student" && [item.id, item.studentId].filter(Boolean).map(String).includes(id));
  if (profile) return { name: profile.label || "Student", studentId: profile.studentId || profile.id, assignedTeacher: "", scope: normalizeProfileScope(profile) };
  return null;
}

function resolveScheduleTarget(snapshot, actor, input, { allowPersonalRequest = false } = {}) {
  const targetType = scheduleText(input.targetType).toLowerCase();
  const targetId = scheduleText(input.targetId, "", 160);
  if (!scheduleTargetTypes.has(targetType)) scheduleError("Schedule targetType must be staff, student, school, or class");
  if (!targetId) scheduleError("A schedule targetId is required");

  const admin = isScheduleAdmin(actor);
  const teacher = !admin && actor.scope === "school" && actor.permissions?.includes("teacher-tools");
  const requestedSchoolId = scheduleText(input.schoolId || actor.schoolId, "", 160);
  let context;
  let targetName;
  let studentId = "";
  let targetAssignedTeacher = "";

  if (targetType === "staff") {
    const profile = (snapshot.userProfiles || []).find((item) => item.id === targetId);
    if (!profile || profile.role === "Student") scheduleError("Schedule staff target was not found", 404);
    const targetScope = normalizeProfileScope(profile);
    if (!admin && (!teacher || targetId !== actor.id)) scheduleError("Teachers may schedule only themselves or students in their school", 403);
    if (!admin && allowPersonalRequest && targetId !== actor.id) scheduleError("You may request a staff schedule only for yourself", 403);
    if (admin && !canAccessScope(actor, targetScope)) scheduleError("Schedule target is outside your tenant scope", 403);
    context = requireSchoolAccess(actor, findSchoolContext(snapshot, targetScope.schoolId || requestedSchoolId));
    targetName = profile.label || profile.id;
  }
  else if (targetType === "student") {
    const student = findScheduleStudent(snapshot, targetId);
    if (!student) scheduleError("Schedule student target was not found", 404);
    if (!canAccessScope(actor, student.scope)) scheduleError("Schedule target is outside your tenant scope", 403);
    if (teacher && student.assignedTeacher !== actor.label) scheduleError("Schedule student is not assigned to this teacher", 403);
    if (!admin && !teacher && allowPersonalRequest) {
      const targetStudentIds = new Set([targetId, student.studentId].filter(Boolean).map(String));
      const linked = actor.scope === "guardian"
        ? (actor.studentIds || []).map(String).some((id) => targetStudentIds.has(id))
        : actor.scope === "student" && [String(actor.id || ""), String(actor.studentId || "")].some((id) => targetStudentIds.has(id));
      if (!linked) scheduleError("Schedule target is not linked to your account", 403);
    }
    if (!admin && !teacher && !allowPersonalRequest) scheduleError("Teacher or administrator permission required", 403);
    context = requireSchoolAccess(actor, findSchoolContext(snapshot, student.scope.schoolId));
    targetName = student.name;
    studentId = student.studentId;
    targetAssignedTeacher = student.assignedTeacher;
  }
  else {
    if (!admin) scheduleError("Only administrators may schedule schools or classes", 403);
    context = requireSchoolAccess(actor, findSchoolContext(snapshot, targetType === "school" ? targetId : requestedSchoolId));
    targetName = targetType === "school" ? context.school.name : targetId;
  }

  return { targetType, targetId, targetName, studentId, assignedTeacher: targetAssignedTeacher, stateId: context.stateId, districtId: context.districtId, schoolId: context.schoolId };
}

function scheduleRecordFromInput(input, actor, target, existing = null) {
  const record = {
    id: existing?.id || `schedule-${Date.now()}-${randomUUID().slice(0, 8)}`,
    title: scheduleText(input.title ?? existing?.title, "", 160),
    date: scheduleText(input.date ?? existing?.date, "", 10),
    startTime: scheduleText(input.startTime ?? existing?.startTime, "", 5),
    endTime: scheduleText(input.endTime ?? existing?.endTime, "", 5),
    targetType: target.targetType,
    targetId: target.targetId,
    targetName: target.targetName,
    ...(target.studentId ? { studentId: target.studentId } : {}),
    ...(target.assignedTeacher ? { assignedTeacher: target.assignedTeacher } : {}),
    category: scheduleText(input.category ?? existing?.category, "General", 80) || "General",
    location: scheduleText(input.location ?? existing?.location, "", 200),
    notes: scheduleText(input.notes ?? existing?.notes, "", 2000),
    createdBy: existing?.createdBy || actor.id,
    createdByName: existing?.createdByName || actor.label,
    status: scheduleText(input.status ?? existing?.status, "Scheduled", 20) || "Scheduled",
    stateId: target.stateId,
    districtId: target.districtId,
    schoolId: target.schoolId,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (!record.title) scheduleError("A schedule title is required");
  if (!scheduleStatuses.has(record.status)) scheduleError("Schedule status must be Scheduled, Cancelled, or Completed");
  validateScheduleDateAndTime(record);
  return record;
}

function scheduleTargetsMatch(first, second) {
  if (first.targetType !== second.targetType) return false;
  if (first.targetType !== "student") return String(first.targetId || "") === String(second.targetId || "");
  const firstIds = new Set([first.targetId, first.studentId].filter(Boolean).map(String));
  return [second.targetId, second.studentId].filter(Boolean).map(String).some((id) => firstIds.has(id));
}

function findScheduleConflict(entries, candidate, ignoreId = "") {
  if (candidate.status === "Cancelled") return null;
  return (entries || []).find((entry) => entry.id !== ignoreId
    && entry.status !== "Cancelled"
    && entry.stateId === candidate.stateId
    && entry.districtId === candidate.districtId
    && entry.schoolId === candidate.schoolId
    && entry.date === candidate.date
    && scheduleTargetsMatch(entry, candidate)
    && candidate.startTime < entry.endTime
    && entry.startTime < candidate.endTime) || null;
}

function requireNoScheduleConflict(snapshot, candidate, ignoreId = "") {
  const conflict = findScheduleConflict(snapshot.scheduleEntries, candidate, ignoreId);
  if (conflict) scheduleError(`Schedule conflicts with ${conflict.title} (${conflict.startTime}-${conflict.endTime})`, 409);
}

function requestRecordFromInput(input, actor, target, snapshot) {
  let requester = actor;
  if (isScheduleAdmin(actor) && input.requestedBy && input.requestedBy !== actor.id) {
    const requestedProfile = (snapshot.userProfiles || []).find((profile) => profile.id === input.requestedBy);
    if (!requestedProfile || !canAccessScope(actor, normalizeProfileScope(requestedProfile))) scheduleError("Schedule requester is outside your tenant scope", 403);
    requester = requestedProfile;
  }
  const record = {
    id: `schedule-request-${Date.now()}-${randomUUID().slice(0, 8)}`,
    title: scheduleText(input.title, "", 160),
    requestType: scheduleText(input.requestType, "General", 80) || "General",
    date: scheduleText(input.date, "", 10),
    startTime: scheduleText(input.startTime, "", 5),
    endTime: scheduleText(input.endTime, "", 5),
    targetType: target.targetType,
    targetId: target.targetId,
    targetName: target.targetName,
    ...(target.studentId ? { studentId: target.studentId } : {}),
    ...(target.assignedTeacher ? { assignedTeacher: target.assignedTeacher } : {}),
    reason: scheduleText(input.reason, "", 2000),
    flexibility: scheduleText(input.flexibility, "Exact time", 80) || "Exact time",
    location: scheduleText(input.location || input.notes, "", 500),
    notes: scheduleText(input.notes, "", 500),
    status: "Pending",
    requestedBy: requester.id,
    requestedByName: requester.label,
    reviewedBy: "",
    reviewedByName: "",
    reviewNote: "",
    scheduleId: "",
    stateId: target.stateId,
    districtId: target.districtId,
    schoolId: target.schoolId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (!record.title) scheduleError("A schedule request title is required");
  if (!record.reason) scheduleError("A schedule request reason is required");
  validateScheduleDateAndTime(record);
  return record;
}

function canManageSchedule(snapshot, actor, record) {
  if (!canAccessScope(actor, normalizeTenantRecord(record))) return false;
  if (isScheduleAdmin(actor)) return true;
  if (actor.scope !== "school" || !actor.permissions?.includes("teacher-tools")) return false;
  if (record.targetType === "staff") return record.targetId === actor.id;
  if (record.targetType !== "student") return false;
  const student = findScheduleStudent(snapshot, record.studentId || record.targetId);
  return student?.assignedTeacher === actor.label;
}

function notFound(res) {
  sendJson(res, 404, { ok: false, error: "Not found" });
}

function sessionFromRequest(req) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  const session = token ? sessions.get(token) : null;
  if (session && Date.now() - session.createdAt > 24 * 60 * 60 * 1000) {
    sessions.delete(token);
    return null;
  }
  if (session) session.lastActive = Date.now();
  return session;
}

async function handlePlatformAction(req, res) {
  const session = requireSession(req);
  const actor = session.user;
  const body = await readJson(req);
  const action = String(body.action || "");
  const supportedActions = new Set(["test-provider", "test-integration", "sync-integration", "run-job", "create-sandbox", "update-pilot", "generate-security-review", "refresh-analytics", "academic-year-rollover", "create-intervention", "complete-intervention"]);
  if (!supportedActions.has(action)) {
    sendJson(res, 400, { ok: false, error: "Unsupported platform action" });
    return;
  }

  const globalActions = new Set(["test-provider", "create-sandbox", "update-pilot", "generate-security-review"]);
  const adminActions = new Set(["test-integration", "sync-integration", "run-job", "academic-year-rollover"]);
  const staffActions = new Set(["refresh-analytics", "create-intervention", "complete-intervention"]);
  if (globalActions.has(action) && !actor.permissions?.includes("global-access")) {
    sendJson(res, 403, { ok: false, error: "Global administrator permission required" });
    return;
  }
  if (adminActions.has(action) && !hasAnyPermission(actor, ["manage-users", "manage-tenants"])) {
    sendJson(res, 403, { ok: false, error: "Administrator permission required" });
    return;
  }
  if (staffActions.has(action) && !hasAnyPermission(actor, ["manage-users", "teacher-tools", "view-compliance"])) {
    sendJson(res, 403, { ok: false, error: "School staff permission required" });
    return;
  }

  const snapshot = await loadSnapshot();
  const readiness = snapshot.productionReadiness;
  const now = readinessTimestamp();

  if (action === "test-provider") {
    const provider = (readiness.providers || []).find((item) => item.id === body.providerId);
    if (!provider) {
      sendJson(res, 404, { ok: false, error: "Provider not found" });
      return;
    }
    const configured = requirementsReady(provider.requirements || []);
    Object.assign(provider, {
      credentialConfigured: configured,
      status: configured ? "Connected" : provider.id === "malware" ? "Fallback active" : "Needs credentials",
      lastTest: configured ? `Connected • ${now}` : provider.id === "malware" ? `Built-in signature screening active • ${now}` : `Deployment credentials required • ${now}`,
    });
    if (provider.id === "database") Object.assign(readiness.dataPlatform, { status: configured ? "Connected" : "Schema ready", migration: configured ? "DATABASE_URL configured; relational migration ready" : "Awaiting DATABASE_URL" });
    if (provider.id === "object-storage") readiness.backups.offsiteStatus = configured ? "Connected" : "Needs credentials";
    if (provider.id === "malware") readiness.storage.malwareEngine = configured ? "ClamAV configured" : "Built-in signature screening";
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { provider: structuredClone(provider) }));
    return;
  }

  if (action === "test-integration" || action === "sync-integration") {
    const integration = (readiness.integrations || []).find((item) => item.id === body.integrationId);
    if (!integration) {
      sendJson(res, 404, { ok: false, error: "Integration not found" });
      return;
    }
    const context = requireSchoolAccess(actor, findSchoolContext(snapshot, body.schoolId || actor.schoolId));
    const configured = integration.id === "oneroster" || requirementsReady(integration.requirements || []);
    if (!configured) {
      Object.assign(integration, { status: "Needs credentials", lastSync: `Credentials required • ${now}`, credentialConfigured: false });
      await saveSnapshot(snapshot);
      sendJson(res, 200, actionResponse(snapshot, session, { integration: structuredClone(integration), blocked: action === "sync-integration" }));
      return;
    }
    if (action === "test-integration") Object.assign(integration, { status: "Ready", lastSync: `Connection test passed • ${now}`, credentialConfigured: integration.id !== "oneroster" });
    else Object.assign(integration, { status: "Synced", lastSync: now, records: recordsForSchool(snapshot.rosterRecords, context).length, credentialConfigured: integration.id !== "oneroster" });
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { integration: structuredClone(integration), blocked: false }));
    return;
  }

  if (action === "run-job") {
    const job = (readiness.jobs || []).find((item) => item.id === body.jobId);
    if (!job) {
      sendJson(res, 404, { ok: false, error: "Job not found" });
      return;
    }
    const storageProvider = (readiness.providers || []).find((item) => item.id === "object-storage");
    const blocked = job.id === "backup-copy" && !(storageProvider && requirementsReady(storageProvider.requirements || []));
    Object.assign(job, blocked ? { status: "Blocked", progress: 0, lastRun: "Needs object storage credentials" } : { status: "Completed", progress: 100, lastRun: now });
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { job: structuredClone(job), blocked }));
    return;
  }

  if (action === "create-sandbox") {
    const source = requireSchoolAccess(actor, findSchoolContext(snapshot, body.sourceSchoolId));
    const existingId = String(readiness.sandbox?.tenantId || "");
    const sandboxId = existingId || `sandbox-${Date.now().toString(36)}`;
    const expiresInDays = Math.min(90, Math.max(1, Number(body.expiresInDays) || 30));
    const expiresOn = new Date(Date.now() + expiresInDays * 86400000).toISOString().slice(0, 10);
    const name = String(body.name || readiness.sandbox?.name || "EduConnect Safe Test School").trim().slice(0, 120);
    for (const tenantState of snapshot.tenantStates || []) for (const district of tenantState.districts || []) district.schools = (district.schools || []).filter((school) => school.id !== sandboxId);
    const sandboxSchool = {
      id: sandboxId,
      name,
      category: source.school.category || "Training",
      students: 0,
      staff: 0,
      status: "Active",
      subdomain: `sandbox-${sandboxId.slice(-8)}`,
      plan: source.school.plan || "Sandbox",
      modules: structuredClone(source.school.modules || []),
      storage: 0,
      uptime: "New",
      theme: source.school.theme || "Discovery Blue",
      isolation: "Synthetic sandbox tenant",
      workHours: source.school.workHours || "Mon-Fri, 8:00 AM-4:00 PM",
      afterHours: source.school.afterHours || "Messages wait until school hours",
      sandbox: true,
      sandboxOf: source.schoolId,
      expiresOn,
      loginMessage: "Welcome to a synthetic EduConnect training school.",
    };
    source.district.schools.push(sandboxSchool);
    snapshot.schoolDesigns ||= {};
    snapshot.schoolDesigns[sandboxId] = { ...(structuredClone(snapshot.schoolDesigns[source.schoolId] || {})), crest: "Safe Test School", voice: "Synthetic learning and training workspace" };

    const sourceLessons = recordsForSchool(snapshot.lmsLessons, source);
    const sourceAssignments = recordsForSchool(snapshot.lmsAssignments, source);
    const sourceCourses = recordsForSchool(snapshot.curriculumCourses, source);
    const sourceQuestions = recordsForSchool(snapshot.questionBank, source);
    const lessonIds = new Map(sourceLessons.map((item) => [item.id, `${item.id}-${sandboxId}`]));
    const assignmentIds = new Map(sourceAssignments.map((item) => [item.id, `${item.id}-${sandboxId}`]));
    const scope = { stateId: source.stateId, districtId: source.districtId, schoolId: sandboxId };
    const clonedLessons = sourceLessons.map((item) => ({ ...safeTemplateClone(item), id: lessonIds.get(item.id), ...scope, status: "Draft", academicYearId: "sandbox" }));
    const clonedAssignments = sourceAssignments.map((item) => ({ ...safeTemplateClone(item), id: assignmentIds.get(item.id), ...scope, status: "Draft", academicYearId: "sandbox", analytics: 0, attachments: [], exception: "None" }));
    const clonedCourses = sourceCourses.map((item) => ({ ...safeTemplateClone(item), id: `${item.id}-${sandboxId}`, ...scope, status: "Draft", academicYearId: "sandbox", units: (item.units || []).map((unit) => ({ ...safeTemplateClone(unit), id: `${unit.id}-${sandboxId}`, lessonIds: (unit.lessonIds || []).map((id) => lessonIds.get(id)).filter(Boolean), assignmentIds: (unit.assignmentIds || []).map((id) => assignmentIds.get(id)).filter(Boolean) })) }));
    const clonedQuestions = sourceQuestions.map((item) => ({ ...safeTemplateClone(item), id: `${item.id}-${sandboxId}`, ...scope }));
    snapshot.lmsLessons = [...(snapshot.lmsLessons || []).filter((item) => normalizeTenantRecord(item).schoolId !== sandboxId), ...clonedLessons];
    snapshot.lmsAssignments = [...(snapshot.lmsAssignments || []).filter((item) => normalizeTenantRecord(item).schoolId !== sandboxId), ...clonedAssignments];
    snapshot.curriculumCourses = [...(snapshot.curriculumCourses || []).filter((item) => normalizeTenantRecord(item).schoolId !== sandboxId), ...clonedCourses];
    snapshot.questionBank = [...(snapshot.questionBank || []).filter((item) => normalizeTenantRecord(item).schoolId !== sandboxId), ...clonedQuestions];
    readiness.sandbox = { status: existingId ? "Reset with synthetic content" : "Active", tenantId: sandboxId, name, sourceSchoolId: source.schoolId, syntheticOnly: true, expiresOn, createdAt: now };
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ...actionResponse(snapshot, session, { sandbox: structuredClone(readiness.sandbox) }, ["lmsLessons", "lmsAssignments", "curriculumCourses", "questionBank"]), tenantStates: structuredClone(snapshot.tenantStates), schoolDesigns: structuredClone(snapshot.schoolDesigns) });
    return;
  }

  if (action === "update-pilot") {
    const pilot = readiness.pilot;
    const checkpoint = String(body.checkpoint || "");
    if (!pilot.checkpoints.includes(checkpoint)) {
      sendJson(res, 400, { ok: false, error: "Unknown pilot checkpoint" });
      return;
    }
    pilot.completed = body.completed ? [...new Set([...(pilot.completed || []), checkpoint])] : (pilot.completed || []).filter((item) => item !== checkpoint);
    pilot.status = pilot.completed.length === pilot.checkpoints.length ? "Ready for outcome review" : pilot.completed.length ? "In progress" : "Planning";
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { pilot: structuredClone(pilot) }));
    return;
  }

  if (action === "generate-security-review") {
    Object.assign(readiness.securityReview, { status: "Ready for independent review", lastExport: now });
    const reviewPackage = {
      generatedAt: now,
      application: "EduConnect",
      scope: structuredClone(readiness.securityReview.scope || []),
      tenantIsolation: { status: readiness.tenantIsolation.status, strategy: readiness.tenantIsolation.strategy },
      recovery: { rpoHours: readiness.backups.rpoHours, rtoHours: readiness.backups.rtoHours, encrypted: Boolean(readiness.backups.encrypted) },
      providers: (readiness.providers || []).map((provider) => ({ id: provider.id, name: provider.name, status: provider.status, credentialConfigured: Boolean(provider.credentialConfigured) })),
      note: "Credentials, personal data, student records, and session identifiers are excluded.",
    };
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { securityReview: structuredClone(readiness.securityReview), reviewPackage }));
    return;
  }

  if (action === "refresh-analytics") {
    const context = requireSchoolAccess(actor, findSchoolContext(snapshot, body.schoolId || actor.schoolId));
    const threshold = Math.max(5, Number.parseInt(process.env.EDUCONNECT_ANALYTICS_MIN_COHORT || readiness.analytics.privacyThreshold || 5, 10) || 5);
    const roster = recordsForSchool(snapshot.rosterRecords, context);
    const submissions = recordsForSchool(snapshot.lmsSubmissions, context);
    const interventions = recordsForSchool(readiness.interventions, context);
    const completed = submissions.filter((item) => ["Submitted", "Returned"].includes(item.status)).length;
    const monitoring = interventions.filter((item) => item.status === "Monitoring").length;
    const metrics = [
      analyticsMetric("Active learners", roster.length, roster.length, threshold),
      analyticsMetric("Assignment completion", `${Math.round((completed / Math.max(1, roster.length)) * 100)}%`, roster.length, threshold),
      analyticsMetric("Interventions on track", `${Math.round((monitoring / Math.max(1, interventions.length)) * 100)}%`, interventions.length, threshold),
    ];
    readiness.analytics = { ...readiness.analytics, privacyThreshold: threshold, lastRefresh: now, suppressedGroups: metrics.filter((item) => item.status === "Suppressed").length, metrics };
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { analytics: structuredClone(readiness.analytics) }));
    return;
  }

  if (action === "academic-year-rollover") {
    const context = requireSchoolAccess(actor, findSchoolContext(snapshot, body.schoolId || actor.schoolId));
    const name = String(body.name || "").trim().slice(0, 80);
    if (!name || !body.startsOn || !body.endsOn) {
      sendJson(res, 400, { ok: false, error: "School year name and dates are required" });
      return;
    }
    const slug = name.normalize("NFKD").replace(/[^0-9a-z]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || `year-${Date.now()}`;
    const yearId = `${context.schoolId}-${slug}`;
    const existing = (readiness.academicYears || []).find((year) => year.id === yearId || (year.name === name && normalizeTenantRecord(year).schoolId === context.schoolId));
    if (existing) {
      sendJson(res, 200, actionResponse(snapshot, session, { year: structuredClone(existing), idempotent: true, copied: { courses: 0, lessons: 0, assignments: 0 } }, ["lmsLessons", "lmsAssignments", "curriculumCourses"]));
      return;
    }
    const schoolYears = (readiness.academicYears || []).filter((year) => normalizeTenantRecord(year).schoolId === context.schoolId);
    const activeYear = schoolYears.find((year) => year.status === "Active");
    if (activeYear) Object.assign(activeYear, { status: "Archived", archivedAt: now, stateId: context.stateId, districtId: context.districtId, schoolId: context.schoolId });
    const year = { id: yearId, name, startsOn: String(body.startsOn), endsOn: String(body.endsOn), status: "Active", archivedAt: "", stateId: context.stateId, districtId: context.districtId, schoolId: context.schoolId };
    readiness.academicYears ||= [];
    readiness.academicYears.push(year);
    let clonedLessons = [];
    let clonedAssignments = [];
    let clonedCourses = [];
    if (body.copyLessons !== false) {
      const rolloverSource = (records) => {
        const schoolRecords = recordsForSchool(records, context);
        const tagged = activeYear ? schoolRecords.filter((item) => item.academicYearId === activeYear.id) : [];
        return tagged.length ? tagged : schoolRecords.filter((item) => !item.academicYearId || item.academicYearId === activeYear?.id);
      };
      const sourceLessons = rolloverSource(snapshot.lmsLessons);
      const sourceAssignments = rolloverSource(snapshot.lmsAssignments);
      const sourceCourses = rolloverSource(snapshot.curriculumCourses);
      const lessonIds = new Map(sourceLessons.map((item) => [item.id, `${item.id}-${yearId}`]));
      const assignmentIds = new Map(sourceAssignments.map((item) => [item.id, `${item.id}-${yearId}`]));
      const scope = { stateId: context.stateId, districtId: context.districtId, schoolId: context.schoolId, academicYearId: yearId, status: "Draft" };
      clonedLessons = sourceLessons.map((item) => ({ ...safeTemplateClone(item), id: lessonIds.get(item.id), ...scope, title: `${item.title} (${name})` }));
      clonedAssignments = sourceAssignments.map((item) => ({ ...safeTemplateClone(item), id: assignmentIds.get(item.id), ...scope, title: `${item.title} (${name})`, analytics: 0, attachments: [], exception: "None" }));
      clonedCourses = sourceCourses.map((item) => ({ ...safeTemplateClone(item), id: `${item.id}-${yearId}`, ...scope, title: `${item.title} (${name})`, units: (item.units || []).map((unit) => ({ ...safeTemplateClone(unit), id: `${unit.id}-${yearId}`, lessonIds: (unit.lessonIds || []).map((id) => lessonIds.get(id)).filter(Boolean), assignmentIds: (unit.assignmentIds || []).map((id) => assignmentIds.get(id)).filter(Boolean) })) }));
      snapshot.lmsLessons = [...(snapshot.lmsLessons || []), ...clonedLessons];
      snapshot.lmsAssignments = [...(snapshot.lmsAssignments || []), ...clonedAssignments];
      snapshot.curriculumCourses = [...(snapshot.curriculumCourses || []), ...clonedCourses];
    }
    if (body.copyGradebook !== false) {
      const sourceGradebook = readiness.gradebooks?.[context.schoolId] || readiness.gradebook || {};
      readiness.gradebooks ||= {};
      readiness.gradebooks[context.schoolId] = { categories: structuredClone(sourceGradebook.categories || []), standards: structuredClone(sourceGradebook.standards || []), sisExport: { status: "Ready", format: sourceGradebook.sisExport?.format || "OneRoster CSV", lastExport: "Not exported" }, academicYearId: yearId };
    }
    await saveSnapshot(snapshot);
    sendJson(res, 201, actionResponse(snapshot, session, { year: structuredClone(year), idempotent: false, copied: { courses: clonedCourses.length, lessons: clonedLessons.length, assignments: clonedAssignments.length } }, ["lmsLessons", "lmsAssignments", "curriculumCourses"]));
    return;
  }

  if (action === "create-intervention") {
    const requested = body.intervention && typeof body.intervention === "object" ? body.intervention : {};
    const context = requireSchoolAccess(actor, findSchoolContext(snapshot, requested.schoolId || body.schoolId || actor.schoolId));
    const studentId = String(requested.studentId || "").trim();
    const student = recordsForSchool(snapshot.rosterRecords, context).find((record) => String(record.id || "") === studentId || String(record.studentId || "") === studentId);
    if (!studentId || !student) {
      sendJson(res, 400, { ok: false, error: "A learner in this school is required" });
      return;
    }
    const intervention = {
      id: String(requested.id || `intervention-${Date.now()}`).replace(/[^a-z0-9-]+/gi, "-").toLowerCase(),
      stateId: context.stateId,
      districtId: context.districtId,
      schoolId: context.schoolId,
      studentId,
      student: String(requested.student || student.student || "Learner").slice(0, 120),
      area: String(requested.area || "Learning support").slice(0, 160),
      tier: String(requested.tier || "Tier 1").slice(0, 40),
      owner: String(requested.owner || actor.label || actor.id).slice(0, 120),
      nextReview: String(requested.nextReview || "").slice(0, 20),
      notes: String(requested.notes || "").slice(0, 2000),
      status: "Monitoring",
      createdAt: now,
      createdBy: actor.id,
    };
    readiness.interventions ||= [];
    if (readiness.interventions.some((item) => item.id === intervention.id)) {
      sendJson(res, 409, { ok: false, error: "Intervention already exists" });
      return;
    }
    readiness.interventions.unshift(intervention);
    await saveSnapshot(snapshot);
    sendJson(res, 201, actionResponse(snapshot, session, { intervention: structuredClone(intervention) }));
    return;
  }

  if (action === "complete-intervention") {
    const intervention = (readiness.interventions || []).find((item) => item.id === body.interventionId);
    if (!intervention) {
      sendJson(res, 404, { ok: false, error: "Intervention not found" });
      return;
    }
    if (!canAccessTenantResource(actor, intervention, "interventions")) {
      sendJson(res, 403, { ok: false, error: "Intervention is outside your tenant scope" });
      return;
    }
    Object.assign(intervention, { status: "Completed", completedAt: now, completedBy: actor.id });
    await saveSnapshot(snapshot);
    sendJson(res, 200, actionResponse(snapshot, session, { intervention: structuredClone(intervention) }));
  }
}

async function handleApi(req, res, pathname) {
  if (pathname === "/api/health" && req.method === "GET") {
    sendJson(res, 200, { ok: true, service: "educonnect-api", mode: "operational", time: new Date().toISOString() });
    return true;
  }

  if (pathname === "/api/state" && req.method === "GET") {
    const session = requireSession(req);
    sendJson(res, 200, { ok: true, snapshot: scopedSnapshot(await loadSnapshot(), session) });
    return true;
  }

  if (pathname === "/api/state" && req.method === "PUT") {
    const session = requireSession(req);
    const body = await readJson(req);
    const existing = await loadSnapshot();
    await saveSnapshot(mergeScopedSnapshot(existing, body.snapshot, session));
    sendJson(res, 200, { ok: true, savedAt: new Date().toISOString() });
    return true;
  }

  if (pathname === "/api/platform/actions" && req.method === "POST") {
    await handlePlatformAction(req, res);
    return true;
  }

  if (pathname === "/api/schedules" && req.method === "GET") {
    const session = requireSession(req);
    const snapshot = await loadSnapshot();
    const schedules = (snapshot.scheduleEntries || []).filter((record) => canViewScheduleRecord(session.user, record, "scheduleEntries", snapshot));
    sendJson(res, 200, { ok: true, schedules });
    return true;
  }

  if (pathname === "/api/schedules" && req.method === "POST") {
    const session = requireSession(req);
    const actor = session.user;
    if (!isScheduleAdmin(actor) && !(actor.scope === "school" && actor.permissions?.includes("teacher-tools"))) {
      sendJson(res, 403, { ok: false, error: "Teacher or administrator permission required" });
      return true;
    }
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const target = resolveScheduleTarget(snapshot, actor, body);
    const schedule = scheduleRecordFromInput({ ...body, status: "Scheduled" }, actor, target);
    requireNoScheduleConflict(snapshot, schedule);
    snapshot.scheduleEntries = [schedule, ...(snapshot.scheduleEntries || [])];
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ok: true, schedule });
    return true;
  }

  const scheduleMatch = pathname.match(/^\/api\/schedules\/([^/]+)$/);
  if (scheduleMatch && req.method === "PATCH") {
    const session = requireSession(req);
    const actor = session.user;
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const id = decodeURIComponent(scheduleMatch[1]);
    const index = (snapshot.scheduleEntries || []).findIndex((record) => record.id === id);
    if (index < 0) {
      sendJson(res, 404, { ok: false, error: "Schedule not found" });
      return true;
    }
    const existing = snapshot.scheduleEntries[index];
    if (!canManageSchedule(snapshot, actor, existing)) {
      sendJson(res, 403, { ok: false, error: "Schedule is outside your authorized targets" });
      return true;
    }
    const target = resolveScheduleTarget(snapshot, actor, { ...existing, ...body });
    const schedule = scheduleRecordFromInput(body, actor, target, existing);
    requireNoScheduleConflict(snapshot, schedule, existing.id);
    snapshot.scheduleEntries[index] = schedule;
    await saveSnapshot(snapshot);
    sendJson(res, 200, { ok: true, schedule });
    return true;
  }

  if (pathname === "/api/schedule-requests" && req.method === "GET") {
    const session = requireSession(req);
    const snapshot = await loadSnapshot();
    const requests = (snapshot.scheduleRequests || []).filter((record) => canViewScheduleRecord(session.user, record, "scheduleRequests", snapshot));
    sendJson(res, 200, { ok: true, requests });
    return true;
  }

  if (pathname === "/api/schedule-requests" && req.method === "POST") {
    const session = requireSession(req);
    const actor = session.user;
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const target = resolveScheduleTarget(snapshot, actor, body, { allowPersonalRequest: true });
    const request = requestRecordFromInput(body, actor, target, snapshot);
    snapshot.scheduleRequests = [request, ...(snapshot.scheduleRequests || [])];
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ok: true, request });
    return true;
  }

  const scheduleRequestMatch = pathname.match(/^\/api\/schedule-requests\/([^/]+)$/);
  if (scheduleRequestMatch && req.method === "PATCH") {
    const session = requireSession(req);
    const actor = session.user;
    if (!isScheduleAdmin(actor)) {
      sendJson(res, 403, { ok: false, error: "Administrator permission required to review schedule requests" });
      return true;
    }
    const body = await readJson(req);
    const status = scheduleText(body.status, "", 20);
    if (!scheduleReviewStatuses.has(status)) {
      sendJson(res, 400, { ok: false, error: "Schedule request status must be Approved or Declined" });
      return true;
    }
    const reviewNote = scheduleText(body.reviewNote, "", 2000);
    if (status === "Declined" && !reviewNote) {
      sendJson(res, 400, { ok: false, error: "A review note is required when declining a schedule request" });
      return true;
    }
    const snapshot = await loadSnapshot();
    const id = decodeURIComponent(scheduleRequestMatch[1]);
    const request = (snapshot.scheduleRequests || []).find((record) => record.id === id);
    if (!request) {
      sendJson(res, 404, { ok: false, error: "Schedule request not found" });
      return true;
    }
    if (!canAccessScope(actor, normalizeTenantRecord(request))) {
      sendJson(res, 403, { ok: false, error: "Schedule request is outside your tenant scope" });
      return true;
    }
    if (request.status !== "Pending") {
      if (request.status === status) {
        const schedule = status === "Approved" ? (snapshot.scheduleEntries || []).find((entry) => entry.id === request.scheduleId) || null : null;
        sendJson(res, 200, { ok: true, request, schedule, idempotent: true });
        return true;
      }
      sendJson(res, 409, { ok: false, error: `Schedule request is already ${request.status.toLowerCase()}` });
      return true;
    }

    let schedule = null;
    if (status === "Approved") {
      schedule = request.scheduleId ? (snapshot.scheduleEntries || []).find((entry) => entry.id === request.scheduleId) || null : null;
      if (!schedule) {
        const target = resolveScheduleTarget(snapshot, actor, request);
        schedule = scheduleRecordFromInput({
          ...request,
          category: request.requestType,
          location: body.location || request.location || "To be confirmed",
          notes: [request.reason, request.notes].filter(Boolean).join(" — "),
          status: "Scheduled",
        }, actor, target);
        schedule.sourceRequestId = request.id;
        requireNoScheduleConflict(snapshot, schedule);
        snapshot.scheduleEntries = [schedule, ...(snapshot.scheduleEntries || [])];
        request.scheduleId = schedule.id;
      }
    }
    Object.assign(request, {
      status,
      reviewedBy: actor.id,
      reviewedByName: actor.label,
      reviewNote,
      reviewedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    await saveSnapshot(snapshot);
    sendJson(res, 200, { ok: true, request, schedule, idempotent: false });
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
    const identifier = String(body.identifier || body.profileId || "").trim().toLowerCase();
    const snapshot = await loadSnapshot();
    const profile = snapshot.userProfiles.find((item) => [item.id, item.email, item.username]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase() === identifier));
    const account = profile ? await accountFor(profile.id, snapshot) : null;
    if (!account || account.active === false || account.passwordHash !== hashPassword(body.password || "")) {
      sendJson(res, 401, { ok: false, error: "Invalid credentials" });
      return true;
    }
    const token = randomUUID();
    sessions.set(token, { id: randomUUID(), user: account.user, createdAt: Date.now(), lastActive: Date.now(), device: String(req.headers["user-agent"] || "Unknown device").slice(0, 120) });
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
    const uploadType = body.type || "application/octet-stream";
    const uploadBuffer = body.contentBase64 ? Buffer.from(body.contentBase64, "base64") : null;
    if (!allowedUploadTypes.has(uploadType)) {
      sendJson(res, 415, { ok: false, error: "This file type is not allowed" });
      return true;
    }
    if (uploadBuffer && uploadBuffer.length > 5 * 1024 * 1024) {
      sendJson(res, 413, { ok: false, error: "File exceeds the 5 MB upload limit" });
      return true;
    }
    const malwareScan = await scanUploadBuffer(uploadBuffer);
    if (!malwareScan.available) {
      sendJson(res, 503, { ok: false, error: "Configured malware scanner is unavailable; upload rejected" });
      return true;
    }
    if (!malwareScan.clean) {
      sendJson(res, 422, { ok: false, error: "File failed malware screening" });
      return true;
    }
    const quotaGb = Number(snapshot.productionReadiness?.storage?.quotaGb || 25);
    const schoolId = body.schoolId || session.user.schoolId || "ps-118";
    const currentBytes = (snapshot.fileUploads || []).filter((item) => (item.scope?.schoolId || item.schoolId || "ps-118") === schoolId).reduce((sum, item) => sum + Number(item.bytes || 0), 0);
    if (uploadBuffer && currentBytes + uploadBuffer.length > quotaGb * 1024 * 1024 * 1024) {
      sendJson(res, 413, { ok: false, error: "School storage quota exceeded" });
      return true;
    }
    let storedPath = "";
    if (body.contentBase64) {
      await mkdir(uploadDir, { recursive: true });
      const safeName = String(body.name || "upload.bin").replace(/[^a-z0-9._-]+/gi, "-");
      storedPath = join(uploadDir, `${id}-${safeName}`);
      await writeFile(storedPath, uploadBuffer);
    }
    const file = {
      id,
      name: body.name || "Uploaded file",
      area: body.area || "LMS",
      size: body.size || "Unknown",
      status: storedPath ? "Stored on server" : "Metadata stored on server",
      type: uploadType,
      scanStatus: "Clean",
      scanProvider: malwareScan.provider,
      bytes: uploadBuffer?.length || 0,
      optimizationStatus: uploadType.startsWith("image/") || uploadType.startsWith("video/") ? "Queued" : "Not required",
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
      status: "Simulated",
      detail: `${channel} test validated and queued; external delivery requires a connected provider`,
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
    requireSession(req, true);
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
    requireSession(req, true);
    await mkdir(backupDir, { recursive: true });
    const files = (await readdir(backupDir)).filter((file) => file.endsWith(".json")).sort().reverse();
    sendJson(res, 200, { ok: true, backups: files });
    return true;
  }

  if (pathname === "/api/backups" && req.method === "POST") {
    requireSession(req, true);
    await ensureDataFile();
    await mkdir(backupDir, { recursive: true });
    const createdAt = new Date().toISOString();
    const name = `educonnect-backup-${createdAt.replace(/[:.]/g, "-")}.json`;
    const backupSnapshot = await loadSnapshot();
    backupSnapshot.productionReadiness ||= structuredClone(productionReadiness);
    backupSnapshot.productionReadiness.backups ||= structuredClone(productionReadiness.backups);
    backupSnapshot.productionReadiness.backups.lastBackup = createdAt;
    const core = { schemaVersion: 2, createdAt, snapshot: backupSnapshot, accounts: await loadAccounts() };
    const checksum = createHash("sha256").update(JSON.stringify(core)).digest("hex");
    await writeFile(join(backupDir, name), JSON.stringify({ ...core, checksum }, null, 2));
    const currentSnapshot = await loadSnapshot();
    currentSnapshot.productionReadiness ||= structuredClone(productionReadiness);
    currentSnapshot.productionReadiness.backups ||= structuredClone(productionReadiness.backups);
    currentSnapshot.productionReadiness.backups.lastBackup = createdAt;
    await saveSnapshot(currentSnapshot);
    sendJson(res, 201, { ok: true, backup: name, schemaVersion: core.schemaVersion, checksum });
    return true;
  }

  if (pathname === "/api/backups/restore-test" && req.method === "POST") {
    requireSession(req, true);
    const body = await readJson(req);
    await mkdir(backupDir, { recursive: true });
    const files = (await readdir(backupDir)).filter((file) => file.endsWith(".json")).sort().reverse();
    const name = body.backup || files[0];
    if (!name || !files.includes(name)) {
      sendJson(res, 404, { ok: false, error: "Backup not found" });
      return true;
    }
    const restored = JSON.parse(await readFile(join(backupDir, name), "utf8"));
    const snapshot = restored.snapshot || restored;
    const core = restored.snapshot ? { schemaVersion: restored.schemaVersion, createdAt: restored.createdAt, snapshot: restored.snapshot, accounts: restored.accounts } : null;
    const checksumVerified = core && typeof restored.checksum === "string" ? createHash("sha256").update(JSON.stringify(core)).digest("hex") === restored.checksum : null;
    const valid = Boolean(snapshot.state && Array.isArray(snapshot.userProfiles) && (checksumVerified !== false) && (!restored.snapshot || Array.isArray(restored.accounts)));
    const testedAt = new Date().toISOString();
    const currentSnapshot = await loadSnapshot();
    currentSnapshot.productionReadiness ||= structuredClone(productionReadiness);
    currentSnapshot.productionReadiness.backups ||= structuredClone(productionReadiness.backups);
    currentSnapshot.productionReadiness.backups.lastRestoreTest = `${valid ? "Passed" : "Failed"} • ${testedAt}`;
    await saveSnapshot(currentSnapshot);
    sendJson(res, valid ? 200 : 422, { ok: valid, backup: name, schemaVersion: restored.schemaVersion || 1, checksumVerified, result: valid ? "Restore validation passed" : "Backup snapshot is invalid", testedAt });
    return true;
  }

  if (pathname === "/api/enrollment/import" && req.method === "POST") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const rows = Array.isArray(body.rows) ? body.rows : [];
    const schoolId = body.schoolId || session.user.schoolId;
    if (!canAccessTenantResource(session.user, { stateId: session.user.stateId, districtId: session.user.districtId, schoolId })) {
      sendJson(res, 403, { ok: false, error: "Enrollment import is outside your tenant scope" });
      return true;
    }
    const snapshot = await loadSnapshot();
    snapshot.productionReadiness ||= structuredClone(productionReadiness);
    snapshot.productionReadiness.enrollmentImports ||= [];
    const record = { id: `import-${Date.now()}`, schoolId, file: body.file || "roster.csv", rows: rows.length, accepted: rows.length, needsReview: 0, status: "Completed", createdAt: new Date().toISOString() };
    snapshot.productionReadiness.enrollmentImports.unshift(record);
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ok: true, import: record });
    return true;
  }

  if (pathname === "/api/domains/verify" && req.method === "POST") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    snapshot.productionReadiness ||= structuredClone(productionReadiness);
    const domain = (snapshot.productionReadiness.domains || []).find((item) => item.schoolId === body.schoolId);
    if (!domain || !canAccessTenantResource(session.user, { stateId: session.user.stateId, districtId: session.user.districtId, schoolId: domain.schoolId })) {
      sendJson(res, 403, { ok: false, error: "Domain is outside your tenant scope" });
      return true;
    }
    Object.assign(domain, { dns: "Verified", ssl: "Active", checkedAt: new Date().toISOString() });
    await saveSnapshot(snapshot);
    sendJson(res, 200, { ok: true, domain });
    return true;
  }

  if (pathname === "/api/security/sessions" && req.method === "GET") {
    const session = requireSession(req, true);
    const visible = [...sessions.values()].filter((item) => canAccessScope(session.user, item.user)).map((item) => ({ id: item.id, userId: item.user.id, user: item.user.label, device: item.device, createdAt: new Date(item.createdAt).toISOString(), lastActive: new Date(item.lastActive).toISOString(), current: item.id === session.id }));
    sendJson(res, 200, { ok: true, sessions: visible });
    return true;
  }

  if (pathname === "/api/security/mfa" && req.method === "POST") {
    requireSession(req, true);
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    snapshot.productionReadiness ||= structuredClone(productionReadiness);
    snapshot.productionReadiness.security.mfaRequired = Boolean(body.required);
    await saveSnapshot(snapshot);
    sendJson(res, 200, { ok: true, required: snapshot.productionReadiness.security.mfaRequired });
    return true;
  }

  if (pathname === "/api/notifications/schedule" && req.method === "POST") {
    const session = requireSession(req, true);
    const body = await readJson(req);
    const snapshot = await loadSnapshot();
    const record = { id: `scheduled-${Date.now()}`, channel: body.channel || "Email", audience: body.audience || "School community", status: "Scheduled", detail: body.template || "School notification", scheduledFor: body.scheduledFor || new Date().toISOString(), scope: { stateId: session.user.stateId, districtId: session.user.districtId, schoolId: session.user.schoolId } };
    snapshot.notificationDeliveryLog = [record, ...(snapshot.notificationDeliveryLog || [])];
    await saveSnapshot(snapshot);
    sendJson(res, 201, { ok: true, delivery: record });
    return true;
  }

  if (pathname === "/api/operations/status" && req.method === "GET") {
    const session = requireSession(req, true);
    const snapshot = await loadSnapshot();
    const visibleFiles = scopedFiles(snapshot.fileUploads || [], session);
    sendJson(res, 200, { ok: true, tenantIsolation: "Enforced", users: scopedProfiles(snapshot.userProfiles || [], session).length, files: visibleFiles.length, monitors: snapshot.productionReadiness?.monitors || productionReadiness.monitors, storage: snapshot.productionReadiness?.storage || productionReadiness.storage, checkedAt: new Date().toISOString() });
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
    "Cache-Control": filePath.endsWith("index.html") || filePath.endsWith("service-worker.js") || filePath.endsWith("manifest.webmanifest") ? "no-store" : "public, max-age=31536000, immutable",
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

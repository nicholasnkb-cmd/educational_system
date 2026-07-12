import { createServer } from "node:http";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
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
const port = Number(process.env.PORT || 8080);
const sessions = new Map();

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

async function ensureDataFile() {
  await mkdir(dataDir, { recursive: true });
  await writeFile(join(dataDir, ".keep"), "", { flag: "a" });
  try {
    await stat(dataFile);
  } catch {
    await saveSnapshot(initialSnapshot());
  }
}

async function loadSnapshot() {
  await ensureDataFile();
  return JSON.parse(await readFile(dataFile, "utf8"));
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
    const body = await readJson(req);
    await saveSnapshot(body.snapshot);
    sendJson(res, 200, { ok: true, savedAt: new Date().toISOString() });
    return true;
  }

  if (pathname === "/api/reset" && req.method === "POST") {
    const snapshot = initialSnapshot();
    await saveSnapshot(snapshot);
    sendJson(res, 200, { ok: true, snapshot });
    return true;
  }

  if (pathname === "/api/login" && req.method === "POST") {
    const body = await readJson(req);
    const user = userProfiles.find((profile) => profile.id === body.profileId);
    if (!user) {
      sendJson(res, 401, { ok: false, error: "Unknown profile" });
      return true;
    }
    const token = randomUUID();
    sessions.set(token, { user, createdAt: Date.now() });
    sendJson(res, 200, { ok: true, token, user });
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

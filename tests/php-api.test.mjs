import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { access, mkdtemp, rm } from "node:fs/promises";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const router = join(projectRoot, "api", "index.php");
const password = "PhpScheduleTest1!";

async function findPhp() {
  const candidates = [process.env.PHP_BINARY, "php"].filter(Boolean);
  for (const candidate of candidates) {
    if (candidate.includes("\\") || candidate.includes("/")) {
      try { await access(candidate); } catch { continue; }
    }
    const result = spawnSync(candidate, ["-v"], { stdio: "ignore" });
    if (!result.error && result.status === 0) return candidate;
  }
  return "";
}

async function freePort() {
  const server = createServer();
  await new Promise((resolveListen, reject) => server.once("error", reject).listen(0, "127.0.0.1", resolveListen));
  const { port } = server.address();
  await new Promise((resolveClose, reject) => server.close((error) => error ? reject(error) : resolveClose()));
  return port;
}

async function waitForHealth(baseUrl, processOutput) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 100));
  }
  throw new Error(`PHP API did not become ready.\n${processOutput()}`);
}

async function api(baseUrl, path, token = "", method = "GET", body) {
  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  const text = await response.text();
  return { response, body: text ? JSON.parse(text) : {} };
}

test("production PHP scheduling API enforces authorization, conflicts, review notes, and server-owned state", { timeout: 45_000 }, async (t) => {
  const php = await findPhp();
  if (!php) {
    t.skip("PHP executable is not available");
    return;
  }

  const dataDir = await mkdtemp(join(tmpdir(), "educonnect-php-api-"));
  const port = await freePort();
  const baseUrl = `http://127.0.0.1:${port}`;
  let output = "";
  const child = spawn(php, ["-S", `127.0.0.1:${port}`, router], {
    cwd: projectRoot,
    env: {
      ...process.env,
      EDUCONNECT_DATA_DIR: dataDir,
      EDUCONNECT_BOOTSTRAP_GLOBAL_ADMIN: password,
      EDUCONNECT_BOOTSTRAP_STATE_ADMIN: password,
      EDUCONNECT_BOOTSTRAP_DISTRICT_ADMIN: password,
      EDUCONNECT_BOOTSTRAP_SCHOOL_ADMIN: password,
      EDUCONNECT_BOOTSTRAP_TEACHER: password,
      EDUCONNECT_BOOTSTRAP_PARENT: password,
      EDUCONNECT_BOOTSTRAP_STUDENT: password,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stdout.on("data", (chunk) => { output = `${output}${chunk}`.slice(-20_000); });
  child.stderr.on("data", (chunk) => { output = `${output}${chunk}`.slice(-20_000); });
  t.after(async () => {
    if (child.exitCode === null) child.kill();
    await Promise.race([
      new Promise((resolveExit) => child.once("exit", resolveExit)),
      new Promise((resolveWait) => setTimeout(resolveWait, 2_000)),
    ]);
    await rm(dataDir, { recursive: true, force: true });
  });

  await waitForHealth(baseUrl, () => output);
  assert.equal((await api(baseUrl, "/api/schedules")).response.status, 401);

  const adminLogin = await api(baseUrl, "/api/login", "", "POST", { identifier: "school-admin", password });
  const teacherLogin = await api(baseUrl, "/api/login", "", "POST", { identifier: "teacher", password });
  assert.equal(adminLogin.response.status, 200, JSON.stringify(adminLogin.body));
  assert.equal(teacherLogin.response.status, 200, JSON.stringify(teacherLogin.body));
  const adminToken = adminLogin.body.token;
  const teacherToken = teacherLogin.body.token;

  const state = await api(baseUrl, "/api/state", adminToken);
  assert.equal(state.response.status, 200);
  const unassigned = state.body.snapshot.rosterRecords.find((record) => record.id === "stu-2");
  unassigned.teacher = "Other Teacher";
  assert.equal((await api(baseUrl, "/api/state", adminToken, "PUT", { snapshot: state.body.snapshot })).response.status, 200);

  const teacherSelf = await api(baseUrl, "/api/schedules", teacherToken, "POST", {
    title: "PHP teacher planning", date: "2027-01-10", startTime: "09:00", endTime: "09:30", targetType: "staff", targetId: "teacher",
  });
  assert.equal(teacherSelf.response.status, 201, JSON.stringify(teacherSelf.body));

  const assigned = await api(baseUrl, "/api/schedules", teacherToken, "POST", {
    title: "PHP assigned learner support", date: "2027-01-10", startTime: "10:00", endTime: "10:30", targetType: "student", targetId: "stu-1",
  });
  assert.equal(assigned.response.status, 201, JSON.stringify(assigned.body));
  assert.equal(assigned.body.schedule.studentId, "learner-1");

  const unassignedCreate = await api(baseUrl, "/api/schedules", teacherToken, "POST", {
    title: "PHP unassigned learner support", date: "2027-01-10", startTime: "10:30", endTime: "11:00", targetType: "student", targetId: "stu-2",
  });
  assert.equal(unassignedCreate.response.status, 403);

  const aliasConflict = await api(baseUrl, "/api/schedules", teacherToken, "POST", {
    title: "PHP alias collision", date: "2027-01-10", startTime: "10:15", endTime: "10:45", targetType: "student", targetId: "learner-1",
  });
  assert.equal(aliasConflict.response.status, 409);
  assert.match(aliasConflict.body.error, /conflicts/i);

  const adminAssigned = await api(baseUrl, "/api/schedules", adminToken, "POST", {
    title: "Admin assigned learner meeting", date: "2027-01-11", startTime: "09:00", endTime: "09:30", targetType: "student", targetId: "stu-1",
  });
  assert.equal(adminAssigned.response.status, 201, JSON.stringify(adminAssigned.body));
  assert.equal((await api(baseUrl, `/api/schedules/${adminAssigned.body.schedule.id}`, teacherToken, "PATCH", { status: "Cancelled" })).response.status, 200);

  const adminUnassigned = await api(baseUrl, "/api/schedules", adminToken, "POST", {
    title: "Admin unassigned learner meeting", date: "2027-01-11", startTime: "10:00", endTime: "10:30", targetType: "student", targetId: "stu-2",
  });
  assert.equal(adminUnassigned.response.status, 201, JSON.stringify(adminUnassigned.body));
  assert.equal((await api(baseUrl, `/api/schedules/${adminUnassigned.body.schedule.id}`, teacherToken, "PATCH", { status: "Cancelled" })).response.status, 403);

  const request = await api(baseUrl, "/api/schedule-requests", teacherToken, "POST", {
    title: "PHP planning request", requestType: "Planning", date: "2027-01-12", startTime: "14:00", endTime: "14:30", targetType: "staff", targetId: "teacher", reason: "Prepare differentiated materials.",
  });
  assert.equal(request.response.status, 201, JSON.stringify(request.body));
  assert.equal((await api(baseUrl, `/api/schedule-requests/${request.body.request.id}`, teacherToken, "PATCH", { status: "Approved" })).response.status, 403);

  const missingDeclineNote = await api(baseUrl, `/api/schedule-requests/${request.body.request.id}`, adminToken, "PATCH", { status: "Declined" });
  assert.equal(missingDeclineNote.response.status, 400);
  assert.match(missingDeclineNote.body.error, /review note/i);
  const requestsAfterMissingNote = await api(baseUrl, "/api/schedule-requests", adminToken);
  assert.equal(requestsAfterMissingNote.body.requests.find((item) => item.id === request.body.request.id).status, "Pending");
  const declined = await api(baseUrl, `/api/schedule-requests/${request.body.request.id}`, adminToken, "PATCH", { status: "Declined", reviewNote: "Use the alternate planning block." });
  assert.equal(declined.response.status, 200, JSON.stringify(declined.body));
  assert.equal(declined.body.request.reviewNote, "Use the alternate planning block.");

  const approvalRequest = await api(baseUrl, "/api/schedule-requests", teacherToken, "POST", {
    title: "PHP approved planning request", requestType: "Planning", date: "2027-01-13", startTime: "14:00", endTime: "14:30", targetType: "staff", targetId: "teacher", reason: "Prepare the next unit.",
  });
  assert.equal(approvalRequest.response.status, 201, JSON.stringify(approvalRequest.body));
  const approved = await api(baseUrl, `/api/schedule-requests/${approvalRequest.body.request.id}`, adminToken, "PATCH", { status: "Approved", reviewNote: "Approved." });
  assert.equal(approved.response.status, 200, JSON.stringify(approved.body));
  assert.equal(approved.body.request.scheduleId, approved.body.schedule.id);
  assert.equal(approved.body.schedule.sourceRequestId, approvalRequest.body.request.id);

  const stale = await api(baseUrl, "/api/state", adminToken);
  stale.body.snapshot.scheduleEntries = [{ id: "php-browser-injected", title: "Untrusted overwrite" }];
  stale.body.snapshot.scheduleRequests = [];
  assert.equal((await api(baseUrl, "/api/state", adminToken, "PUT", { snapshot: stale.body.snapshot })).response.status, 200);
  const authoritative = await api(baseUrl, "/api/schedules", adminToken);
  assert.equal(authoritative.body.schedules.some((entry) => entry.id === "php-browser-injected"), false);
  assert.ok(authoritative.body.schedules.some((entry) => entry.id === approved.body.schedule.id));
});

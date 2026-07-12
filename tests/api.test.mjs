import { after, before, describe, it } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

let server;
let baseUrl;
let dataDir;
let adminToken;

describe("operational API server", () => {
  before(async () => {
    dataDir = await mkdtemp(join(tmpdir(), "educonnect-api-"));
    process.env.DATA_DIR = dataDir;
    const { createEduConnectServer } = await import("../server.mjs");
    server = createEduConnectServer();
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    baseUrl = `http://${address.address}:${address.port}`;
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
    await rm(dataDir, { recursive: true, force: true });
  });

  it("reports operational health", async () => {
    const response = await fetch(`${baseUrl}/api/health`);
    const payload = await response.json();
    assert.equal(response.status, 200);
    assert.equal(payload.ok, true);
    assert.equal(payload.mode, "operational");
  });

  it("persists and reloads application state", async () => {
    const stateAdminLogin = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "state-admin", password: "state123" }),
    });
    const stateAdmin = await stateAdminLogin.json();
    const initial = await (await fetch(`${baseUrl}/api/state`)).json();
    initial.snapshot.state.selectedSchool = "ms-44";
    initial.snapshot.auditLogs.unshift({ event: "API persistence test", actor: "Node test", scope: "Operational", time: "Just now" });

    const save = await fetch(`${baseUrl}/api/state`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${stateAdmin.token}` },
      body: JSON.stringify({ snapshot: initial.snapshot }),
    });
    assert.equal(save.status, 200);

    const reloaded = await (await fetch(`${baseUrl}/api/state`)).json();
    assert.equal(reloaded.snapshot.state.selectedSchool, "ms-44");
    assert.equal(reloaded.snapshot.auditLogs[0].event, "API persistence test");
    assert.equal(reloaded.snapshot.state.apiMode, "live-api");
  });

  it("creates a basic role session", async () => {
    const login = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "teacher", password: "teacher123" }),
    });
    const payload = await login.json();
    assert.equal(login.status, 200);
    assert.equal(payload.user.role, "Teacher");
    assert.ok(payload.token);

    const session = await fetch(`${baseUrl}/api/session`, {
      headers: { Authorization: `Bearer ${payload.token}` },
    });
    const sessionPayload = await session.json();
    assert.equal(session.status, 200);
    assert.equal(sessionPayload.user.id, "teacher");
  });

  it("supports admin user management and password lifecycle", async () => {
    const adminLogin = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "district-admin", password: "admin123" }),
    });
    const adminPayload = await adminLogin.json();
    adminToken = adminPayload.token;
    assert.equal(adminLogin.status, 200);

    const create = await fetch(`${baseUrl}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ id: "api-teacher", label: "API Teacher", role: "Teacher", password: "initial123" }),
    });
    const createPayload = await create.json();
    assert.equal(create.status, 201);
    assert.equal(createPayload.user.id, "api-teacher");
    assert.equal(createPayload.user.mustChangePassword, true);

    const reset = await fetch(`${baseUrl}/api/password/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ profileId: "api-teacher", newPassword: "resetpass123" }),
    });
    assert.equal(reset.status, 200);

    const login = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "api-teacher", password: "resetpass123" }),
    });
    const loginPayload = await login.json();
    assert.equal(login.status, 200);

    const change = await fetch(`${baseUrl}/api/password/change`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${loginPayload.token}` },
      body: JSON.stringify({ currentPassword: "resetpass123", newPassword: "finalpass123" }),
    });
    assert.equal(change.status, 200);

    const disable = await fetch(`${baseUrl}/api/users/api-teacher`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ active: false }),
    });
    assert.equal(disable.status, 200);

    const disabledLogin = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "api-teacher", password: "finalpass123" }),
    });
    assert.equal(disabledLogin.status, 401);
  });

  it("filters users by tenant scope", async () => {
    const schoolLogin = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "school-admin", password: "school123" }),
    });
    const schoolPayload = await schoolLogin.json();
    assert.equal(schoolLogin.status, 200);

    const users = await fetch(`${baseUrl}/api/users`, {
      headers: { Authorization: `Bearer ${schoolPayload.token}` },
    });
    const usersPayload = await users.json();
    assert.equal(users.status, 200);
    assert.ok(usersPayload.users.every((user) => user.schoolId === "ps-118"));
    assert.ok(usersPayload.users.some((user) => user.id === "teacher"));
    assert.ok(!usersPayload.users.some((user) => user.id === "district-admin"));
  });

  it("rejects invalid login credentials", async () => {
    const login = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "teacher", password: "wrong" }),
    });
    assert.equal(login.status, 401);
  });

  it("stores uploaded files and notification deliveries", async () => {
    const stateAdminLogin = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileId: "state-admin", password: "state123" }),
    });
    const stateAdmin = await stateAdminLogin.json();
    const upload = await fetch(`${baseUrl}/api/files`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${stateAdmin.token}` },
      body: JSON.stringify({
        name: "lesson-plan.txt",
        type: "text/plain",
        area: "LMS",
        size: "1 KB",
        contentBase64: Buffer.from("Operational upload").toString("base64"),
      }),
    });
    const uploadPayload = await upload.json();
    assert.equal(upload.status, 201);
    assert.equal(uploadPayload.file.status, "Stored on server");

    const notify = await fetch(`${baseUrl}/api/notifications/test`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${stateAdmin.token}` },
      body: JSON.stringify({ audience: "API test group" }),
    });
    const notifyPayload = await notify.json();
    assert.equal(notify.status, 201);
    assert.equal(notifyPayload.records.length, 3);

    const state = await (await fetch(`${baseUrl}/api/state`)).json();
    assert.equal(state.snapshot.fileUploads[0].name, "lesson-plan.txt");
    assert.equal(state.snapshot.notificationDeliveryLog[0].audience, "API test group");

    const files = await (await fetch(`${baseUrl}/api/files`, { headers: { Authorization: `Bearer ${stateAdmin.token}` } })).json();
    assert.equal(files.files[0].name, "lesson-plan.txt");

    const download = await fetch(`${baseUrl}/api/files/${uploadPayload.file.id}/download`, { headers: { Authorization: `Bearer ${stateAdmin.token}` } });
    assert.equal(download.status, 200);
    assert.equal(await download.text(), "Operational upload");
  });

  it("stores notification provider settings and creates backups", async () => {
    const provider = await fetch(`${baseUrl}/api/notification-provider`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
      body: JSON.stringify({ mode: "smtp", from: "noreply@example.edu", smtpHost: "smtp.example.edu", apiKey: "secret-key" }),
    });
    const providerPayload = await provider.json();
    assert.equal(provider.status, 200);
    assert.equal(providerPayload.provider.apiKey, "configured");

    const backup = await fetch(`${baseUrl}/api/backups`, {
      method: "POST",
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    const backupPayload = await backup.json();
    assert.equal(backup.status, 201);
    assert.match(backupPayload.backup, /^educonnect-backup-/);

    const list = await (await fetch(`${baseUrl}/api/backups`)).json();
    assert.ok(list.backups.includes(backupPayload.backup));
  });
});

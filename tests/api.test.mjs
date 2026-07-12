import { after, before, describe, it } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

let server;
let baseUrl;
let dataDir;

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
    const initial = await (await fetch(`${baseUrl}/api/state`)).json();
    initial.snapshot.state.selectedSchool = "ms-44";
    initial.snapshot.auditLogs.unshift({ event: "API persistence test", actor: "Node test", scope: "Operational", time: "Just now" });

    const save = await fetch(`${baseUrl}/api/state`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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
      body: JSON.stringify({ profileId: "teacher" }),
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
});

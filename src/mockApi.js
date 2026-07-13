import { resolveEducationApiBase } from "./apiConfig.js";
import { reportClientError } from "./errorReporting.js";

const MOCK_API_KEY = "educonnect-mock-api-v1";

let requestCount = 0;
let lastEndpoint = "localStorage://educonnect-mock-api-v1";
let lastStatus = "Ready";

function unwrapApiPayload(payload) {
  return payload && typeof payload === "object" && "data" in payload ? payload.data : payload;
}

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 80));
}

function apiBase() {
  return resolveEducationApiBase(
    window.location.hostname,
    window.__EDUCONNECT_API_BASE__,
    import.meta.env.VITE_API_BASE_URL,
  );
}

function authHeaders() {
  const token = localStorage.getItem("educonnect-session-token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function requestServerState(method, body) {
  const endpoint = `${apiBase()}/api/state`;
  lastEndpoint = endpoint;
  const response = await fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: body ? JSON.stringify(body) : undefined,
  });
  requestCount += 1;
  if (!response.ok) {
    lastStatus = `HTTP ${response.status}`;
    const error = new Error(`Server API request failed with ${response.status}`);
    reportClientError(error, { source: "api.state" });
    throw error;
  }
  lastStatus = "Connected";
  return unwrapApiPayload(await response.json());
}

async function requestServer(path, options = {}) {
  const endpoint = `${apiBase()}${path}`;
  lastEndpoint = endpoint;
  const response = await fetch(endpoint, {
    headers: { "Content-Type": "application/json", ...authHeaders(), ...(options.headers || {}) },
    ...options,
  });
  requestCount += 1;
  if (!response.ok) {
    lastStatus = `HTTP ${response.status}`;
    const payload = await response.json().catch(() => ({}));
    const error = new Error(payload.error || `Server API request failed with ${response.status}`);
    reportClientError(error, { source: "api.request" });
    throw error;
  }
  lastStatus = "Connected";
  return unwrapApiPayload(await response.json());
}

export async function saveMockApiState(snapshot, mode = "mock-api") {
  if (mode === "live-api") {
    return requestServerState("PUT", { snapshot });
  }
  requestCount += 1;
  await delay();
  localStorage.setItem(MOCK_API_KEY, JSON.stringify(snapshot));
  lastEndpoint = "localStorage://educonnect-mock-api-v1";
  lastStatus = "Ready";
  return { ok: true, requestCount };
}

export async function loadMockApiState(mode = "mock-api") {
  if (mode === "live-api") {
    const payload = await requestServerState("GET");
    return payload.snapshot;
  }
  requestCount += 1;
  await delay();
  lastEndpoint = "localStorage://educonnect-mock-api-v1";
  lastStatus = "Ready";
  return JSON.parse(localStorage.getItem(MOCK_API_KEY) || "null");
}

export function mockApiStatus() {
  return {
    requestCount,
    endpoint: lastEndpoint,
    status: lastStatus,
  };
}

export async function loginServerProfile(identifier, password) {
  return requestServer("/api/login", {
    method: "POST",
    body: JSON.stringify({ identifier, password }),
  });
}

export async function getServerSession() {
  return requestServer("/api/session", { method: "GET" });
}

export async function uploadServerFile(file, area = "LMS") {
  const contentBase64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
  return requestServer("/api/files", {
    method: "POST",
    body: JSON.stringify({
      name: file.name,
      type: file.type,
      area,
      size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      contentBase64,
    }),
  });
}

export async function sendServerNotificationTest(audience = "Launch test group") {
  return requestServer("/api/notifications/test", {
    method: "POST",
    body: JSON.stringify({ audience }),
  });
}

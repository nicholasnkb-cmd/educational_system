const MOCK_API_KEY = "educonnect-mock-api-v1";

let requestCount = 0;
let lastEndpoint = "localStorage://educonnect-mock-api-v1";
let lastStatus = "Ready";

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 80));
}

function apiBase() {
  return window.__EDUCONNECT_API_BASE__ || import.meta.env.VITE_API_BASE_URL || "";
}

async function requestServerState(method, body) {
  const endpoint = `${apiBase()}/api/state`;
  lastEndpoint = endpoint;
  const response = await fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  requestCount += 1;
  if (!response.ok) {
    lastStatus = `HTTP ${response.status}`;
    throw new Error(`Server API request failed with ${response.status}`);
  }
  lastStatus = "Connected";
  return response.json();
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

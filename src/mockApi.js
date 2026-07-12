const MOCK_API_KEY = "educonnect-mock-api-v1";

let requestCount = 0;

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 80));
}

export async function saveMockApiState(snapshot) {
  requestCount += 1;
  await delay();
  localStorage.setItem(MOCK_API_KEY, JSON.stringify(snapshot));
  return { ok: true, requestCount };
}

export async function loadMockApiState() {
  requestCount += 1;
  await delay();
  return JSON.parse(localStorage.getItem(MOCK_API_KEY) || "null");
}

export function mockApiStatus() {
  return {
    requestCount,
    endpoint: "localStorage://educonnect-mock-api-v1",
  };
}

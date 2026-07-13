import { resolveEducationApiBase } from "./apiConfig.js";

const recentReports = new Map();

function apiBase() {
  return resolveEducationApiBase(
    window.location.hostname,
    window.__EDUCONNECT_API_BASE__,
    import.meta.env.VITE_API_BASE_URL,
  );
}

function normalizeError(error, context = {}) {
  const value = error instanceof Error ? error : new Error(String(error || "Unknown client error"));
  return {
    source: context.source || "frontend",
    message: value.message.slice(0, 1000),
    stack: String(value.stack || "").slice(0, 6000),
    path: `${window.location.pathname}${window.location.hash}`.slice(0, 300),
    release: document.querySelector('meta[name="app-release"]')?.content || "web",
  };
}

export function reportClientError(error, context = {}) {
  const base = apiBase();
  if (!base) return;
  const report = normalizeError(error, context);
  const signature = `${report.source}:${report.message}:${report.path}`;
  const now = Date.now();
  if (now - (recentReports.get(signature) || 0) < 60_000) return;
  recentReports.set(signature, now);
  fetch(`${base}/api/error-reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(report),
    keepalive: true,
  }).catch(() => {});
}

export function initializeErrorReporting() {
  window.addEventListener("error", (event) => reportClientError(event.error || event.message, { source: "window.error" }));
  window.addEventListener("unhandledrejection", (event) => reportClientError(event.reason, { source: "unhandledrejection" }));
}

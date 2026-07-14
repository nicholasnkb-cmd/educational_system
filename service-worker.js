const CACHE = "educonnect-shell-v2";
const HOME = new URL("./", self.registration.scope).href;
const SHELL = ["./", "./manifest.webmanifest", "./favicon.svg", "./apple-touch-icon.png", "./maintenance.html"].map((path) => new URL(path, self.registration.scope).href);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.pathname.startsWith("/api/") || url.hostname.startsWith("api.")) return;
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(HOME, copy));
      return response;
    }).catch(() => caches.match(HOME).then((response) => response || caches.match(new URL("./maintenance.html", self.registration.scope).href))));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    if (response.ok && url.origin === self.location.origin) caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
    return response;
  })));
});

self.addEventListener("sync", (event) => {
  if (event.tag === "educonnect-submissions") event.waitUntil(self.clients.matchAll().then((clients) => clients.forEach((client) => client.postMessage({ type: "SYNC_SUBMISSIONS" }))));
});

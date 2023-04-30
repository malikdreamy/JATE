importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js");

const cacheName = "v1";
const urlsToCache = [
  "index.html",
  "manifest.webmanifest",
  "install.bundle.js",
  "main.bundle.js",
  "favicon.ico",
  "/src/images/manifest-icon-192.maskable.png",
  "/src/images/manifest-icon-512.maskable.png",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker: Caching Files");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== cacheName)
          .map((name) => {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(name);
          })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((response) => {
          return response;
        });
      })
  );
});

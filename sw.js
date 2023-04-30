(()=>{importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js");var e="v1",n=["index.html","main.bundle.js", "favicon.ico"];self.addEventListener("install",(function(s){console.log("Service Worker Installed"),s.waitUntil(caches.open(e).then((function(e){console.log("Service Worker: Caching Files"),e.addAll(n).then((function(){self.skipWaiting()}))})))})),self.addEventListener("active",(function(n){console.log("Service Worker Activated"),n.waitUntil(caches.keys().then((function(n){return Promise.all(n.map((function(n){if(n!==e)return console.log("Service Worker: Clearing Old Cache"),caches.delete(n)})))})))})),self.addEventListener("fetch",(function(n){console.log("Service Worker: Fetching"),n.respondWith(fetch(n.request).then((function(s){var t=s.clone();return caches.open(e).then((function(e){e.put(n.request,t)})),s})).catch((function(e){return caches.match(n.request).then((function(e){return e}))})))})),[{'revision':'746db68de78df5d3feaeac6b6c757b2a','url':'favicon.ico'},{'revision':'21edf8f59a5dcbf447545d1670b340af','url':'index.html'},{'revision':'3a9620fccbe338d8e7451abbdab4f9ad','url':'main.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'main.bundle.js.LICENSE.txt'},{'revision':'2405e3ad41697827cac68116ab38b830','url':'manifest.webmanifest'}]=[].concat(n,[{url:"workbox-v6.2.4/workbox-sw.js",revision:null}])})();

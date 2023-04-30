importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js');

const cacheName = 'v1';
const cacheAssets = [
    'index.html',
     '/src/js/editor.js',
     '/src/js/header.js',
     'src/js/index.js',
     'src/js/install.js',
     'src/css/style.css',
     'src/images/logo.png',
     'src/js/database.js'
]


self.addEventListener('install', (e)=>{
console.log('Service Worker Installed')
e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets)
        .then(()=>{
            self.skipWaiting()
        })
    })
)
});

self.addEventListener('active', (e)=>{
    console.log('Service Worker Activated')
    //remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cache =>{
                    if(cache !== cacheName){
                        console.log('Service Worker: Clearing Old Cache')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
    });

self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
        .then(res =>{
            const resClone = res.clone();
            caches
            .open(cacheName)
            .then(cache =>{
                cache.put(e.request, resClone);
            });
            return res;
        }).catch(err=> caches.match(e.request).then(res => res))
    );     
});


self.__WB_MANIFEST = [...cacheAssets, {url: 'workbox-v6.2.4/workbox-sw.js', revision: null}];

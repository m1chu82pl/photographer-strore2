const cacheName = 'site-static-v2';
const assets = [
    '/',
    '/index.html',
];

const self = this;

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', e => {
    console.log('ServiceWorker: Install');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('ServiceWorker: Caching app shell');
            return cache.addAll(assets);
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", e => {
    console.log("ServiceWorker: Activ");
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
    //console.log('fetch event', event);
    event.respondWith(
        caches.match(event.request).then(cacheResponse => {
            return cacheResponse || fetch(event.request).then(async fetchResponse => {
                const cache = await caches.open(cacheName);
                cache.put(event.request.url, fetchResponse.clone());
                return fetchResponse;
            });
        })
    );
});

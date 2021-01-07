const cacheName = 'site-static-v2';
const assets = [
    '/',
    '/index.js',
    '/favicon.ico',
    '/logo192.png',
];

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
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                console.log('response', response);
                return response
            }
            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    caches.open(cacheName)
                        .then((cache) => {
                            console.log('cache', cache);
                            cache.put(event.request, response.clone());
                        });
                    return response;
                })
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    );
});
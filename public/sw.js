const cacheName = 'site-static-v2';
const assets = [
    '/',
    '/favicon.ico',
    '/logo192.png',
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(assets);
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", function(e) {
    console.log("[ServiceWorker] Activate");
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                console.log('h1', response);
                return response
            }
            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(cacheName)
                        .then((cache) => {
                            console.log('here', cache);
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                })
        })
        .catch((error) => {
            console.log('in catch', error);
        })
    );
});
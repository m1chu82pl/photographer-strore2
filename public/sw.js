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

self.addEventListener('fetch', e => {
    if (!(e.request.url.indexOf('http') === 0)) return;   
    e.respondWith(
      caches
        .match(e.request)
        .then(
          cacheRes =>
            cacheRes ||
            fetch(e.request).then(fetchRes =>
              caches.open(cacheName).then(cache => {
                cache.put(e.request.url, fetchRes.clone());
                // check cached items size
                limitCacheSize(cacheName, 75);
                return fetchRes;
              })
            )
        )
        .catch(() => caches.match('/index.html'))
    );
  });
  
  const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if (keys.length > size) {
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };

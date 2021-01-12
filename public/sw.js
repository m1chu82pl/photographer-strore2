const cacheName = 'site-static-v357';
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
    // console.log(e.request);
    if (!(e.request.url.includes('http'))) return;   
    e.respondWith(
      caches
        .match(e.request)
        .then(
          cacheRes =>
            cacheRes ||
            fetch(e.request).then(fetchRes =>
              caches.open(cacheName).then(cache => {
                cache.put(e.request.url, fetchRes.clone());
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

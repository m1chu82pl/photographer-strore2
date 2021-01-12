const cacheName = 'siteStatic-v357';
const assets = [
    '/',
    '/index.html',
];

const self = this;

self.addEventListener('install', e => {
    console.log('ServiceWorker: Install');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('ServiceWorker: Caching app shell');
            return cache.addAll(assets);
        })
    );
});

self.addEventListener("activate", e => {
    console.log("ServiceWorker: Activ");
});

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
  
  const limitCacheSize = (cacheName, cacheSize) => {
    caches.open(cacheName).then(cache => {
      cache.keys().then(keys => {
        if (keys.length > cacheSize) {
          cache.delete(keys[0]).then(limitCacheSize(cacheName, cacheSize));
        }
      });
    });
  };

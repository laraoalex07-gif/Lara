// Service Worker: cache-first para assets, con limpieza de versiones antiguas
const CACHE_NAME = 'lara-cache-v2';
const ASSETS = [
  '/Lara/',
  '/Lara/index.html',
  '/Lara/diezmos.html',
  '/Lara/historial.html',
  '/Lara/manifest.json',
  '/Lara/aa.jpg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => {
        if (k !== CACHE_NAME) return caches.delete(k);
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin within /Lara scope
  if (!url.pathname.startsWith('/Lara')) return;

  // Navigation request -> fallback to index.html for SPA-style navigation
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/Lara/index.html'))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => caches.match('/Lara/index.html'));
    })
  );
});

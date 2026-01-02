const CACHE_NAME = 'lara-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/registros.html',
  '/viajes.html',
  '/diezmos.html',
  '/manifest.json',
  '/Lara/aa.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request).then(resp=>{
      // Cache new GET responses for offline usage
      return caches.open(CACHE_NAME).then(cache=>{ try{ cache.put(event.request, resp.clone()); }catch(e){} return resp; });
    }).catch(()=>{
      // Fallback to cached root or image
      return caches.match('/registros.html');
    }))
  );
});

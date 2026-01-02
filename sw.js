const CACHE_NAME = 'lara-cache-v2';
const FILES_TO_CACHE = [
  '/Lara/',
  '/Lara/index.html',
  '/Lara/registros.html',
  '/Lara/viajes.html',
  '/Lara/diezmos.html',
  '/Lara/aa.jpg',
  '/Lara/manifest.json'
];
self.addEventListener('install', event=>{ event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES_TO_CACHE))); self.skipWaiting(); });
self.addEventListener('activate', event=>{ event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event=>{ if(event.request.method!=='GET') return; event.respondWith(caches.match(event.request).then(res=>res||fetch(event.request).then(r=>{ caches.open(CACHE_NAME).then(c=>{ try{ c.put(event.request, r.clone()); }catch(e){} }); return r; }).catch(()=>caches.match('/Lara/index.html')))); });

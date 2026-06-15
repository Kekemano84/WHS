const CACHE_VERSION = 'whs-offline-trial-v47-static';
const STATIC_CACHE = CACHE_VERSION + '-static';
const PAGE_CACHE = CACHE_VERSION + '-pages';
const STATIC_ASSETS = ['/', '/offline', '/manifest.json', '/static/css/style.css', '/static/js/voice.js', '/static/icons/whs-logo.svg', '/static/icons/whs-logo.png', '/static/icons/icon-192.png', '/static/icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(STATIC_CACHE).then(c => c.addAll(STATIC_ASSETS).catch(() => null)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('whs-') && !k.startsWith(CACHE_VERSION)).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/static/') || url.pathname === '/manifest.json') {
    e.respondWith(caches.match(e.request).then(c => c || fetch(e.request).then(r => { const x=r.clone(); caches.open(STATIC_CACHE).then(cache=>cache.put(e.request,x)); return r; }).catch(()=>c)));
    return;
  }
  e.respondWith(fetch(e.request).then(r => { if(r.ok){ const x=r.clone(); caches.open(PAGE_CACHE).then(cache=>cache.put(e.request,x)); } return r; }).catch(() => caches.match(e.request).then(c => c || caches.match('/') || caches.match('/offline'))));
});

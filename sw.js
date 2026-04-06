const CACHE_NAME = 'outlook-cache-v2';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'firebase-config.js',
  'dashboard.html',
  'admin_login.html'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
           if (cacheName !== CACHE_NAME) {
             return caches.delete(cacheName);
           }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
          if (response) return response;
          return fetch(event.request);
      })
  );
});

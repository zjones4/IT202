let version = '0.6.2';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('final').then(cache => {
      return cache.addAll([
        `./`,
        `./index.html?timestamp=${timeStamp}`,
        `./projectdata.js?timestamp=${timeStamp}`,
        `./app.css?timestamp=${timeStamp}`,
        `./assets/galaxy.jpg?timestamp=${timeStamp}`,
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});

//importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('final').then(function(cache) {
return cache.addAll([
'./',
'./index.html',
'./index.html?homescreen=1',
'./?homescreen=1',
'./app.css',
'./projectdata.js',
'./assets/galaxy.jpg'
]);
})
);
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('barcode-v1').then((cache) => {
      return cache.addAll([
        '/barcode-generator/',
        '/barcode-generator/index.html',
        '/barcode-generator/barcode-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
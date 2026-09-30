const CACHE = 'menthorq-importer-v1';
const ASSETS = ['./','./index.html','./assets/index-Bj_tHXlc.js','./assets/index-d0poj5oV.css','./manifest.webmanifest','./register-sw.js','./icon-192.png','./icon-512.png','./apple-touch-icon.png',
  './tesseract/worker.min.js','./tesseract/eng.traineddata.gz',
  './tesseract/tesseract-core-simd-lstm.js','./tesseract/tesseract-core-simd-lstm.wasm','./tesseract/tesseract-core-simd-lstm.wasm.js',
  './tesseract/tesseract-core-lstm.js','./tesseract/tesseract-core-lstm.wasm','./tesseract/tesseract-core-lstm.wasm.js'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
    const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return res;
  })));
});

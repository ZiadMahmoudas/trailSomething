// اسم النسخة - غير الرقم ده كل ما تحدث موقعك عشان الموبايل يحس بالتغيير
const cacheName = 'uiqyarab-v1';

// الملفات اللي عايز تخزنها عشان تشتغل من غير نت
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.ico',
  '/playstore.png'
];

// 1. مرحلة التثبيت: تخزين الملفات في ذاكرة الموبايل
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

// 2. مرحلة التشغيل: لو مفيش نت، اسحب من الذاكرة (Cache)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
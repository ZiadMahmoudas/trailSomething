importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  // 1. تخزين ملفات الـ CSS والـ JS حتى لو من CDN (زي FontAwesome)
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate()
  );

  // 2. تخزين الصور
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
  );

  // 3. أهم حتة: تخزين أي صفحة يفتحها المستخدم عشان تشتغل أوفلاين
  workbox.routing.registerRoute(
    ({request}) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst()
  );
}
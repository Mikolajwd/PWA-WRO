let cacheName = 'podyplomowe';
let filesToCache = ['./', './index.html', './css/style.css', './js/main.js'];

// start the service worker and cache all of the app's content
self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(filesToCache);
		})
	);
});

// Server cached content when offline
self.addEventListener('fetch', (e) => {
	e.respondWith(
		cahces.match(e.request).then((response) => {
			return response || fetch(e.request);
		})
	);
});

// Instalação do Service Worker e Cache de recursos
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('gps').then((cache) => {
            return cache.addAll([
                'index.html',
                'app.js',
                'icon.png',
                'manifest.json'
            ]);
        })
    );
});

// Intercepta solicitações de rede e serve os recursos do cache, se disponí­veis
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
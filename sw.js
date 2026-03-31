const version = "1.0.1";

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
    // Dummy fetch to satisfy PWA requirements
});

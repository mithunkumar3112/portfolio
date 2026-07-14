const CACHE_VERSION = 'v1';
const CACHE_NAME = `portfolio-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Cache strategies
const CACHE_FIRST = 'cache-first';
const NETWORK_FIRST = 'network-first';
const STALE_WHILE_REVALIDATE = 'stale-while-revalidate';

// Define cache strategy per asset type
function getCacheStrategy(url) {
  if (url.includes('/assets/') || url.includes('.js') || url.includes('.css')) {
    return CACHE_FIRST; // Versioned assets, cache forever
  }
  if (url.includes('/other/') || url.includes('/projects/') || url.includes('/skill/') || url.includes('/Certifications/')) {
    return STALE_WHILE_REVALIDATE; // Images, serve from cache but update in background
  }
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    return CACHE_FIRST; // Google Fonts, cache aggressively
  }
  return NETWORK_FIRST; // Default: try network first
}

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Silently fail if some assets can't be cached during install
      });
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event - clean up old caches
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
    })
  );
  self.clients.claim(); // Take control of all pages immediately
});

// Fetch event with intelligent caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other protocols
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return;
  }

  const strategy = getCacheStrategy(url.toString());

  if (strategy === CACHE_FIRST) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          // Cache successful responses
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
  } else if (strategy === STALE_WHILE_REVALIDATE) {
    event.respondWith(
      caches.match(request).then((response) => {
        const fetchPromise = fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            const responseClone = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });

        return response || fetchPromise;
      })
    );
  } else {
    // NETWORK_FIRST
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fall back to cache on network failure
          return caches.match(request).then((response) => {
            return response || new Response('Offline - resource unavailable', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({ 'Content-Type': 'text/plain' }),
            });
          });
        })
    );
  }
});

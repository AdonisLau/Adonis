this.addEventListener('install', function(event) {
  console.log('a')
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/adonis/static/css/index.css'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(resp) {
        console.log(resp);
        return resp || fetch(event.request).then(function(response) {
          return response; 
        });
      })
  );
});
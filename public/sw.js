//caches
const staticCache = 'site-static',
      dynamicCache = 'site-dynamic',
      assets = [
        'index.html',
        'login.html',
        'utility/fallback.html',
        'assets/css/main.css',
        'assets/css/material-dashboard.css',
        'assets/css/material-dashboard.min.css',        
        'assets/img/icons/icon-96x96.png',
        'assets/img/mapicons/green-dot.png',
        'assets/img/mapicons/ltblue-dot.png',
        'assets/img/mapicons/purple-dot.png',
        'assets/img/mapicons/red-dot.png',
        'assets/img/mapicons/yellow-dot.png',
        'assets/js/main.js',
        'assets/js/maps.js',
        'assets/js/material-dashboard.js',
        'assets/js/material-dashboard.min.js',
        'assets/js/session.js',
        'assets/js/swalfire.js',
        'views/dashboard.html',

        'views/maps.html',
        'views/add_trace.html',
        'views/edit_trace.html',
        'views/death.html',
        'views/infected.html',
        'views/recovery.html',
        'views/trace_info.html',
        'views/traces.html',
        'views/user.html',
        'https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.0.2/sha.js',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons',
        'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js'

        
      ];
      //
//cache size limit
const limitCache = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => { 
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCache(name, size));
            }
        })
    })
};
//



//install service worker
self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(caches.open(staticCache).then((cache)=> {
        cache.addAll(assets).then(() => {
            console.log('assets add to cache');
        }).catch((error) => console.log(error));
        
    })); 
});

// activate service worker 

self.addEventListener('activate', event =>{
    // console.log('Service worker activated');
    event.waitUntil(
        caches.keys().then(keys => {
            console.log(keys); 
            return Promise.all(keys
                .filter(key => key !== staticCache && key !== dynamicCache)
                .map(key => caches.delete(key))
            )
        }) 
    );
});

// fetch 

self.addEventListener('fetch', event =>{

    // console.log('fetch event', event);
    if(event.request.url.indexOf('firestore.googleapis.com' === -1)){
        event.respondWith(
            caches.match(event.request).then(cacheRes => {
                return cacheRes || fetch(event.request).then(fetchRes => {
                    return caches.open(dynamicCache).then(cache =>{
                        cache.put(event.request.url, fetchRes.clone());
                        limitCache(dynamicCache, 40);
                        return fetchRes;
                    })
                });
            }).catch(() => {
                if(event.request.url.indexOf('.html') > -1){
                    return caches.match('utility/fallback.html')
                }                
            })
        );
    }
    //

})
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js')
    .then( (register) => console.log('Service Worker registered', register))
    .catch( (error) => console.log('Service Worker not registered' , error));
}
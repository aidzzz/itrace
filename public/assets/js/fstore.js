// Your web app's Firebase configuration
var firebaseConfig = {  
    apiKey: "AIzaSyD9bK5WFHx4_CQvZIlwNGq17LGcmSEM_ME",
    authDomain: "tracing-app-9c7b7.firebaseapp.com",
    databaseURL: "https://tracing-app-9c7b7-default-rtdb.firebaseio.com",
    projectId: "tracing-app-9c7b7",
    storageBucket: "tracing-app-9c7b7.appspot.com",
    messagingSenderId: "701613611473",
    appId: "1:701613611473:web:33630cdd5239ca823368f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//set offline database
db.enablePersistence().catch(error =>{
    if(error.code == 'failed-precondition'){
        console.log('persistent failed');
    }else if(error.code == 'unimplemented'){
        console.log('persistence is not available');
    }
})

//snaphots




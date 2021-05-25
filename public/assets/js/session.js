
session = {
    initSession: function(){
    
        function create_token(len, charSet) {
            charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var create_token = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                create_token += charSet.substring(randomPoz,randomPoz+1);
            }
            return create_token;
        }
       
        const app_token = create_token(32);
        localStorage.setItem('session_app_token', app_token);       
        // console.log(get_spec_page);
        
    },
    
    checkSession: function() {
        const get_current_url = window.location.href
        const get_login_page = get_current_url.slice(-17)

        if(localStorage.getItem('session_app_token') != null && localStorage.getItem('session_name') != null && localStorage.getItem('session_status') == 'logged_in' && get_login_page == 'public/login.html'){
           
        }else{
            
        }
    },
    authSession: function(login_data){
        const app_username = login_data.username;
        const app_password = login_data.password;
        const app_token = localStorage.getItem('session_app_token')
        const username_check = db.collection("users").doc(app_username);
        username_check.get().then((doc) => {
            if (doc.exists) {
                swalfire('login_success');                
                if(doc.data().password == app_password){                    
                    const session_data = {
                        // name: app_username,
                        token: app_token,
                        session_time_in: firebase.firestore.Timestamp.fromDate(new Date()), 
                        session_time_out: null,                      
                        session_status: 'logged_in'
                    }
                    username_check.update(session_data)
                    .then(() => {
                        console.log("session successfully written!");
                        localStorage.setItem('session_name', app_username);
                        localStorage.setItem('session_status', 'logged_in');
                        localStorage.setItem('session_type', doc.data().type)

                        if(doc.data().type == 'administrator'){
                            window.location.href="admin/index.html"
                        }else if(doc.data().type == 'tracer'){
                            window.location.href="views/dashboard.html"
                        }
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                                                        
                }else{                    
                    
                    swalfire('login_failed');
                }
            } else {
                swalfire('login_failed');               
            }
        });
    
    },
    destroySession: function(){
        const session_name = localStorage.getItem('session_name');
        // const session_app_token = localStorage.getItem('session_app_token');

        const session_check = db.collection('users').doc(session_name);
        session_check.get().then((doc) => {
            if(doc.exists){
                console.log(doc.data().time_login)
                session_check.update({
                    // name: session_name,
                    token: '',
                    // type: doc.data().type,
                    // time_login: doc.data().time_login,
                    session_time_out: firebase.firestore.Timestamp.fromDate(new Date()),
                    session_status: 'logged_out'
                }).then(() => {
                    console.log(doc.data().time_login)
                    localStorage.removeItem('session_name');
                    localStorage.removeItem('session_app_token');
                    localStorage.removeItem('session_status');
                    localStorage.removeItem('session_type');
                    console.log('logged_out')
                    window.location.href = '../index.html'
                });
                
            }else{

            }
        })

        localStorage.removeItem('session_name');
        localStorage.removeItem('session_token');
        localStorage.removeItem('session_status');

    }
}

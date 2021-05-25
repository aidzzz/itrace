//
// swalfire.js
//

'use strict';

    function swalfire(swalresponse, result){
        // var swalinit = swalresponse;
        let timerInterval
        
        switch(swalresponse){
/////// payment
            case 'offline':
                Swal.fire({
                    title: 'Payment Successful',
                    text: "You won't be able to revert this!",
                    icon: 'success',
                    willOpen: () => {
                        // $('#modal_payment_receive').modal('hide');
                    },
                    willClose: () => {
                        // resetlocalstorage();
                    }
                })

            break;
                        
            case 'login_success':
                Swal.fire({
                title: 'Successful',
                icon: 'success',
                html: 'Logging in. Please wait.',
                // timer: 1300,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()                
                },
                willClose: () => {
                    // clearInterval(timerInterval)
                }
                }).then((result) => {
                    
                })
            break;

            case 'login_failed':
                Swal.fire({
                title: 'Login failed',
                icon: 'error',
                html: 'Username or Password is incorrect',
                // timer: 1300,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try again',
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    // clearInterval(timerInterval)
                }
                }).then((result) => {
                 
                })
            break;

            case 'login_empty':
                Swal.fire({
                title: 'Empty fields',
                icon: 'error',
                html: 'Fields should not be empty',
                // timer: 1300,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try again',
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
            
                }
                }).then((result) => {
                 
                })
            break;

            case 'login_info':
                Swal.fire({
                    title: 'Welcome to ITRACE',
                    icon: 'info',
                    html: '<span class="text-success">Viewer</span>: Click <span class="text-success">viewer</span> if you are a locals using the app. <br/> <span class="text-warning">Tracer</span>: Click <span class="text-warning">tracer</span> if you tracer of the municipality.',
                    // timerProgressBar: true,
                    allowOutsideClick: true,
                    allowEscapeKey: true,
                    allowEnterKey: true,
                    confirmButtonText: "OK, I got it."
                  })
            break;

            case 'log_out':
                Swal.fire({
                    title: 'Logging out',
                    html: 'logging you out of the system',
                    // timerProgressBar: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    didOpen: () => {
                        Swal.showLoading()
                        session.destroySession();
                    },
                    willClose: () => {
     
                    }
                  }).then((result) => {
                  })
            break;


            
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            case 'add_trace_success':
                Swal.fire({
                title: 'Successful',
                icon: 'success',
                html: 'Added Successful',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    localStorage.removeItem("lat");
                    localStorage.removeItem("lng");
                    window.location.href="traces.html"
                })
            break;

            case 'add_trace_success_admin':
                Swal.fire({
                title: 'Successful',
                icon: 'success',
                html: 'Added Successful',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    localStorage.removeItem("lat");
                    localStorage.removeItem("lng");
                    window.location.href="admin_traces.html"
                })
            break;
            
            case 'add_trace_error':
                Swal.fire({
                title: 'Error',
                icon: 'error',
                html: 'Logging in. Please wait.',
                timer: 1300,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                 
                })
            break;

            case 'get_location_error':
                Swal.fire({
                title: 'Error',
                icon: 'error',
                html: 'Location not found',
                // timer: 1300,
                showConfirmButton: true,
                // timerProgressBar: true,      
                })
            break;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'admin_resolution':
                Swal.fire({
                title: 'Resolution not suitable',
                icon: 'error',
                html: 'Use computer or tablet for better experience',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    swalfire('log_out');
                })
            break;                
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'profile_update_success':
                Swal.fire({
                title: 'Updated Successfully',
                icon: 'success',
                html: 'Changes you\'ve made has been saved',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                
                },
                willClose: () => {
                    
                }
                }).then((result) => {                   
                })
            break;
            

            case 'username_already_used':
                Swal.fire({
                title: 'Username is not available',
                icon: 'error',
                html: 'Please use another username',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try again',
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    
                })
            break; 

            case 'username_field_empty':
                Swal.fire({
                title: 'Username is empty',
                icon: 'error',
                html: 'Please use put a username',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try again',
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    
                })
            break; 

            case 'user_create_success':
                Swal.fire({
                title: 'User Created Successfully',
                icon: 'success',
                html: 'A new user can access the app',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                    $('#add_user_modal').modal('hide');
                    $('#create_user_form')[0].reset();
                },
                willClose: () => {
                    
                }
                }).then((result) => {         
                                        
                })
            break;

            case 'edit_trace_success':
                Swal.fire({
                title: 'Successful',
                icon: 'success',
                html: 'Updated Successful',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    localStorage.removeItem("lat");
                    localStorage.removeItem("lng");
                    window.location.href="traces.html"
                })
            break;

            case 'edit_trace_success_admin':
                Swal.fire({
                title: 'Successful',
                icon: 'success',
                html: 'Updated Successful',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    
                }
                }).then((result) => {
                    localStorage.removeItem("lat");
                    localStorage.removeItem("lng");
                    window.location.href="admin_traces.html"
                })
            break;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'update_password_success':
                Swal.fire({
                title: 'Successful',
                icon: 'success',
                html: 'Password Updated Successful',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                // confirmButtonText; ''
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                    console.log('update_password_success')
                },
                willClose: () => {
                    
                }
                }).then((result) => {

                })
            break;

            case 'update_password_empty':
                Swal.fire({
                title: 'Empty Password Fields',
                icon: 'error',
                html: 'Password field should not be empty',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try Again',
                // timerProgressBar: true,
                didOpen: () => {
                    // Swal.showLoading()
                   
                },
                willClose: () => {
                    console.log('update_password_empty')
                }
                }).then((result) => {
                  
                })
            break;
            case 'update_password_failed':
                Swal.fire({
                title: 'Update Password Failed',
                icon: 'error',
                html: 'Passwords don\'t match',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try Again',
                didOpen: () => {
                    // Swal.showLoading()
                    console.log('update_password_failed')
                },
                willClose: () => {
                    
                }
                }).then((result) => {
               
                })
            break;

            case 'update_password_error':
                Swal.fire({
                title: 'Update Password Failed',
                icon: 'error',
                html: 'Error on server',            
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: true,
                confirmButtonText: 'Try Again',
                didOpen: () => {
                    // Swal.showLoading()
                   console.log('update_password_error')
                },
                willClose: () => {
                    
                }
                }).then((result) => {
               
                })
            break;

        }        
    }


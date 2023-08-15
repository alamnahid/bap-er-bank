// add click event handler in the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email field 
    //input field theke value paite amra sobsomoy value use korbo 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step 3 get password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // step 4: verify email address 
    if(email==='nahid@gmail.com' && password==='1234'){
        window.location.href='bank.html';
    }
    else{
        alert('Age thik password den tarpor baper hotel e jan')
    }

});


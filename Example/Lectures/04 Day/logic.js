function login_logic(){

    // get the username and password from the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    r_username = "admin";
    r_password = "admin@123";

    // check if the username and password are correct
    if (username === r_username && password === r_password) {
        // if correct, redirect to the home page
        window.location.href = "welcome.html";


        }else{
                window.location.href = "Error.html";
        }

}
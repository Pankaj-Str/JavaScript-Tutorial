function login_hub(){

    user_name = document.getElementById("username").value;
    user_password = document.getElementById("password").value;

    user = "admin@cwpc.in";
    password = "admin@123";

    if(user_name == user && user_password == password){
        alert("Login Successful");
        window.open("Welcome.html");
    }else{
        alert("Login Failed");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }

    

}
function login(){

    user_name = document.getElementById("email").value;
    password = document.getElementById("pwd").value;

    user = "admin@cwpc.in";
    passwd = "admin@123";


    if(user_name == user && password == passwd ){
        window.open("Welcome.html")
    }else{
        alert("wrong password")
        window.open("Err.html")
    }

}
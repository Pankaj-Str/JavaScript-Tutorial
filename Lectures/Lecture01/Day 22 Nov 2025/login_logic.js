

function Login_result(){

    u_name = document.getElementById("username").value;
    u_password = document.getElementById("password").value;

    username = "admin@cwpc.in";
    password = "admin@123"

    if(u_name == username && u_password == password){
        window.open("Home.html");
    }else{
        document.getElementById("Error_print").innerHTML = "Wrong Password and user Name .. Try again !"
    }


}
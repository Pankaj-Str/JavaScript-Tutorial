function logincode(){

    u_name = document.getElementById("username").value;
    u_pwd = document.getElementById("password").value;

    if(u_name == "admin@p4n.in" && u_pwd == "admin"){

        window.open("welcome.html")
    
    }else
    {

        alert("Check Password And Login Again...")
    }


}
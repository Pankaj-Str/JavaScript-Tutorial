
function info(){
    console.log("welcome to codeswithpankaj.com");
}

// calling function 

info();

// Function With Parameters

function UserInfo(Name,age,height){
    console.log(`My Name is ${Name} and I am ${age} years old and my Height ${height}`);
}

// calling function 

UserInfo("Nishant",12,4.5);

// return type 

function set_tax(){
    return 250;
}

console.log(` this is tax {set_tax()}`);
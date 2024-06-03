
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

values = set_tax()
console.log(` this is tax ${values} `);

// Function with Default Parameters

function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet("Nishant"); // Outputs: Hello, Nishant!
greet(); // Outputs: Hello, Guest!

// Function Expressions

multiply = function(a, b) {
    return a * b;
};

result = multiply(4, 3);
console.log("The result is: " + result);


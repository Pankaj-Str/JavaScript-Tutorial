// basic Arrow funciton 

const greet = () => console.log("Good Morning");

greet();

// use arg..

const info = (Name,Age) => {
    console.log(`My name is ${Name} and age is ${Age}`);
}

info("Nishant",12);

// return type + arg.

let addNumbers = (a, b) => {
    let result = a + b;
    return result;
}
let sum = addNumbers(5, 8);
console.log("The sum is " + sum);

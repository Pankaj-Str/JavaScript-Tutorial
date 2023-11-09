// Arrow function with Argument

let numbers = (a,b) => console.log(a+b);

numbers(23,45)

let msg = () => console.log("codeswithpankaj.com");

msg()

let addNumbers = (a, b) => {
    let result = a + b;
    return result;
}
let sum = addNumbers(5, 8);
console.log("The sum is " + sum);
console.log("This is a JavaScript file for VM testing with arrow functions.");

// arrow function example
const greet = () => console.log("Good Morning");

greet();

// use arguments in arrow function
const info = (Name, Age) => {
    console.log(`My name is ${Name} and age is ${Age}`);
}

info("John", 30);
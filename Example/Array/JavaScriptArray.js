const fruits = ["apple", "banana", "cherry"];


// Array Constructor

const colors = new Array("red", "green", "blue");

// Array Elements
const mixedArray = [1, "apple", { name: "John" }, [2, 3, 4]];



const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"

console.log(firstFruit);
console.log(secondFruit);

fruits[2] = "grape";

console.log(fruits);

fruits.push("orange"); // adds element to the end of array

console.log(fruits);

fruits.pop(); // removes last element from array

console.log(fruits);

fruits.shift(); //removes first element from array

console.log(fruits)

fruits.unshift("kiwi"); //adds an element to the beginning of the array

console.log(fruits);

// Accessing elements with index
const myArray = [5,6,7,8,9];

let x = myArray[1]; //

// Using for loop
for (let i=0; i<myArray.length; i++) {
    console.log(`The value at ${i} is ${myArray[i]}`);
}  

// Using while loop
let j = 0;
while (j < myArray.length) {
    console.log(`The value at ${j} is ${myArray[j]}`);
    j++;
}
// Using for...of loop
for (const val of myArray){
    console.log(`Value: ${val}`);
}




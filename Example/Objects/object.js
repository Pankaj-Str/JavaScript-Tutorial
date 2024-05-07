const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
};

console.log(person.firstName)

// class and object 


class client{
     
    info(){
        console.log("welcome to p4n.in");
    }
    
}

// call from object 

obj = new client();
obj.info();


// object create method Object.create()


const animal = {
    type: "Mammal",
    sound: "Roar"
};

const lion = Object.create(animal);
lion.name = "Simba";

console.log(lion.name)
console.log(lion.type)


// Object Methods

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(8, 2)); // 6


const p4n_calculator = {
    gst: function(price, gst) {
        finalprice = price*gst/100
        finalprice = price+finalprice
        console.log("final price : "+finalprice)
    }
    
};

p4n_calculator.gst(1200,18);

// Object Properties and Methods
const student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    greet: function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
    }
};

student.greet(); // "Hello, I'm Alice Smith."

// Object Iteration

const person1 = {
    name: "John",
    age: 20,
};
console.log(person1);

for (let key in person1) {
    console.log(key, person1[key]);
}

person1.age = 33;

for (let key in person1) {
    console.log(key, person1[key]);
}

const keys = Object.keys(person1);
const values = Object.values(person1);
const entries = Object.entries(person1);
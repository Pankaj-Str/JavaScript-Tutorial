class animal{
    
    color = "white";

    info(){
        console.log("This is an animal class");
    }

    type_dog(name){
        console.log("Dog name is: " + name);
        console.log("Dog type is: dengerous dog");
        console.log("Dog color is:  "+ this.color);
    }


}


// create object
const dog = new animal();

// access method
dog.info();

// send data to method
dog.type_dog("Labrador");

// send value to variable

dog.color = "black";

dog.type_dog("Bulldog");
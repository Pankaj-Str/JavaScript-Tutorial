// create a global variable

var number = 10;

function printNumber() {

    // local var
    var data = 20;

    // access the global variable
    console.log("The number is: " + number);
    console.log("The data is: " + data);

}

console.log("Accessing global variable outside function: " + number);
// console.log("Accessing local variable outside function: " + data); 

function info(){
    //console.log("call data inside info(): " + data);
    console.log("call number inside info(): " + number);
}


printNumber();

info();
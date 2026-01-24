const info = {
    Name : "joy",
    Age : 21,
    City : "New York"
}

console.log(info);

// accessing values
console.log(info.Name);

// access form key 
console.log(info["Age"]);

// adding new data 

info.Country = "USA";
console.log(info);

// add new function
info.greet = function() {
    console.log("welcome to codeswithpankaj");
}

console.log(info);


info.greet();
info = {
    'name': 'joy',
    'age' : 12,
    'city':  'Beijing'
}

console.log(info.city)
console.log(info['age'])

for (let key in info) {
    console.log(key +' '+ info[key]);
}

class  Person{
    
    intro() {
    
            console.log('welcome to js...')
    }

}

person = new Person();
person.intro();


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



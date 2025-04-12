// array method in js

data = [11,22,33,44,55,66]

// 1. forEach
data.forEach((value, data) => {
    console.log(value, data)
})

// array methods

// 2. map
// create a new array

data = [11,22,33,44,55,66]

data.map((value, data) => {
    console.log(value, data)
})


// Array methods 

// 1 length

data = [11,22,33,44,55,66]
console.log(data.length)

// 2. push
data.push(77)
console.log(data)

// 3. pop
data.pop()
console.log(data)

// 4. unshift
data.unshift(0)
console.log(data)

// 5. shift
data.shift()
console.log(data)

// 6. concate
data1 = [11,22,33]
data2 = [44,55,66]
data3 = data1.concat(data2)
console.log(data3)

// 7 delete
data = [11,22,33,44,55,66]
delete data[2]
console.log(data)

// 8 sort
data = [11,22,33,10,55,66]
data.sort()
console.log(data)

// 9 reverse
data = [11,22,33,10,55,66]
data.reverse()
console.log(data)

// filter
data = [11,22,33,10,55,66]
data.filter((value) => {
    return value > 20
}).forEach((value, data) => {
    console.log(value, data)
})
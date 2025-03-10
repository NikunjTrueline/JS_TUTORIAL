let billion = 1000000000;

// We can also use underscore _ as the separator:
// other ways to define 1 million.

let million = 1e6;

console.log(1e6==1000000) 

let ex1 = 1e3        // 1000
let ex2 = 123e4       // 1230000
let ex3 = 1.23e4        // 12300

console.log(4.875e4==48750)  

// bcz after point 3 digit so this three digit replace with zero 
// so  4.875e4 means 4.8750000 is equal to 48750

// for generate random number.
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// math function 
console.log(Math.abs(-10))
console.log(Math.round(9.7))
console.log(Math.ceil(6.4))
console.log(Math.floor(6.4))
console.log(Math.max(10,9,67,5,4.67))
console.log(Math.min(10,9,67,5,4.67))
console.log(Math.pow(10,3))
console.log(Math.sqrt(225))


const amount = 8976590;

console.log(amount.toLocaleString("en-IN"))
// console.log(amount.toLocaleString("en-US"))


const bigValue = 9.9686866875
console.log(bigValue.toFixed(2))


const min = 1
const max = 10

// for generate random number between 1 to 10
console.log(Math.floor(Math.random() * (max-min+1)) + min)


// for define bigInt number we can use n character after Value

let check = 5676
let bigNumber = 9786867577657546n

console.log(bigNumber)


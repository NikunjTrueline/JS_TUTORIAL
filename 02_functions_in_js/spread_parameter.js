// spread parameter used for check max value through math.max function.

// Math.max expects a list of numeric arguments, not a single array:
// but we have array which is stored numeric element so how to solve ? at this time we can use spread operator.


let values = [7,3,6,7,9,2,4,6,5,9]
console.log(Math.max(...values))

let minValue = Math.min(...values);
console.log(minValue)



// we can also use spread operator to spred element means merge element.

let array1 = ["apple","samsung","oppo","vivo"]
let array2 = ["Mercidies","bmw","audi","volvo"]

let biggestCompany = [...array1,...array2]

console.log(biggestCompany)

// console.log(typeof biggestCompany)
// function sum(a,b)
// {
//     console.log(a+b)
// }

// sum(10,20)

let multiplication = (a, b) => {
    return a * b;
};

console.log(multiplication(10, 20));

const square = (num) => num * num;

console.log(square(10));

// if you wont to return object in arrow function without using return keyword so how is possible.

const getobject = (userName) => ({ userName: userName });

console.log(getobject("Nikunj@Insta"));

// another example

let demo = (length, width) => length * width;

//--------------------------------

// Basic Calculator using Arrow Function
const calculator = (num1, num2, operation) => {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
};

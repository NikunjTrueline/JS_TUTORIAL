let a = 20;
let b = 4;

console.log(a);
console.log(b);

// arithmetic operator

console.log("a + b is ", a + b);
console.log("a - b is ", a - b);
console.log("a - b is ", a * b);
console.log("a - b is ", a / b);
console.log("a % b is ", a % b);
console.log("a ** b is ", a ** b);
console.log("a++ is ", a++);
console.log("--b is ", --b);

// assignment operator
console.log("a+= is ", (a += 10));
console.log("a*=b is ", (a *= b));

// comparison operator

let c = "12";
let d = 12;

console.log("c == d is ", c == d);
console.log("c != d is ", c != d);
console.log("c === d is ", c === d);
console.log("c !== d is ", c !== d);
console.log("c > d is ", c > d);
console.log("c <= d is ", c <= d);

// logical operator

console.log(c > d && c < d);
console.log(c > d || c < d);
console.log(!c < d);

// typeof operator

let type1 = 10;
let type2;
let type3 = null;

console.log(typeof type1);
console.log(typeof type2);
console.log(typeof type3);

// nullish coalescing operator
// if value null or undefine than after operator value automatclly assigend in variable.

let val1;

// val1 = 10 ?? 15;
// val1 = null ?? 78;
val1 = undefined ?? 95;

console.log(val1);

// comments

// single line comments

/*
This is 
multiline 
comments
*/

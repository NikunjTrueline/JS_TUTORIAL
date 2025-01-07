// For loop

/*

console.log("The sum of First 10 Natural number is");

let sum = 0;
let fact = 1;

for (let i = 1; i <= 10; i++) {
  sum += i;
  fact *= i;
}

console.log(sum);
console.log(fact);

*/

console.log("");
console.log("All Done");

let a = 13;
let flag = 0;

for (let i = 2; i < a; i++) {
  if (a % i == 0) {
    flag = 1;
  }
}

if (flag == 0) {
  console.log("Number is prime number");
} else {
  console.log("number is not prime number");
}

console.log("");
console.log("While Loop..");

let start = 1;

while (start <= 10) {
  console.log(start);
  start++;
}

console.log("");
console.log("Do While Loop..");

let condition = true;

// do {
//   console.log("Heyy!!", start);
//   start++;
// } while (condition);

const obj = {
  rohan: 98,
  aksh: 78,
  lovish: 99,
};

/*
syntax for for in loop

for (const key in object) {
console.log("key is ",key)
console.log("value is ",object[key])
}
*/

for (let marks in obj) {
  console.log(obj[marks]);
}


// for of loop


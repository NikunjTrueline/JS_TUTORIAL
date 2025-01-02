let array = [1234, "Let's try", true, undefined, null, 9.9, "You can do that"];

console.log(`${array} is object`);
console.log(array.length);
console.log(array[3]);
console.log(array[4]);
console.log(array[6]);

array[3] = false;

console.log("\nPrint array element : ");

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log(typeof array);

// ** arrays methods

console.log(array.push(10));
console.log(array.pop());
console.log(array);
console.log(array.join("_"));

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
let a3 = [9, 10];

console.log(a1.concat(a2, a3));
console.log(a1.reverse());

// looping through array

console.log("\n\n");

console.log("Looping Through Array");

console.log("\n");

//forEach method
array.forEach((value, index, array) => {
  console.log("Array index is", index, "and value is", value);
});

// map method
array.map((value, index) => {
  console.log("index is", index, "value is", value);
});

let example = "I have an example string for make array";
let test = Array.from(example);

console.log(test);
console.log(typeof example);
console.log(typeof test);

for (let value of array) {
  console.log(value);
}

// map method give you a new array

let oldarray = [2, 3, 5, 7, 9];

let newarray = oldarray.map((value, index, array) => {
  console.log(value);
  return value * value * value;
});

console.log(newarray);

// filter method create new array with specific conditions

let demoarray = [56, 89, 54, 9, 56, 98];

let filterarray = demoarray.filter((element) => {
  return element < 50;
});

console.log(filterarray);

// reduce method

let total = demoarray.reduce((e1, e2) => {
  return e1 + e2;
});

console.log(total);


const colors = ["red", "yellow", "blue"];
colors[4] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});


console.log(colors.reverse())


// let str = "𝒳😂";
// for (let char of str) {
//   console.log(char); // 𝒳, and then 😂
// }

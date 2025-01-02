let language = [
  "c",
  "cpp",
  "sql",
  "html",
  "css",
  "javaScript",
  "reactJs",
  "cpp",
];

// console.log(language);

// add item of end
language.push("nodeJs");

//remove item from end
language.pop();

//remove item from start
language.shift();

// add item from start
language.unshift("ccc", "c");

console.log(language);

// splice
// remove element with particular index and you can also replace element

language.splice(0, 2, "algol", "bcpl"); // remove element 0 and 1  then replace with algol and bcpl

console.log(language);

// slice
//It returns a new array copying to it all items from index start to end (not including end).

let newLanguage = language.slice(2, 5);

console.log(newLanguage);

// concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.

let logical = ["DSA", "OOPS"];

console.log(language.concat(logical));
console.log(language.concat(logical, "networking"));

// Searching in array

// indexOf/lastIndexOf and includes

console.log(language.indexOf("c++")); // 2
console.log(language.indexOf("reactJs")); // 7
console.log(language.lastIndexOf("cpp")); //8
console.log(language.includes("html")); // true

//find and findIndex/findLastIndex

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "Mary" },
];

let firstUser = users.find((item) => item.name == "John");

console.log(firstUser); // get whole object

console.log(users.findIndex((item) => item.name == "Mary")); // get id
console.log(users.findLastIndex((item) => item.name == "Mary")); // get id of last element

// filter
// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn).

// console.log(users.filter((user)=>user.id<4));

let newUser = users.filter((user) => user.id < 4);

console.log(newUser);

language.map((item, index, array) => {
  // console.log(`index is ${index} and value is ${item}`)
  console.log(index, item);
});

//reverse
// The method arr.reverse reverses the order of elements in arr.

console.log(language.reverse());

let numbers = [1, 2, 5, 7, 9, 3, 2, 5];

// sort()
// The call to arr.sort() sorts the array in place, changing its element order.

console.log(numbers.sort());

// split and join

let studentString = "student1,student2,student3,student4,student5";
let splitArray = studentString.split(",");
console.log(splitArray);

let studentArray = ["student1", "student2", "student3", "student4", "student5"];
let joinArray = studentArray.join();
console.log(joinArray);

// reduce method

let price = [299, 599, 2999, 999, 1299];

// let totalCartPrice = price.reduce((accumlator,singleItemPrice)=>{
//   return  accumlator + singleItemPrice;
// },0)

let intialPrice = 0;

let totalCartPrice = price.reduce(
  (accumlator, singleItemPrice) => accumlator + singleItemPrice,
  0
);

console.log(totalCartPrice);

// advanced

// chaining in js
// that means we can use multiple function in same array at same time.

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newValuesArray = values
  .map((element) => element * 10)
  .map((element) => element += 10)
  .filter((element) => element > 50);

console.log(newValuesArray);


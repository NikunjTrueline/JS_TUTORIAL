var name1 = "Nikunj";
let num = 10;
const pi = 3.14;

{
  // redefine but another scope
  let num = "check";
  console.log(num);

  // reassign value but this value store for globally changed
  name1 = "testing";
  console.log(name1);
}

console.log(name1);
console.log(num);

console.log("All Variables value print at one time.");
console.group(name1, num, pi);

/*

don't use var bcz its create abmiquity 
var a = 10;
var a = "reapeat"

global variables 
you can change variable value from any scope in file 

-----------------

mostly used let for store dynamic data.

scoped variable 
redefine not allowed

------------------

const used for store constant values.

*/

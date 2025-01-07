let demoMap = new Map();

demoMap.set(1,"fname")
demoMap.set(2,"lname")
demoMap.set(3,"email")
demoMap.set(4,"password")
demoMap.set(5,"confirmPassword")

console.log(demoMap)

demoMap.delete(5)

console.log(demoMap)

// clear map 
demoMap.clear();


console.log(demoMap)


// print value from map using loop 

let countryMap = new Map()

countryMap.set("US","United state of America")
countryMap.set("FR","France")
countryMap.set("AS","Australia")
countryMap.set("IN","Bharat")

// print list for map first element
// for (const element of countryMap) {
//   console.log(element);
// }

// destructring of list elements 
for (const [key,value] of countryMap) {
  console.log(key , ":" ,value );
}



//  weakMap 
//   we can not set anytypes of keys for map bcz weakmap only accept object keys not another types key allowed.

let forCheck = new WeakMap();

// console.log(typeof forCheck)

let obj = {
  "userName":"firstValue"
}

forCheck.set(obj,"Nikunj")

console.log(forCheck)














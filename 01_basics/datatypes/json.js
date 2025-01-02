let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: undefined,
  time: Date().toString(),
};

console.log(student);
console.log(typeof student, "\n");


// convert javascript object to  json string 
// json encode 

let tojson = JSON.stringify(student);

console.log(tojson);
console.log(typeof tojson, "\n");

// convert json string to javascript object 
// json decode

let fromjson = JSON.parse(tojson);
console.log(fromjson);
console.log(typeof fromjson);

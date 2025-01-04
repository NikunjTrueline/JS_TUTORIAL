let user = {
  name: "John",
  age: 30,
  function1: function () {
    return "Hello " + this.name + " you are " + this.age + " year old";
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.function1());

// add key value pair (property)
user.isadmin = true;

// remove key value pair
delete user.age;

user["email"] = "abc@gmail.com";

delete user["email"];

console.log(user);

// function can also return object
// example

function fullname() {
  return {
    name: "nikunj",
    surname: "asodariya",
  };
}

let assume = fullname();

console.log(assume.name + " " + assume.surname);

// you can special task with object properties

let sum = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(sum.a + sum.b + sum.c);

//Property existence test, “in” operator
// we can check property exit or not in speific object

let inOperatorCheck = { name: "John", age: 30 };

console.log("name" in inOperatorCheck);
console.log("email" in inOperatorCheck);

// for print all keys
for (let keys in sum) {
  console.log("keys : ", keys);
}

// for print all values
for (let keys in sum) {
  console.log("values : ", sum[keys]);
}

// Ordered like an object

let codes1 = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let code in codes1) {
  console.log(code);
}

let codes2 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (let code in codes2) {
  console.log(code);
}

console.log(
  "Key is String but only number so order system follow otherwise not."
);

// copy object.
// value copy but both variable target sem reference of object.

let base = { name: "John" };

let copy = base;
copy.name = "Nikunj";

console.log(copy);

let obj1 = {};
let obj2 = obj1;

console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // true

let obj3 = {};
let obj4 = {};

console.log(obj3 == obj4); // false
console.log(obj3 === obj4); // false

// nested object

let profile = {
  name: "nikunj",
  email: "nikunj123@gmail.com",
  contact: 9925875396,
  bank_details: {
    bank_name: "HDFC bank",
    account_type: "Saving",
    ifsc: "HDFC000123",
  },
};

console.log(profile);
console.log(profile.bank_details.bank_name);

let codesTest = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
  check: function () {
    console.log(this[41]);
  },
};

codesTest.check();

// non-existing property problem

console.log(codesTest.address); // undefine



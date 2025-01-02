// protoType in js
// javaScript object is an entity having state and behaviour.

// js objects have a special property called prototype.

// we can set prototype using __proto__


let common = {
  rule1: function () {
    console.log("Rules 1 for company");
  },
  rule2: function () {
    console.log("Rules 2 for company");
  },
};


let employee1 = {
  name: "nikunj",
  email: "nikunj@gmail.com",
};

let employee2 = {
  name: "nikhil",
  email: "nikhil@gmail.com",
};

console.log(employee1.email);
// console.log(employee1.rule1) undefine

// object have bydefault some protoTypes but if we want so we can add more prototypes. ex.

employee1.__proto__ = common;

employee1.rule1();
employee1.rule2();

// when we have same method in object or prototypes than js always give priority to object method not protoType method.

let employee3 = {
  name: "nikhil",
  email: "nikhil@gmail.com",
  rule1: function () {
    console.log("Rules  for employee3");
  },
};

employee3.__proto__ = common

employee3.rule1()

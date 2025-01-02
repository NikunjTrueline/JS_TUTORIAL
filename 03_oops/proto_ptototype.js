let a = {
  name1: "Nikunj",
  language: "English",
};

console.log(a);

let p = {
  run: () => {
    console.log("protoType p and run method call");
  },
};

a.__proto__ = p;

p.__proto__ = {
  name: "rohan",
};

a.run();
console.log(a.name1);

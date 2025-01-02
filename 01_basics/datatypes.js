let a = 10;
let b = true;
let c = undefined;
let d = null;
let e = "Happy New Year";
let f = Symbol("Thank you");
let g = BigInt("8745943201");

console.log(a, b, c, d, e, f, g);

console.log(d);

let map = {
  username: "luxuryVelocity",
  useremail: "luxuryvelocity2024@gmail.com",
  dob: "13-03-2000",
  numberofuser: 130,
  contact: BigInt("9925867545"),
};

console.log(map["contact"]);

console.log(typeof map);

//  primitive method 

let n = 1.2435647

console.log(n.toFixed(2))

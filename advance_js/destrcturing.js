// desctruchring in js

// if you don't get to value using index you can set arrays value in variable and then you can easily access those value using variable name

// for array
let array = [1, 2, 3, 4, 5];
let [a, b, c] = array;

let [a1, b1, c1, d1, e1, f1] = array;

console.log(a);
console.log(b);
console.log(c);

console.log(a1);
console.log(b1);
console.log(e1);
console.log(f1);

// for skiped element 

let colorlist = ["green","red","yellow","blue"]

let [firstcolor,,thirdcolor,] = colorlist

console.log(firstcolor)
console.log(thirdcolor)


// for object

let userValue = {
    username: "Nikunj",
    email: "nikunj.fanng@gmail.com",
    contact: 9925875399,
};

let { username } = userValue;
let {contact} = userValue

console.log(username);
console.log(contact)
// console.log(userValue.contact)
// console.log(userValue["contact"])
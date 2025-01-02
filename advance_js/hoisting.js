// you can accsess variable or function before its declaration.

console.log(a)
demo()

function demo()
{
    console.log("Demo function")
}

var a = 10
// let a = 10  with let variables we can not use hoisting
// const a = 10  same as let


// console.log(store(10,20))   when we store function into variable we can not use hoisting

// var store = function(a, b) {
//   return a + b;
// };

// console.log(store(10, 20)); 


console.log(sum(10, 20));

function sum(a,b)
{
    return a+b;
}

// concept of hoisting 
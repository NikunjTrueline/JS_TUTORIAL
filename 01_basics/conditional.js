let a = 1;

if (a < 10) {
  console.log("Value is lessthan 10");
} else if (a < 20) {
  console.log("Value is lessthan 20");
}

console.log("Print message is", a < 10 ? "Heyy" : "Hii");

console.log("Thank you.");

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard) console.log("User is loggedIn"),console.log("user have debitCard");


// falsy values 
// 0 ,  -0 , false , "" , 0n , null , undefine , NaN

// truty value 
// [] , {} , "0" , "hello" , function(){} , " "

// const falsy = null
// const falsy = 0
// const falsy = -0
// const falsy = undefine
const falsy = 0n

if(falsy)console.log("not execute")

  // how can i check empty object 

  let emptyObject = {}

  if(Object.keys(emptyObject).length === 0){
    console.log("Yes object is empty object")
  }


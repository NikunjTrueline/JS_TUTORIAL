// Immidiately Invoked Function Expression (IIFE)

// named IIFE
(function databaseConnection() {
  console.log("Internet connection verify");
})();


// unnamed IIFI or arrow function IIFE
(() => {
  console.log("Database connection start..");
})();


// when you write function in parenthese and after complate function you use parenthese that means function automatically call itself.

// argument pass on IIFE

((userName)=>{
console.log(`user-name is ${userName}`)
})("Nikunj@apple")



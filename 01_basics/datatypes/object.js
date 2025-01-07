// Non-primitive dataTypes

// you can use symbol as object key.
const userName = Symbol("userName");

// bydefault key treat as String
const user = {
    name : "Nikunj",
    email : "nikunj@google.com",
    age : 22,
    id : 345,
    logedInStatus : false,
    [userName] : "nikunj_Microsoft"
}

// two way for print or access value

console.log(user.email)
console.log(user["email"])

// you can update value 
user.email = "nikunj@microsoft.com"

// if you wan't don't update object values you can use freeze method.

Object.freeze(user)

user.email = "nikunj@update.com"

console.log(user["email"])

console.log(user)

// merge object 

let obj1 = {"a":1,"b":2,"c":3,"d":4}
let obj2 = {"e":1,"f":2,"g":3,"h":4}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3)


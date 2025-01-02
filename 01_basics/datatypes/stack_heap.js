// primitive types data stored in stack memory 
// non-primitive type data stored in heap memory 

// stack memory always give copy 
// heap memory always give refrence.

// stack examples

let oldusername = "truelineacademy"

let newusername = oldusername
newusername = "truelineinstitute"

console.log(oldusername) 
console.log(newusername) 


// heap examples 

let olduser = {
    email : "trueline@gmail.com",
    id : 88659
}

let newuser = olduser

newuser.email = "trueline@yahoo.com"

console.log(olduser.email)
console.log(newuser.email)


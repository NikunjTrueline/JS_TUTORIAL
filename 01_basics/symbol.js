let a = Symbol("id1");
let b = Symbol("id2");

console.log(a)
console.log(b)

console.log(a==b)

let user = {
    email : "nikunj@gmail.com",
    password : "Nikunj@123",
}

let check = Symbol("status")

user[check] = true

console.log(user)


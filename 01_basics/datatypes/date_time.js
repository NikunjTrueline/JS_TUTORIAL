let date = new Date();

console.log(date)

console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toTimeString())
// console.log(date.toISOString())
// console.log(date.toJSON())

let newdate = new Date()

console.log(newdate.getMilliseconds())
console.log(newdate.getDay())
console.log(newdate.getHours())
console.log(newdate.getMonth() + 1)  //bcz month start from 0 index so january is 0 
console.log(newdate.getMinutes())
console.log(newdate.getSeconds());
console.log(newdate.getTime())


let timestamp = Date.now()

console.log(timestamp)


let mydate = new Date(2024,10,24)

console.log(mydate)
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
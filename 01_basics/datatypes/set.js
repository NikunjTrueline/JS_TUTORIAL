let demo = new Set();

console.log(demo)

demo.add(1)

let myArray = [3,7,8,45]
demo.add(myArray)
demo.add("Heyy")

let myNewArray = [3,7,8,45]
demo.add(myNewArray)
demo.add(myArray)

demo.add(undefined)
console.log(demo)

demo.delete(undefined)
demo.delete(myNewArray)
console.log(demo)

console.log(demo.has('Heyy'))
console.log(demo.has('Hello'))




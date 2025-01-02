let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolve")
    }, 4000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p2 resolve")
        reject("p2 reject")
    }, 2000)
})


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolve")
    }, 3000)
})

// p1.then((result) => {
//     console.log(result)
// })

// p2.catch((result) => {
//     console.log(result)
// })

// p3.then((value) => {
//     console.log(value)
// })

// let promiseAll = Promise.all([p1,p2,p3])
 let promiseAll = Promise.allSettled([p1,p2,p3])
//  let promiseAll = Promise.race([p1,p2,p3])
//  let promiseAll = Promise.any([p1,p2,p3])

promiseAll.then((value)=>{
console.log(value)
})
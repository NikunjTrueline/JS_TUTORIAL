let promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise One Complated");
  }, 3000);
});

// promiseOne.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

let getUser = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      userName: "nikunjTrueline",
      email: "nikunjtrueline@gmail.com",
      github: true,
      uniqueId: 875678,
    });
  }, 3000);
});

// getUser.then((value) => {
//  console.log(value.email)
// }).catch((e) => {
//     console.log(e)
// })

// let promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("We got some error");
//   }, 2000);
// })
//   .then()
//   .catch((e) => {
//     console.log(e);
//   });

// getUser
//   .then((value) => {
//     return value.uniqueId;
//   })
//   .then((uniqueId) => {
//     console.log(uniqueId);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("run finally clause.");
//   });

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
    // console.log(typeof data)
  } catch (e) {
    console.log("Error : ", e);
  }
}

getAllUsers();

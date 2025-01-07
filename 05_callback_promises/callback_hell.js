// callback hell OR Nested callback

function getData(id, passfunction) {
  setTimeout(() => {
    console.log("The id of data is", id);
    if (passfunction) {
      passfunction();
    }
  }, 1000);
}

getData(10, () => {
  getData(20, () => {
    getData(30, () => {
      getData(40);
    });
  });
});

// real life example

// function login(username, password, passwordcheckFunction) {
//   console.log("Username check request send....");
//   setTimeout(() => {
//     if (username == "Nikunj_Google") {
//       passwordcheckFunction(password);
//     } else {
//       console.log("username not found");
//     }
//   }, 2000);
// }

// function password(pass) {
//   console.log("password check request send....");
//   setTimeout(() => {
//     if (pass == "Nikunj@123") {
//       console.log("you can do login");
//     } else {
//       console.log("password not match");
//     }
//   }, 2000);
// }

// login("Nikunj_Google", "Nikunj@123", password);

function task1() {
  return new Promise((resolve, reject) => {
    console.log("\n\nTask1 continuee...");
    setTimeout(() => {
      console.log("Login Successfully");
      // resolve("successful");
      reject("Get Some Error");
    }, 2000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    console.log("Task2 continuee...");
    setTimeout(() => {
      console.log("LogOut Successfully");
      resolve("successful");
    }, 2000);
  });
}

task1().then((result) => {
  console.log(result, "\n\n");
  task2().then((result) => {
    console.log(result, "\n\n");
  });
}).catch((e)=>{
  console.log(e)
});

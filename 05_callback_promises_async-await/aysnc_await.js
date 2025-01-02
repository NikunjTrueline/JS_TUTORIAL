function demo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // must be return resolve or reject otherwise promiss not work and await procces stop
      resolve("success");
      console.log("Heyy!!");
    }, 3000);
  });
}

async function forcall() {
  console.log("First method call....");
  await demo();
  console.log("second method call....");
  await demo();
  console.log("third method call....");
  await demo();
}


forcall();

function promissdemo() {
  return new Promise((resolve, reject) => {
    resolve("Yes All Done..");
    //reject("Get Error");
  });
}

// we can call then and catch method after promiss call
// if promiss provide result that time then method call
// if promiss provide error that time catch method call

promissdemo()
  .then((result) => {
    console.log(result);
    console.log("Promiss get result so then method call");
  })
  .catch((e) => {
    console.log(e);
    console.log("Promiss get error so catch block call");
  });


  
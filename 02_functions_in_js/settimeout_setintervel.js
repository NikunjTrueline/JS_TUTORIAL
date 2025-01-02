let a = 1;

// call one time
// setTimeOut
setTimeout(() => {
  console.log("set Timeout method call");
  console.log(a);
  a++;
});

// call repitately
// setInterval
setInterval(() => {
  console.log("Set intervel method call");
  console.log(a);
  a++;
}, 1000);

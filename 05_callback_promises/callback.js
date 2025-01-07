function demo() {
  console.log("Hello");
}


setTimeout(demo, 2000);

function sum(a, b) {
  console.log(a + b);
}

function calculatesum(a, b, callback) {
  callback(a, b);
}

calculatesum(10, 20, sum);

// for deley any task
setTimeout(() => {
  console.log("We can call this delay function");
}, 2000);



// i want to make power function
// pow(2,3) = 8
// 2 * 2 * 2

function power(x, n) {
  if (n == 0 || n==1) {
    return x;
  } else {
    return x * power(x, n - 1);
  }
}

console.log(power(2, 3));

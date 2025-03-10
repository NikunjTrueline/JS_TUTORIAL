console.log("Heyy this web page help to you for power of any number");

function pow(a, b) {

    let check = 1;
    for (let i = 1; i <= b; i++) {
        check *= a;
    }
    console.log("value of a is ", a)
    return check;
}

let c = prompt("Enter a number ", 10)
console.log(c)
let d = prompt("Enter a number for multiply", 2)
console.log(d)


alert("The answer is " + pow(c, d))
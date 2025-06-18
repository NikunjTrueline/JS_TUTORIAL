// simple function

function sum(a, b) {   
    console.log(a + b);
}

sum(10, 20); // 30
sum(10, 20, 30); // 30 bcz third arguments not consider

// rest parameter function  

function sumWithRest(a, b, ...c) {
    let twoValue = a + b;
    let allValueForC = 0;
    for (let element of c) {
        allValueForC += element;
    }

    console.log(twoValue + allValueForC);
}

sumWithRest(10, 20, 30, 40, 50, 90, 67, 87, 23, 45, 32);

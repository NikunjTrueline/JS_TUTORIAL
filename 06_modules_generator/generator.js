// in generator we create function , but it is not normal function it's special function which has return multiple value using yield.

// untill we return yield untill then bydefault property false but if we return actual return than it is true.

function* listOfItemPrice() {
    yield 120;
    yield 780;
    return 999;
}

let data = listOfItemPrice();

const firstItemPrice = data.next();
console.log(firstItemPrice);

const secondItemPrice = data.next();

const thirdItemPrice = data.next();
console.log(thirdItemPrice);

// you can print all value using for of loop.
let dataPrintUsingLoop = listOfItemPrice();

for (let oneByOne of dataPrintUsingLoop) {
    console.log(oneByOne);
}

// another example
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

let storeData = generateSequence(2, 16);

for (let item of storeData) {
    console.log(item);
}

// we can use yield for generate password

function* generateSingleCharacter(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

function* generatePasswordCode() {
    yield* generateSingleCharacter(48, 57);
    yield* generateSingleCharacter(65, 90);
    yield* generateSingleCharacter(97, 122);
}

let str = "";

for (let codes of generatePasswordCode()) {
    str += String.fromCharCode(codes);
}

console.log(str);

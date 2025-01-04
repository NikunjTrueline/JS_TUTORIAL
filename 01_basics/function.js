function demo() {
  console.log("This is Demo Function.");
}

function sum(a, b) {
  return 1 + (a + b) - 1;
}

// shorthand syntax OR arrow function

const test = () => {
  return "Heyy!! How are you all ? ";
};

demo();
console.log("The sum of two value is", sum(10, 20));

console.log(test());

function minimun(a, b, c, d, e) {
  
  if (a < b && a < c && a < d && a < e) {
    return a;
  } else if (b < a && b < c && b < d && b < e) {
    return b;
  } else if (c < a && c < b && c < d && c < e) {
    return c;
  } else if (d < a && d < b && d < c && d < e) {
    return d;
  } else {
    return e;
  }
}

console.log("From five value minimum value is", minimun(21, 55, 6, 31, 6));

// function pass object

function forObject(anyobject) {
  return `userName is ${anyobject.name} and userId is ${anyobject.id}`;
}

const object = {
  name: "Nikunj",
  id: 210202010119,
};

console.log(forObject(object));

// function pass array

function forArray(anyArray) {
  return anyArray[1];
}

const values = [20, 40, 100, 8000];

console.log(forArray(values));

// single parameter but we can pass so many arguments
// rest operator (...)

function testfunction(...item1) {
  return item1;
}

console.log(testfunction(10, 100, "hello", true, null, undefined));

// default value with function

function defaultValue(userName = "Nikunj") {
  return `UserName is ${userName}`;
}

console.log(defaultValue());

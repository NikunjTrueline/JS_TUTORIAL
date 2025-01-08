// export object inject in current file using this syntax.
// import { additionOfTwoNumber, multiplicationOfTwoNum } from "./utils.js";

// if you want all things import from utils you can use this syntax.
import * as instance from "./utils.js";

// let addTwoNumber = additionOfTwoNumber(10, 20);
// console.log(addTwoNumber)

let addTwoNumber = instance.additionOfTwoNumber(10, 20);
console.log(addTwoNumber)

let mulTwoNumber = instance.multiplicationOfTwoNum(10, 20);
console.log(mulTwoNumber)


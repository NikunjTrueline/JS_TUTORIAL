console.log(document.body.firstChild);
console.log(document.body.childNodes);
console.log(document.body.lastChild);

// convert nodes into array
let array = Array.from(document.body.childNodes);

console.log(array);

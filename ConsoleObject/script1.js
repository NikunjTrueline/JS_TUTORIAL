// alert , prompt , confirm

// alert
//used for show alert dialog in browser

// prompt
// used for user input

// confirm
// used for user confirmation

alert("Enter the value for a");
let a = prompt("Enter value here");
console.log(a);
console.log(typeof a);

let b = Number.parseInt(a);
console.log(b);
console.log(typeof b);

let confirmation = confirm("you want to write data in document ?");

console.log(confirmation);

if (confirmation) {
  document.write(a);
} else {
  document.write("Permission not given to write data in document");
}

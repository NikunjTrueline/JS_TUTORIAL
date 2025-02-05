// for task element add and remove

// first create div and show in body
let box = document.createElement("div");
box.style.height = "500px";
box.style.backgroundColor = "#424242";
box.style.color = "white";
document.body.appendChild(box);

// create unorderList and store in div
let ulist = document.createElement("ul");
box.appendChild(ulist);

ulist.style.padding = "10px 0px 0px 25px";

let findUlist = document.querySelector("ul");

function language(lang) {
  let li = document.createElement("li");
  li.innerText = lang;
  li.style.fontSize = "24px";
  findUlist.appendChild(li);
}

language("Python");
language("Cpp");
language("Dart");
language("Java");

// update specific value

const secondLanguage = document.querySelector("li:nth-child(2)");
console.log(secondLanguage);

secondLanguage.innerText = "Ruby";

//remove element
const removeLast = document.querySelector("li:last-child");
removeLast.remove();

// another element add in body

let box2 = document.createElement("div");

box2.style.backgroundColor = "#34495e";
box2.style.color = "white";
box2.style.height = "600px";

document.body.appendChild(box2);


console.log("hello world")



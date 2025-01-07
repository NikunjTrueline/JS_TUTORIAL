// console.log(window);
// console.dir(window);
// console.log(document);

// DOM Manipulation

let a = document.getElementById("firstHeading");
console.log(a);

let container = document.getElementsByClassName("container");
console.log(container);

let tagname = document.getElementsByTagName("a");
console.log(tagname);

let paragraph = document.querySelector("p");
console.log(paragraph);

let querylist = document.querySelectorAll("a");
console.log(querylist);

// DOM Properties

// get Tage name
console.log(a.tagName);
console.log(document.getElementById("google").tagName);

// inner text for know content and update element content
console.log(a.innerText);
//a.innerText = "Updated Heading";

let heading3 = document.getElementById("h3");
heading3.innerText = "I Am Fine. What About You??";

// practice question

let updateheading = document.getElementById("updateHeading");
console.log(updateheading.innerText);
updateheading.append(" Trueline Institute");

// get attrtibutes for element

heading3.getAttribute("id");
console.log(heading3.getAttribute("id"));

// set attributes for element

let login = document.getElementById("log-in");

login.setAttribute("name", "helloButton");
login.setAttribute("class", "button-class");

//change styling for element

// container.style.backgroundColor = "green";

let practice = document.getElementById("practice");
console.log(practice);
practice.textContent = "Heyy!!";



practice.style.backgroundColor = "green";
practice.style.fontSize = "30px";
practice.style.display = "flex";
practice.style.alignItems = "center";
practice.style.justifyContent = "center";

// create element
let box = document.createElement("div")

// add this element in body 
document.body.appendChild(box)

// set attributes like id , class , title
box.setAttribute("id","unique")
box.setAttribute("class","common")
box.setAttribute("title","title")

// add content in tag
box.innerText = "Yes we can add element through js";

// add styling in tag
box.style.backgroundColor = "#424242";
box.style.color= "white"
box.style.height="40px"
box.style.padding = "10px";
box.style.fontSize= "24px"
box.style.borderRadius= "5px"

console.log(box)

box.innerText = "Replace with new"


const data = document.createElement("p")
document.body.appendChild(data)

data.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis inventore temporibus ullam aliquid explicabo corrupti dolores numquam, omnis beatae.";

data.style.color= "black"
data.style.fontSize = "20px"
data.style.padding = "0px 10px 0px 10px"


let youtube = document.createElement("a")
document.body.appendChild(youtube)

youtube.href= "https://www.youtube.com"
youtube.innerText= "youtube"
youtube.style.textDecoration="none"
youtube.style.padding="10px"
youtube.style.fontSize="25px"


console.log("Hello world")

const check = 89
console.log(check)


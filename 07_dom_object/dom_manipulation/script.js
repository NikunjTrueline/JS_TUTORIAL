// DOM Manipulation.

// selecting with ID
let heading3 = document.getElementById("log-in");
console.log(heading3);

// selecting with class name 
// we got collection not single element
let containers = document.getElementsByClassName("container")
console.log(containers)

// selecting with tag name
// we got collection not single element
let allpTag = document.getElementsByTagName("p")
console.log(allpTag)
console.log(allpTag[3])

allpTag[3].innerText = "convert to link"
allpTag[3].innerHTML = "<a href=''>Link</a>"

// innerText only replace tag content. but innerhtml replace complately tag.
// in our case befor we have paragraph tag after innerhtml value update our tag is anchor tag.

// selecting using querySelector
let firstParagraph = document.querySelector("p")
console.log(firstParagraph)

// selecting using queryallselector
let allParagraph = document.querySelectorAll("p")
console.log(allParagraph)


let modernData = document.querySelector("#modern")
console.log(modernData)

modernData.innerText="Modern Data"

console.log(modernData.textContent);

// check firstchild and lastchild 

let relation = document.querySelector(".unique")
console.log(relation)
console.log(relation.children)
console.log(relation.firstChild)
console.log(relation.lastChild)
console.log(relation.previousSibling)
console.log(relation.nextSibling)


// getAttributes and setAttributes 
console.log(modernData.getAttribute("class"));
console.log(modernData.getAttribute("id"));

modernData.setAttribute("class","modern-class")

console.log(modernData.getAttribute("id"))


// looping on nodeList
//modifyh2.forEach((e)=>{console.log(e.innerText)})

// convert HTMLcollection to array
// Array.from(HTMLcollectionName)

let listwork = document.querySelectorAll(".items");

listwork.forEach((e) => {
  e.style.fontsize = "20px";
  e.style.color = "purple";
  e.style.padding = "10px";
});


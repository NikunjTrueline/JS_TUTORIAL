// let a = document.getElementById("rotation");

// console.log(a.innerHTML);

// a.innerHTML = "<p id='test'>This is nikunj here!!</p>";

// a.innerText = "This is easycode Learning";

// a.style.width = "300px";

// document.getElementById("id-3").removeAttribute("display");
// document.getElementById("id-3").removeAttribute("height");

// let element = document.getElementById("id-2");

// let items = element.getElementsByTagName("li");

// console.log(items);

// const colorList = ["green", "blue", "purple", "red", "yellow"];

// let index = 0;

// for (let ele in items) {
//     items[ele].style.backgroundColor = colorList[index];
    
//     items[ele].style.padding = "3px";
//     if (colorList[index] == "yellow") {
//         items[ele].style.color = "black";
//     } else {
//         items[ele].style.color = "white";
//     }

//     index++;
// }


function forCheckForm()
{
    let x = document.forms["LoggedInForm"]["Email"].value;

    if(x == "")
    {
        console.log("Please enter valid email")
    }
}

let y = document.forms["LoggedInForm"]["submit"].value





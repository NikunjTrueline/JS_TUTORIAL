// 1. <!-- INSTAGRAM ADD AND REMOVE FRIEND FEATURE -->

let statusCheck = document.getElementById("status");

let button = document.getElementById("request");

button.addEventListener("click", function () {
    if ((statusCheck.innerHTML == "Follow")) {
        statusCheck.innerHTML = "Following";
        button.innerHTML = "Remove Friend";
        button.style.backgroundColor = "red";
    } else {
        statusCheck.innerHTML = "Follow";
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "green";
    }
});





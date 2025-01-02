let togglechange = document.getElementById("toggle");

console.log(togglechange);

let mode = "light";

console.log(typeof mode);

togglechange.addEventListener("click", () => {
  if (mode == "light") {
    mode = "dark";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    togglechange.innerText = "Light Mode";
  } else {
    mode = "light";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    togglechange.innerText = "Dark Mode";
  }

  console.log(mode);
});

let a = document.getElementById("login");
console.log(a);

// a.onclick = () => {
//   console.log("Yes you are logd-in");
// };


a.ondblclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.targate);
  console.log(e.clientX, e.clientY);
};

let b = document.getElementById("div1");

b.onmouseover = () => {
  console.log("mouse over");
  b.style.backgroundColor = "green";
  b.style.height = "80";
  b.style.width = "80px";
  b.style.borderRadius = "50%";
};

let demo = document.querySelector("#test");
console.log(demo);

demo.addEventListener("click", (e) => {
  console.log("Event Listner call for test button.");
});

demo.addEventListener("click", (e) => {
  console.log("Event Listner call for test button for 1 time");
});

const check = (e) => {
  console.log("Event Listner call for test button for 2 time");
};

demo.addEventListener("click", check);

demo.removeEventListener("click", check);

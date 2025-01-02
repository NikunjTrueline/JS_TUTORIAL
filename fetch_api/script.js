let url = "https://fakestoreapi.com/products";
let a = document.getElementById("getdatabutton");
let b = document.getElementById("showdatapara");

/*
// fetch data from server with promiss

function getApi() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        b.innerText = data[0].description;
      });
  }
  
  a.addEventListener("click", () => {
    getApi();
  });
*/

// fetch data from server with async & await

async function getApi() {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);

  b.innerText = data[0].description;
}

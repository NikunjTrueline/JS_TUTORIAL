// Question List : [[2, 4], 5, 7, 8, [5, 9, 1, [4, 7,1,6,]]]
// Expected List : [ 2, 4, 5, 7, 8, 5, 9, 1, 4, 7, 1, 6]

let demo = [[2, 4], 5, 7, 8, [5, 9, 1, [4, 7,1,6,]]];

let newList = [];

demo.forEach((element) => {
  if (element.includes) {
    element.forEach((element) => {
      if (element.includes) {
        element.forEach((element) => {
          newList.push(element);
        });
      } else {
        newList.push(element);
      }
    });
  } else {
    newList.push(element);
  }
});

console.log(newList)

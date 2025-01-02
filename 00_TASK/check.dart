// void main() {
//   List demo = [
//     [2, 4],
//     5,
//     7,
//     8,
//     [
//       5,
//       9,
//       1,
//       [4, 7]
//     ]
//   ];

//   // convert into single list

//   List newList = [];

//   demo.forEach(
//     (element) {
//       if (element is List) {
//         element.forEach(
//           (element) {
//             if (element is List) {
//               element.forEach(
//                 (element) {
//                   newList.add(element);
//                 },
//               );
//             } else {
//               newList.add(element);
//             }
//           },
//         );
//       } else {
//         newList.add(element);
//       }
//     },
//   );

//   print(newList);
// }

void main() {
  List fruits = <String>['apple', 'banana', 'cherry', 'date', "Strawberry"];


  // List length = [];

  // for (String element in fruits) {
  //   List demo = element.split("");
  //   length.add(demo.length);
  // }

  // int value = length[0];

  // length.forEach(
  //   (element) {
  //     if (element > value) {
  //       value = element;
  //     }
  //   },
  // );

  // print(fruits[length.indexOf(value)]);

    String longest = "";

  fruits.forEach(
    (element) {
      if (element.length > longest.length) {
        longest = element;
      }
    },
  );

  print(longest);
}

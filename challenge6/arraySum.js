// function arraySum(arr) {
//   let tempArr = arr.sort((a, b) => {
//     return a - b;
//   });

//   let largest = tempArr.pop();

//   let number = 0;

//   tempArr.forEach(item => {
//     number += item;
//   });
//   return largest === number;
// }

// console.log(arraySum([6, 2, 3, 4, 15]));

let nums = [1, 2, 2, 3];

console.log([...new Set(nums)]);

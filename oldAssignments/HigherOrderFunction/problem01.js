let arr = [10, 24, 56, 72, -10, -88, 100, 564];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 1) {
//     sum += (arr[i]);
//     count++;
//   }
// }
// console.log(sum/count);

let oddIndexArr = arr.filter((ele, i) => i % 2 == 1);
let sum = oddIndexArr.reduce((acc, ele) => acc + ele, 0);
let count = oddIndexArr.length;
let average = sum / count;
console.log(average);

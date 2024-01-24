let arr = [3, 4, 5, 6, 7];
let bag = "";
arr.forEach((ele, i) => {
  bag += i % 2 == 1 ? "-" : ele;
});
console.log(bag);

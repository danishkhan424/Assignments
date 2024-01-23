class Array {
  constructor(...args) {
    this.length = args.length;
    args.forEach((ele, ind) => {
      this[ind] = ele;
    });
  }
}
Array.prototype.push = function (num) {
  this[this.length] = num;
  this.length++;
};
Array.prototype.pop = function () {
  delete this[this.length - 1];
  this.length--;
};
Array.prototype.top = function () {
  console.log(this[this.length - 1]);
};
Array.prototype.print = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i]);
  }
  console.log(arr);
};
Array.prototype.printReverse = function () {
  let arr = [];
  for (let i = this.length - 1; i >= 0; i--) {
    arr.push(this[i]);
  }
  console.log(arr);
};
Array.prototype.size = function () {
  console.log(this.length);
};

const arr = new Array(1, 2, 3, 4, 56);
arr.push(10);
arr.pop();
arr.top();
arr.print();
arr.printReverse();
arr.size();
console.log(arr);

let rectangle = {
  length: 2,
  width: 3,
  area: function () {
    let result = this.width * this.length;
    return result;
  },
  perimeter: function () {
    let result = (this.length + this.width) * 2;
    return result;
  },
};

console.log(rectangle.area());
console.log(rectangle.perimeter());

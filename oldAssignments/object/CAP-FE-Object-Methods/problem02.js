let Name = ["Rice", "Dal", "Salt"];
let Quantity = [2, 3, 1];
let Price = [60, 50, 20];

let data = [];

for (let i = 0; i < Name.length; i++) {
  let obj = {
    name: Name[i],
    quantity: Quantity[i],
    price: Price[i],
    total: function () {
      return this.quantity * this.price;
    },
  };

  data.push(obj);
}
let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i].total();
}
console.log(sum);

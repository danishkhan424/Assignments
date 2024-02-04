var sales = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

function calculateSalesTotals(sales) {
  let data = [];
  for (let i = 0; i < sales.length; i++) {
    let obj;
    if (sales[i].discount != undefined) {
      obj = {
        discount: sales[i].discount,
        item: sales[i].item,
        original: sales[i].original,
        sale: sales[i].original - sales[i].discount * sales[i].original,
        stock: sales[i].stock,
        total:
          sales[i].stock *
          (sales[i].original - sales[i].discount * sales[i].original),
      };
    } else {
      obj = {
        item: sales[i].item,
        original: sales[i].original,
        sale: sales[i].original,
        stock: sales[i].stock,
        total: sales[i].stock * sales[i].original,
      };
    }
    data.push(obj);
  }
  return data;
}

console.log(calculateSalesTotals(sales));

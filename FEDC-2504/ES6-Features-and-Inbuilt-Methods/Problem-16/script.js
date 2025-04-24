const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Shirt", price: 40, category: "Clothing" },
  { name: "Book", price: 20, category: "Stationery" },
  { name: "Shoes", price: 100, category: "Clothing" }
];

const mappedProducts = products.map(product => (product.name.toUpperCase()));

console.log(mappedProducts);

const filteredProducts = products.filter(product => (product.category === "Clothing"));

console.log(filteredProducts);  

const sortedProducts = products.sort((a,b) => (a.price - b.price));

console.log(sortedProducts);

products.forEach(product => {
  const {name,price,category} = product;
  console.log(`The product ${name} costs $${price} and belongs to ${category} category.`);
  
});

const totalCost = products.reduce((acc,product) => acc+product.price,0);

console.log("$"+totalCost); 
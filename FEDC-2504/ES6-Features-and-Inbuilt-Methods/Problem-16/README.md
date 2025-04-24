# 💻 JavaScript Assignment: Mastering Higher-Order Array Methods

Use the following array for all questions unless stated otherwise:

```javascript
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Shirt", price: 40, category: "Clothing" },
  { name: "Book", price: 20, category: "Stationery" },
  { name: "Shoes", price: 100, category: "Clothing" }
];
```

---

### 1. map()
Write a function that returns a new array containing only the product names in uppercase using `map()`.

```javascript
// Expected output: ["LAPTOP", "PHONE", "SHIRT", "BOOK", "SHOES"]
```

---

### 2. filter()
Use `filter()` to return all products that belong to the `"Clothing"` category.

```javascript
// Expected output: [{ name: "Shirt", ... }, { name: "Shoes", ... }]
```

---

### 3. sort()
Sort the products by price in ascending order using `sort()`.

```javascript
// Expected order: Book, Shirt, Shoes, Phone, Laptop
```

---

### 4. forEach()
Use `forEach()` to print a sentence for each product like:  
**"The product Laptop costs $1200 and belongs to Electronics category."**

---

### 5. reduce()
Use `reduce()` to calculate the total price of all products.

```javascript
// Expected output: 2160
```

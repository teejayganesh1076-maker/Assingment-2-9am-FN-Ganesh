let products = [
  { name: "Laptop", price: 50000, brand: "Dell" },
  { name: "Phone", price: 20000, brand: "Samsung" },
  { name: "Headphones", price: 2000, brand: "Sony" },
];
for (let { name, price, brand } of products) {
  console.log(`Product: ${name}, Price: ${price}, Brand: ${brand}`);
}
// class AdvertisingService {
//     constructor() {
//       // Mock database of products
//       this.products = [
//         {
//           name: 'Product A',
//           url: 'https://www.product-a.com'
//         },
//         {
//           name: 'Product B',
//           url: 'https://www.product-b.com'
//         },
//         {
//           name: 'Product C',
//           url: 'https://www.product-c.com'
//         }
//       ];
//     }
  
//     getRandomProduct() {
//       // Choose a random product from the database
//       const randomIndex = Math.floor(Math.random() * this.products.length);
//       return this.products[randomIndex];
//     }

//     generateAdLine() {
//       // Generate an advertising line with a randomly chosen product
//       const randomProduct = this.getRandomProduct();
//       return `Advertising: ${randomProduct.name} (${randomProduct.url})`;
//     }
//   }
  
//   // Usage example:
//   const advertisingService = new AdvertisingService();
//   const adLine = advertisingService.generateAdLine();
//   console.log(adLine); // Output: "Advertising: Product B (https://www.product-b.com)"
const express = require("express");

const app = express();

const products = [
  { name: "Product 1", url: "https://www.example.com/product1" },
  { name: "Product 2", url: "https://www.example.com/product2" },
  { name: "Product 3", url: "https://www.example.com/product3" },
  // Add more products as needed
];

function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * products.length);
  return products[randomIndex];
}

app.use((req, res, next) => {
  const product = getRandomProduct();
  res.locals.product = product;
  next();
});

app.use((req, res, next) => {
  res.locals.advertising = `Advertising: ${res.locals.product.name} (${res.locals.product.url})`;
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World! " + res.locals.advertising);
});

const port = process.env.PORT || 4007;

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});

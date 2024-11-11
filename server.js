const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Static JSON data about products
const products = [
    { id: 1, name: "MacBook Pro", category: "Laptop", year: 2021, price: "1200", originalPrice: "1500" },
    { id: 2, name: "iPhone 13", category: "Smartphone", year: 2022, price: "800", originalPrice: "1000" },
    { id: 3, name: "Sony WH-1000XM4", category: "Headphone", year: 2020, price: "300", originalPrice: "400" }
];

// Root endpoint to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to get all product data
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

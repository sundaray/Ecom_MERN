const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running great...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(5000, console.log("Server running on port 5000"));

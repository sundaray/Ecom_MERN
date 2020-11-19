const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();
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

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

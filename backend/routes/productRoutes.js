import express from "express";
const router = express.Router();

import {
  getProducts,
  getProductById,
} from "../controllers/productControllers.js";

//@desc    Fetch all products
//@route   GET /api/products
//@access  Public
router.get("/", getProducts);

//@desc    Fetch single product
//@route   GET /api/products/:id
//@access  Public
router.get("/:id", getProductById);

export default router;

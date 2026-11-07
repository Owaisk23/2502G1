import express from "express";
import path from "path";
import fs from "node:fs";
import Product from "../model/productSchema.mjs";

// const dirname = path.resolve();
// const dataPath = './data.json';
// const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
// const products = data.products;

let getProducts = async (req,  res) => {
  try {
    const products = await Product.find();
    console.log('Products:', products);

    res.status(200).json({
      message: 'Products fetched successfully',
      products: products
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
}

let getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if(!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    res.status(200).json({
      message: 'Product fetched successfully',
      product: product
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Internal server error'
    });
  }
}

const productController = {
  getProducts,
  getProductById
}

export default productController;
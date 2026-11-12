import express from "express";
import productController from "../controller/productController.mjs";

const productRouter = express.Router();

productRouter
    .get('/', productController.getProducts)
    // .get('/:id', productController.getProductById)
    .post('/', productController.create);

export default productRouter;
import express from "express";
import { addProduct, deleteProduct, getAllProducts, search, updateProduct } from "./products.controller.js";


const router = express.Router();

// add product(product must not found before)
router.post('/', addProduct)

// delete product (product owner only can do this and product must be found )
router.delete('/:id', deleteProduct);

// update product (product owner only)
router.put('/:id', updateProduct);

// get all products
router.get('/', getAllProducts);

// search for products where price greater than 3000
router.get('/search', search);






export default router;
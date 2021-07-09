import express from "express";
import Product from '../models/Product.js';
const app = express();

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).lean();
        res.json(products);
    } catch (err) {
        res.json({ message: err.message });
    }
}

export const addProduct =  async (req, res) => {
    console.log(req.body);
    const { name, owner, details } = req.body;
    const product = new Product({ name, owner, details });
    try {
        await product.save();
        console.log("Product created");
        res.redirect("/");
    } catch (err) {
        res.json({ message: err.message });
    }
} 
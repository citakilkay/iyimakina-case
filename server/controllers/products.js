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

export const getProductByID = async (req, res) => {
    const productByID = await Product.findById()
    try {
        const productByID = await Product.findById(req.params.id);
        res.json(productByID);
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

export const giveOffer = async (req, res) => {
    console.log(req.body);
    const {offer, owner, productID} = req.body;
    console.log('this is: ', offer)
    try {
        const result = await Product.findById(productID)
        result.offers.push([offer, owner]);
        result.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}
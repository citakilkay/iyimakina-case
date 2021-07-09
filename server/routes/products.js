import express from 'express';
import { getAllProducts, addProduct} from '../controllers/products.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - details
 *         - owner 
 *       properties:
 *         id:
 *           type: id
 *           description: The auto-generated id of the product by Mongodb
 *         name:
 *           type: string
 *           description: Name of the product 
 *         details:
 *           type: string
 *           description: The product details, features
 *         owner:
 *           type: string
 *           description: Owner of the product
 *       example:
 *         id: 607c39a5cd2ecd3cb093c1e0
 *         name: Machine 1
 *         details: This product has a really good price
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The books managing API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', getAllProducts);



/**
 * @swagger
 * /products/add:
 *   post:
 *     summary: Create a new product and save to database
 *     tags: [products]
 *     responses:
 *       200:
 *         description: Add a product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.post('/add', addProduct);


export default router;
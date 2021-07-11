import express from 'express';
import { getAllProducts, addProduct, giveOffer, getProductByID} from '../controllers/products.js';

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
 *         offers:
 *           type: array
 *           description: Offers of the product
 *       example:
 *         id: 607c39a5cd2ecd3cb093c1e0
 *         name: 'Machine 1'
 *         details: 'This product has a really good price'
 *         owner: '2U50WzXbPq8AX-FxAAAL'
 *         offers: [[700, 2U50WzXbPq8AX-FxAAAL], [500,2U50WzXbPq8AX-FxAAAL]]
 * 
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
 * /products/:id:
 *   get:
 *     summary: Returns the product by id
 *     tags: [product]
 *     responses:
 *       200:
 *         description: The product by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/:id', getProductByID);

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



/**
 * @swagger
 * /products/giveoffer:
 *   post:
 *     summary: Give an offer to one product
 *     tags: [products]
 *     responses:
 *       200:
 *         description: Give an offer
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product/offers'
 */
router.post('/giveoffer', giveOffer);


export default router;
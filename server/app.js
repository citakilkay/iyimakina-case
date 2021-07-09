import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import productsRoutes from './routes/products.js';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(port, () => {
        console.log(`The database listening at http://localhost:${port}`);
    });
}).catch((err) => console.log(err))

// Options for Swagger
const swaggerOptions = {
    swaggerDefinition : {
        openapi: '3.0.2',
        info: {
            title: "Auction App",
            description: "This is a sample server for an auction app",
            version: "1.0.1",
            contact: {
                name: "Ilkay Citak",
                email: "citakilkay@gmail.com",
            },
            servers: [
                {
                    url: `http://localhost:${port}`,
                    description: "Development server",
                }
            ]
        }
    },
    apis: ["./routes/*.js"],
}

// Instead BodyParser
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Cross-origin resource sharing
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// For Swagger Api Documentation
const specs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

//Routes
app.use('/products', productsRoutes);
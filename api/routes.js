const ProductsController = require ('./controllers/ProductsController.js');
const express = require('express');
const routes = express.Router();

routes.get('/products', ProductsController.get);
routes.get('/products/:id', ProductsController.getSingle);
routes.post('/products', ProductsController.add);

module.exports = routes;
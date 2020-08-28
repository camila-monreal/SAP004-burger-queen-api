const ProductsController = require ('./controllers/ProductsController.js');
const OrdersController = require('./controllers/OrderController');
const express = require('express');
const routes = express.Router();

routes.get('/products', ProductsController.get);
routes.get('/products/:id', ProductsController.getSingle);
routes.post('/products', ProductsController.add);
routes.delete('/products/:id', ProductsController.delete);

routes.get('/orders', OrdersController.get);
routes.get('/orders/:id', OrdersController.getSingle);
routes.post('/orders', OrdersController.add);

module.exports = routes;
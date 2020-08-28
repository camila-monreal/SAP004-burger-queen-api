const Sequelize = require('sequelize');
require('dotenv').config()
const env = process.env.NODE_ENV || "development"
const dbConfig = require('../config/database')[env];

const Product = require('../models/Product');
const Order = require('../models/Order');
const Order_Item = require('../models/Order_Item');

const connection = new Sequelize(dbConfig);

Product.init(connection);
Order.init(connection);
Order_Item.init(connection);
Order.associate(connection.models);
Order_Item.associate(connection.models);


module.exports = connection;
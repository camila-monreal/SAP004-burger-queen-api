const Product = require('../models/Product');

class ProductsService {
    static async getById(id) {
        try {
            return await Product.findByPk(id)
        } catch (error) {
            throw error
        }
    }
    static async all() {
        try {
            return await Product.findAll()
        } catch (error) {
            throw error
        }
    }
    static async add(newProduct) {
        try {
            const { name, price } = newProduct
            return await Product.create({ name, price })
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductsService;
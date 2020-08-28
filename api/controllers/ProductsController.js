const ProductsService = require('../services/ProductsService.js');

class ProductsController {
    static async get(req, res) {
        const products = await ProductsService.all()
        return res.json(products);
    }

    static async getSingle(req, res) {
        const product_id = req.params.id
        const product = await ProductsService.getById(product_id)
        return res.json(product);
    }

    static async add(req, res) {
        const product = await ProductsService.add(req.body)
        return res.json(product);
    }

    static async delete(req, res) {
        const product_id = req.params.id
        const product = await ProductsService.remove(product_id)
        return res.json(product);
    }
}

module.exports = ProductsController;
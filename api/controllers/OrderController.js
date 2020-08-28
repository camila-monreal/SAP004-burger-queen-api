const OrdersService = require('../services/OrdersService.js');

class OrdersController {
    static async get(req, res) {
        const orders = await OrdersService.all()
        return res.json(orders);
    }

    static async getSingle(req, res) {
        const order_id = req.params.id
        const order = await OrdersService.getById(order_id)
        return res.json(order);
    }

    static async add(req, res) {
        const order = await OrdersService.add(req.body)
        return res.json(order);
    }
}

module.exports = OrdersController;
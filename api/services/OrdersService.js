const Order = require('../models/Order');
const Order_Item = require('../models/Order_Item');

class OrdersService {
    static async getById(id) {
        try {
            return await Order.findByPk(id, {
                include: [{
                    model: Order_Item
                }]
            })
        } catch (error) {
            throw error
        }
    }
    static async all() {
        try {
            return await Order.findAll({
                include: [{
                    model: Order_Item
                }]
            })
        } catch (error) {
            throw error
        }
    }
    static async add(newOrder) {
        try {
            const { client, table, OrderItems } = newOrder
            const order = await Order.create({ client, table })
            OrderItems.map(item=>{
                Order_Item.create({ orderId: order.id, productId:item });
            })
        } catch (error) {
            throw error
        }
    }
}

module.exports = OrdersService;
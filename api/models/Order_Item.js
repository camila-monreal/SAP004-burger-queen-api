
const { Model, DataTypes } = require('sequelize');

class Order_Item extends Model {
    static init(sequelize) {
        super.init({
        }, {
            sequelize
        }
        )
    }
    static associate(models) {
        this.belongsTo(models.Product, {
            foreignKey: 'productId'
        })
        this.belongsTo(models.Order, {
            foreignKey: 'orderId'
        })
    };

}

module.exports = Order_Item;
const { Model, DataTypes } = require('sequelize');

class Order extends Model {
    static init(sequelize) {
        super.init({
            client: DataTypes.STRING,
            table: DataTypes.DECIMAL(10, 2),
            items: DataTypes.VIRTUAL
        }, {
            sequelize
        }
        )
    }
    static associate(models) {
        this.hasMany(models.Order_Item, {
            foreignKey: 'orderId'
        })
    }
}


module.exports = Order;
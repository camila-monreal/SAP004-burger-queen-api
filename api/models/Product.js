const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
        }, {
            sequelize
        }
        )
    }
}

module.exports = Product;
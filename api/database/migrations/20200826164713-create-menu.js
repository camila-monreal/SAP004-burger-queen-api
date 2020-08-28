'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        type: Sequelize.DATE, 
        allowNull: false,
      }, 
      updatedAt: {
        type: Sequelize.DATE ,
        allowNull:false ,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};

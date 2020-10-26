'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('quantifications', { 
        
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'products', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        quantity: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },

        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }

     }); 
  },

  down: async (queryInterface) => {
     await queryInterface.dropTable('quantifications');
  }
};

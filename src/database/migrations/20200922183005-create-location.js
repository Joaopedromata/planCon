'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('locations', { 
        
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        city: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },

        cell_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'signups', key: 'id'},
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
     await queryInterface.dropTable('locations');
  }
};
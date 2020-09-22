'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('signups', { 
        
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        identifier: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true
        },

        permission_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // references: { model: 'permissions', key: 'id'},
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE'
        },

        location_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // references: { model: 'locations', key: 'id'},
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE'
        },

        password: {
          type: Sequelize.STRING,
          allowNull: false,
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
     await queryInterface.dropTable('signups');
  }
};
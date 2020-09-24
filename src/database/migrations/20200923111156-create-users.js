'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('users', { 
        
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

        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        permission_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'permissions', key: 'id'},
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
     await queryInterface.dropTable('users');
  }
};

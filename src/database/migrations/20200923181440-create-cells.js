'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('cells', { 
        
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        location_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'locations', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        quantification_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'quantifications', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        number: {
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
     await queryInterface.dropTable('cells');
  }
};

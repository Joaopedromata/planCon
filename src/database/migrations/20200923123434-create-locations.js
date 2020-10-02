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

        city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'cities', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
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

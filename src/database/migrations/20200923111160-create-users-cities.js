'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('users_cities', { 
        
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },

        city_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'cities', key: 'id'},
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
     await queryInterface.dropTable('users_cities');
  }
};

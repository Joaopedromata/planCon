'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plancons', { 
        
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

      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'locations', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      cell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cells', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('plancons');
  }
};

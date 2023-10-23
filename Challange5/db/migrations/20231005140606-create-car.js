"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()"),
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM("small", "medium", "large"),
      },
      image: {
        type: Sequelize.STRING,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
      rentPerDay: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      availableAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"), 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"), 
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cars");
  },
};

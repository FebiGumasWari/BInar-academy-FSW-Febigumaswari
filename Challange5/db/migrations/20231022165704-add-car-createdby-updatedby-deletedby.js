"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Cars", "createdBy", {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: "34c283eb-df65-4934-b721-881820c7800d",
      references: {
        model: "Users",
        key: "id",
      },
    });
    await queryInterface.addColumn("Cars", "updatedBy", {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    });
    await queryInterface.addColumn("Cars", "deletedBy", {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Cars", "createdBy", "updatedBy","deletedBy");
  },
};

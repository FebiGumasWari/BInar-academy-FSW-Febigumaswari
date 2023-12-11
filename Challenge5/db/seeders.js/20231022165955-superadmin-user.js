"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        name: "Febi gumas Superadmin",
        email: "superadmin@gmail.com",
        encryptedPassword: bcrypt.hashSync('superadmin123', 10),
        address: "Bekasi",
        phoneNumber: "1234567890",
        role: "SUPERADMIN",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Users', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

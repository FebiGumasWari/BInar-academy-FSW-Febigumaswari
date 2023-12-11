'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
        name: 'Mobil Kecil 1',
        type: 'small',
        image: 'gambar1.jpg',
        capacity: 4,
        rentPerDay: 50.00,
        description: 'Deskripsi mobil kecil 1',
        availableAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobil Sedang 1',
        type: 'medium',
        image: 'gambar2.jpg',
        capacity: 5,
        rentPerDay: 75.00,
        description: 'Deskripsi mobil sedang 1',
        availableAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobil Besar 1',
        type: 'large',
        image: 'gambar3.jpg',
        capacity: 7,
        rentPerDay: 100.00,
        description: 'Deskripsi mobil besar 1',
        availableAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [
      {
        name: 'Diego',
        lastName: 'Flores',
        email: 'diego@gmail.com',
        id: 1,
        password: '123456',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Alejandra',
        lastName: 'Calizaya',
        email: 'alecal@gmail.com',
        id: 2,
        password: '123456',
        createdAt: new Date(), updatedAt: new Date(),
      }, {
        name: 'Rosario',
        lastName: 'Fuentes',
        email: 'rosyfuente@gmail.com',
        id: 3,
        password: '123456',
        createdAt: new Date(), updatedAt: new Date(),
      }]
    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

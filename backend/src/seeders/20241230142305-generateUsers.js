'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        first_name: 'Lauri',
        last_name: 'Hallitsija',
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Elina',
        last_name: 'Viljelijä',
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Oskari',
        last_name: 'Vieraileva',
        role_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};

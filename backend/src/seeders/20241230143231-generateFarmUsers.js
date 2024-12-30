'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('FarmUser', [
      {
        user_id: 1,
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 2,
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 3,
        farm_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('FarmUser', null, {});
  }
};

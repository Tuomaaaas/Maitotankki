'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Farm', [
      {
        name: 'Saarenranta Tila',
        uuid: 'f8b2e7e0-9c3b-4d29-8a1b-939a42b40a3b',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Metsäpolku Tila',
        uuid: 'd3b7f13d-bb19-4c96-a2b9-3b44d2b6d06e',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Kivimäki Tila',
        uuid: '75c3f1d3-89cd-4c1a-b798-7a3c7c741ee6',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Farm', null, {});
  }
};

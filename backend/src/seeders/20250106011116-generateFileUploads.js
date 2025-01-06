'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('file_uploads', [
      {
        file_uuid: 'e1b20437-f19d-42f6-8305-5791dd61397a',
        file_path: 'TEST PATH',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        file_uuid: '71795386-b2d2-4367-84c3-3db14081f699',
        file_path: 'TEST PATH',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        file_uuid: '68ab8e1c-e5ef-4e44-8927-9689c677dca3',
        file_path: 'TEST PATH',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('file_uploads', null, {});
  }
};

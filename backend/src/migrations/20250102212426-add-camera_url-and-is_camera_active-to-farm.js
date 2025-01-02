'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('farms', 'camera_url', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('farms', 'is_camera_active', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('farms', 'camera_url');
    await queryInterface.removeColumn('farms', 'is_camera_active');
  }
};

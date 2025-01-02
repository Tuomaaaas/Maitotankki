'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rekognitions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      rekognition_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true
      },
      file_upload_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'file_uploads',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      farm_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'farms',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      result: {
        type: Sequelize.JSON,
        allowNull: false
      },
      temperature: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      flagged: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rekognitions');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rekognitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rekognitions');
  }
};
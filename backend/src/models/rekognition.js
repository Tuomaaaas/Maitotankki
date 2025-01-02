'use strict';
import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Rekognition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rekognition.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rekognition_uuid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    file_upload_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FileUploads',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    farm_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Farms',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    result: {
      type: DataTypes.JSON,
      allowNull: false
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    flagged: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Rekognition',
    tableName: 'rekognitions',
    underscored: true
  });

  return Rekognition;
};
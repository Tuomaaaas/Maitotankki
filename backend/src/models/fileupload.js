'use strict';
import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class FileUpload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FileUpload.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    file_uuid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'FileUpload',
    tableName: 'file_uploads',
    underscored: true
  });

  return FileUpload;
};
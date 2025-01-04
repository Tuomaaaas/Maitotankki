'use strict';
import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Farm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Farm.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    uuid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    camera_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_camera_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Farm',
    tableName: 'farms',
    underscored: true,
    timestamps: true
  });

  return Farm;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Computer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Computer.init({
    motherboard: DataTypes.STRING,
    processor: DataTypes.STRING,
    memory: DataTypes.INTEGER,
    harddisk: DataTypes.INTEGER,
    os: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Computer',
  });
  return Computer;
};
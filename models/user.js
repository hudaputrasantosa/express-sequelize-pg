"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      nik: DataTypes.STRING,
      department_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.associate = function (models) {
    User.hasOne(models.Computer, {
      foreignKey: "user_id",
      as: "computer",
    });

    User.belongsTo(models.Department, {
      foreignKey: "department_id",
      as: "department",
    });
  };

  return User;
};

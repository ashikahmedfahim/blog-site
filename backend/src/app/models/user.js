const sequelize = require("../../config/config").sequelize;
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      minLength: 8,
    },
  },
  {
    tableName: "users",
    schema: "general",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = User;

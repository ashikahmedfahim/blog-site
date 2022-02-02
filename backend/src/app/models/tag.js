const sequelize = require("../../config/config").sequelize;
const { Sequelize, DataTypes } = require("sequelize");

const Tag = sequelize.define(
  "Tag",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "tags",
    schema: "general",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Tag;

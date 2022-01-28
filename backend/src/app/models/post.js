const sequelize = require("../../config/config").sequelize;
const { Sequelize, DataTypes } = require("sequelize");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    schema: "general",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Post;

const sequelize = require("../../config/config").sequelize;
const User = require("./user");
const Post = require("./post");
const Tag = require("./tag");

User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });
Post.belongsToMany(Tag, { through: "post_tag", foreignKey: "post_id" });
Tag.belongsToMany(Post, { through: "post_tag", foreignKey: "tag_id" });

sequelize.sync();

module.exports = { User, Post, Tag };

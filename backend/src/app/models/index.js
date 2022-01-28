const User = require("./users");
const Post = require("./posts");

module.exports = { User, Post };

User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });


// User.sync({ alter: true });
// Post.sync({ alter: true });

const { Sequelize } = require("sequelize");
require("dotenv").config();

const database = process.env.DATABASE;
const username = process.env.USER;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

module.exports.connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports.sequelize = sequelize;

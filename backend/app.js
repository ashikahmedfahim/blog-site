const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const config = require("./src/config/config");
const models = require("./src/app/models");

const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

config.connectToDatabase();

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const config = require("./src/config/config");
const { User, Auth } = require("./src/app/routes");
const { ExpressError, ModelService } = require("./src/app/utilities");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
config.connectToDatabase();

app.use("/users", User);
app.use("/login", Auth);

app.use("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  ModelService.errorResponse(res, statusCode, message);
});

const { PublicController } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();

router.get("/", CatchAsync(PublicController.Auth.login));

module.exports = router;

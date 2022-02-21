const { PublicController } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();

router.post("/", CatchAsync(PublicController.Auth.login));

module.exports = router;

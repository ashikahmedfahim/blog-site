const { Auth } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();

router.get("/", CatchAsync(Auth.login));

module.exports = router;

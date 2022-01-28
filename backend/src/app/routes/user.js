const { User } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();

router.get("/", CatchAsync(User.getAll));
router.get("/:id", CatchAsync(User.getOne));
router.post("/", CatchAsync(User.createOne));
router.put("/:id", CatchAsync(User.updateOne));
router.delete("/:id", CatchAsync(User.deleteOne));

module.exports = router;

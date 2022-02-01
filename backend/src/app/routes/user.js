const { PublicController } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();

router.get("/", CatchAsync(PublicController.User.getAll));
router.get("/:id", CatchAsync(PublicController.User.getOne));
router.post("/", CatchAsync(PublicController.User.createOne));
router.put("/:id", CatchAsync(PublicController.User.updateOne));
router.delete("/:id", CatchAsync(PublicController.User.deleteOne));

module.exports = router;

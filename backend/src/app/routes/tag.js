const { PublicController } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();

router.get("/", CatchAsync(PublicController.Tag.getAll));
router.get("/:id", CatchAsync(PublicController.Tag.getOne));
router.post("/", CatchAsync(PublicController.Tag.createOne));
router.put("/:id", CatchAsync(PublicController.Tag.updateOne));
router.delete("/:id", CatchAsync(PublicController.Tag.deleteOne));

module.exports = router;

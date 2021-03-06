const { PublicController } = require("../controllers");
const { CatchAsync } = require("../utilities");
const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authentication");

router.get("/", CatchAsync(PublicController.Post.getAll));
router.get("/:id", CatchAsync(PublicController.Post.getOne));
router.post("/", isAuthenticated, CatchAsync(PublicController.Post.createOne));
router.put("/:id", CatchAsync(PublicController.Post.updateOne));
router.delete("/:id", CatchAsync(PublicController.Post.deleteOne));

module.exports = router;

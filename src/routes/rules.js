const express = require("express");
const router = express.Router();

const topicController = require("../controllers/ruleController")

router.get("/rules", topicController.index);

module.exports = router;
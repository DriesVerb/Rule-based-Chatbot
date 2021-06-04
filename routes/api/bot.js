const express = require(`express`);
const router = express.Router();

const botController = require("../../controllers/botController");

router.post("/", botController.botInput);
router.get("/", botController.botInto);
router.get("/:id/:id2?", botController.botReply);

module.exports = router;

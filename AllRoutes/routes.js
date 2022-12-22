const express = require("express");
const { getQuestion } = require("../Controllers/quizController");

const router = express.Router();

router.get("/questions",getQuestion);

module.exports = router;
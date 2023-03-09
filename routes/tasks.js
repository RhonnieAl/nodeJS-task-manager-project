const express = require("express");
const router = express.Router();

// import controllers
const { getTasks } = require("../controllers/task");

// Setup router
router.get("/", getTasks);

module.exports = router;

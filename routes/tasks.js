const express = require("express");
const router = express.Router();

// import controllers
const {
  getAllTasks,
  createTasks,
  retrieveTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks");

// Setup router
router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(retrieveTasks).patch(updateTasks).delete(deleteTasks);

module.exports = router;

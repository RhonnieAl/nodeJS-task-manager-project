// import mongoose model
const Task = require("../models/task");

// Set up request handler functionality
const getAllTasks = (req, res) => {
  res.send("Here are all your Tasks");
};

// Models returns a promise so we await the response
// Add try-catch block
const createTasks = async (req, res) => {
  console.log("Server has been Pinged");
  try {
    // We have access to data in req.body, so we pipe it to DB through model (Task)
    const task = await Task.create(req.body);
    // Send back (res) the creates task as a json object
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const retrieveTasks = (req, res) => {
  res.json({ passedID: req.params.id });
};
const updateTasks = (req, res) => {
  res.send("Task Updated");
};
const deleteTasks = (req, res) => {
  res.send("Task Deleted");
};

module.exports = {
  getAllTasks,
  createTasks,
  retrieveTasks,
  updateTasks,
  deleteTasks,
};

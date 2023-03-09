// import data (tasks)
//const data = require('')

// Set up request handler functionality
const getAllTasks = (req, res) => {
  res.send("Here are all your Tasks");
};
const createTasks = (req, res) => {
  console.log("Server has been Pinged");
  res.json(req.body);
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

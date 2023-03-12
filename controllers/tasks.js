// import mongoose model
const Task = require("../models/task");

// Models return a mongoose implementation of a promise, so we can use async-await
// Add try-catch block

// Set up request handler functionality
const getAllTasks = async (req, res) => {
  try {
    // To get all items, we use mongoose helper fuction .find()
    // Empty objects retrieves all documents in the collection
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

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

const retrieveTasks = async (req, res) => {
  try {
    // To find specific item, we use mongoose helper fuction .findOne()
    const foundItem = await Task.findOne({ _id: req.params.id });

    // Mongoose findOne() returns null for missing IDs, therefore...
    // if id is null then...
    if (!foundItem) {
      return res
        .status(404)
        .json({ msg: `No Task with ID: ${req.params.id} was found` });
    }
    res.status(200).json({ foundItem });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// We will use the .findOneAndUpdate(ItemToFilter, update) mongoose helper function
const updateTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const filterTasks = { _id: taskID };
    // {new:true} returns the updated taks instead of the old one
    // {runValidators: true} returns error if you pass an empty string
    const task = await Task.findOneAndUpdate(filterTasks, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `No Task with ID: ${filterTasks} was found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// We will use the .findOneAndDelete() mongoose helper function
const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No Task with ID: ${req.params.id} was found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  retrieveTasks,
  updateTasks,
  deleteTasks,
};

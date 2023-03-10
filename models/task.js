const mongoose = require("mongoose");

// Set up structure of the documents in the DB collection
// For this task-manager-project, name(string) & completed property(bool)
const taskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

// export the mongoose model (accepts name and schema)
module.exports = mongoose.model("Task", taskSchema);

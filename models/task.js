const mongoose = require("mongoose");

// Set up structure of the documents in the DB collection
// For this task-manager-project, name(string) & completed property(bool)
const taskSchema = new mongoose.Schema({
  // Basic data validation
  name: {
    type: String,
    required: [true, "Please add a name for the task"],
    trim: true,
    maxlength: [30, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// export the mongoose model (accepts name and schema)
module.exports = mongoose.model("Task", taskSchema);

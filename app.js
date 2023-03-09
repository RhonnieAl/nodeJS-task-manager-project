const express = require("express");
const getTasks = require("./controllers/tasks");
const app = express();

// Set the port server will listen to
const port = 3100;
// Import router
const taskRouter = require("./routes/tasks");
// Import all controllers
//const { getTasks } = require("./controllers/task");

/* Middleware */

// Serve static assets (frontend) using express middleware
app.use(express.static("./public"));

// Handle json data in req.body using express middleware
app.use(express.json());

// Set up the endpoints
app.use("/api/v1/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server listening on Port:${port} ...`);
});

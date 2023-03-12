const express = require("express");
const getTasks = require("./controllers/tasks");
const app = express();

// import DB connection function
const connectDB = require("./db/connect");

// import dotenv package to use variable names (keys) from the .env file
// This package loads environment variables from a .env file into process.env
require("dotenv").config();

const notFound = require("./middleware/not-found");

// Set the port server will listen to
const port = 3100;
// Import router
const taskRouter = require("./routes/tasks");
// Import all controllers

/* Middleware */

// Serve static assets (frontend) using express middleware
app.use(express.static("./public"));

// Handle json data in req.body using express middleware
app.use(express.json());

// Set up the endpoints
app.use("/api/v1/tasks", taskRouter);

// Middleware: server 404 Not Found error
app.use(notFound);

// create function "start" to initiate DB connection and kickstart server
// Insert DB connection string as an arg form .env file
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on Port:${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

// Call func
start();

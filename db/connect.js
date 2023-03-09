// Import mongoose and connect app to MongoDB
const mongoose = require("mongoose");

// Temporarily plcaed the connection string and password in a separate file and .gitignored it.
const connectionString = require("./connection-string");

// Returns a promise, so we .then().catch()
// to remove the 15 hundred deprecation warnings from mongoose V6 and under, add the {use... key value pairs}
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("YAY! Connection to DB was successful");
  })
  .catch((error) => {
    console.log(error);
  });

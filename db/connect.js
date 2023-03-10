// Import mongoose and connect app to MongoDB
const mongoose = require("mongoose");

// DB connection function (promise), to be run in app.js
// So as to start server only after successful DB connection and not the other way round.
const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log("YAY! Connection to DB was successful");
};

module.exports = connectDB;

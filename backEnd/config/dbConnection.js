const mongoose = require("mongoose");
const JobModel = require('../models/jobModel')
const JobSeekerModel = require('../models/jobSeekerModel')

function mongoDBConnection() {
  mongoose
    .connect("mongodb://localhost:27017/InsiderJobs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully without any hassle");
    
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

module.exports = mongoDBConnection;

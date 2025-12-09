const mongoose = require('mongoose');
const JobSeekerSchema = require('../schema/jobSeeker');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/InsiderJobs');
    console.log('✅ MongoDB Connected');

    // Register models AFTER connection
    mongoose.model('jobseekers', JobSeekerSchema);
    

  } catch (error) {
    console.error('❌ MongoDB connection failed', error);
    process.exit(1);
  }
};
module.exports = connectDB;

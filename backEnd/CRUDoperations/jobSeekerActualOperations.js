const JobSeekerModel = require("../models/jobSeekerModel");
const bcrypt = require("bcryptjs");

const createJobSeeker = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.profilePassword, 10);

    const jobSeeker = new JobSeekerModel({
      ...data,
      profilePassword: hashedPassword,
    });

    const savedJobSeeker = await jobSeeker.save();
    return savedJobSeeker;

  } catch (err) {
    if (err.code === 11000) {
      // console.log("EMAIL ALREADY EXISTES AND THE CODE IS === " +err.code)
      
      const error = new Error('Email already exists');
      error.statusCode = 409
      throw error;
    }else{
      throw err;
    }
    
  }
};

const retrieveJobSeeker = async () => {};

const updateJobSeeker = async () => {};

const deleteJobSeeker = async () => {};

module.exports = {
  createJobSeeker,
  retrieveJobSeeker,
  updateJobSeeker,
  deleteJobSeeker,
};

const jobModel = require("../models/jobModel");

const createJob = async (data) => {
  try {
    
    const newJob = new jobModel(data);
    const savedJob = await newJob.save();
    return savedJob
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error posting job',
      error: err.message,
    });
  }
};
const updateJob = async () => {};
const findJob = async () => {};
const deleteJob = async () => {};

module.exports = { createJob };

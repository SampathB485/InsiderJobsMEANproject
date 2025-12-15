const JobSeekerModel = require("../models/jobSeekerModel");
const bcrypt = require("bcryptjs");

const createJobSeeker = async (data) => {
  const hashedPassword = await bcrypt.hash(data.profilePassword, 10);

  const jobSeeker = new JobSeekerModel({
    ...data,
    profilePassword: hashedPassword,
  });

  const savedJobSeeker = await jobSeeker.save();
  return savedJobSeeker;
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

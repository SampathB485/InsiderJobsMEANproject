const mongoose = require('mongoose');
const JobSeekerSchema = require('../schema/jobSeeker');

const JobSeekerModel =mongoose.model('jobseekers', JobSeekerSchema);

module.exports = JobSeekerModel;

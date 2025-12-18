const mongoose = require('mongoose');
const JobSchema = require('../schema/job');

const JobModel  = mongoose.model('jobs', JobSchema);

module.exports = JobModel;
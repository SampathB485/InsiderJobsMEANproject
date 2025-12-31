const mongoose = require('mongoose');
const recruiterTypeSchema = require('../schema/Recruiter');

const recruiterTypeModel  = mongoose.model('Recruiters', recruiterTypeSchema);

module.exports = recruiterTypeModel;
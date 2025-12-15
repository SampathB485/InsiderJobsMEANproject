const mongoose = require('mongoose');
const JobSeekerSchema = require('../schema/jobSeeker');

mongoose.connect('mongodb://localhost:27017/InsiderJobs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully without any hassle');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

const JobSeekerModel = mongoose.model('jobseekers', JobSeekerSchema);

module.exports = JobSeekerModel;

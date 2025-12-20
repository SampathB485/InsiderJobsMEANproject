const mongoose = require('mongoose');
const userTypeSchema = require('../schema/userType');

const userTypeModel  = mongoose.model('userTypes', userTypeSchema);

module.exports = userTypeModel;
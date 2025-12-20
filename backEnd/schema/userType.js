const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    profilePassword: {
      type: String,
      required: true,
      minlength: 6,
      match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{6,}$/
    },
    userType:{
      type:String,
      required:true,
      enum: ['jobseeker', 'recruiter']
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

/* Export Model */
module.exports = userTypeSchema;

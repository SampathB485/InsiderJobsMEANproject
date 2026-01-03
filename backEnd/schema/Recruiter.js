const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      match: /^[A-Za-z]+$/
    },

    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      match: /^[A-Za-z]+$/
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    mobileNo: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/
    },

    recruitingFor: {
      type: String,
      required: [true, 'Recruiting For field is required'],
      trim: true,
      match: [/^[A-Za-z\s]+$/, 'Recruiting For must contain only characters']
    }
  },
  {
    timestamps: true
  }
);

module.exports = recruiterSchema;

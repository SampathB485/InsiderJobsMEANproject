const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      match: [/^[A-Za-z]+$/, 'First name must contain only characters']
    },

    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      match: [/^[A-Za-z]+$/, 'Last name must contain only characters']
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },

    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      match: [/^\d{10}$/, 'Mobile number must be exactly 10 digits']
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

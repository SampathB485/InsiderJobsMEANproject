const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    /* Job Title */
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    /* Job Mode */
    jobMode: {
      type: String,
      required: true,
      enum: ['Remote', 'Hybrid', 'Work from Home'],
    },

    /* Job Description */
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },

    /* Experience */
    experience: {
      type: Number,
      required: true,
      
    },

    /* Salary Range */
    salaryRange: {
      minimum: {
        type: Number,
        required: true,
      },
      maximum: {
        type: Number,
        required: true,
      },
    },

    /* Skills */
    skills: {
      type: [String],
      default: [],
    },

    /* Locations */
    locations: {
      type: [String],
      required: true,
    },

    /* Number of Openings */
    openings: {
      type: Number,
      default: 1,
      min: 1,
    },

    /* Applicants Count */
    applicants: {
      type: Number,
      default: 0,
    },

    /* Employer Name */
    employer: {
      type: String,
      // required: true,
      trim: true,
    },

    /* Posted Info */
    posted: {
      postedOn: {
        type: Date,
        default: Date.now, // system date
      },
      validUntil: {
        type: Date,
        required: true,
      },
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

/* Export Model */
module.exports = jobSchema;

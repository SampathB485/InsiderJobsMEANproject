const mongoose = require('mongoose');

/* ----------------------------------
   Reusable Sub Schemas
   const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    originalFileName: {
      type: String,
      required: true
    },

    storedFileName: {
      type: String,
      required: true
    },

    fileType: {
      type: String,
      enum: ['pdf', 'doc', 'docx'],
      required: true
    },

    fileSize: {
      type: Number, // in bytes
      required: true
    },

    filePath: {
      type: String,
      required: true
    },

    uploadedAt: {
      type: Date,
      default: Date.now
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);
-----------------------------------*/

// Education sub-schema
const educationSchema = new mongoose.Schema({
  institutionName: {
    type: String,
    required: true,
    trim: true
  },
  courseDuration: {
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date,
      required: true
    }
  },
  percentageAcquired: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  }
}, { _id: false });

// Project sub-schema
const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
    trim: true
  },
  projectStatus: {
    type: String,
    enum: ['Inprogress', 'Finished'],
    required: true
  },
  detailsOfProject: {
    type: String,
    required: true
  },
  techUsed: {
    type: [String],
    required: true
  },
  projectLocation: {
    type: String,
    required: true
  }
}, { _id: false });

/* ----------------------------------
   Main User Schema
-----------------------------------*/

const JobSeekerSchema = new mongoose.Schema(
  {
    // userType:{
    //   type:String,
    //   required:true,
    //   enum: ['jobseeker', 'recruiter']
    // },
    
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

    resume: {
      fileName: String,
      fileType: {
        type: String,
        enum: ['pdf', 'doc', 'docx']
      },
      filePath: String
    },

    keySkills: {
      type: [String],
      default: []
    },

    educationDetails: {
      school: educationSchema,
      diplomaOrPlus12: educationSchema,
      underGrad: educationSchema,
      postGrad: educationSchema,
      phd: educationSchema
    },

    profileSummary: {
      type: String,
      maxlength: 1000
    },

    projects: {
      type: [projectSchema],
      default: []
    },

    appliedJobs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Job',
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = JobSeekerSchema;

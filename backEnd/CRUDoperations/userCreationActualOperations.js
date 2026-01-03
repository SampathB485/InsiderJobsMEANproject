const JobSeekerModel = require("../models/jobSeekerModel");
const RecruiterModel = require("../models/RecruiterModel");
const UserTypeModel = require("../models/userTypeModel");
const bcrypt = require("bcryptjs");

const createJobSeeker = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.profilePassword, 10);

    const userType = await new UserTypeModel({
      email: data.email,
      profilePassword: hashedPassword,
      userType: data.userType

    }).save();
    console.log(" job seeker this is the output after appending the data inside userType "+ userType);

    const jobSeeker = new JobSeekerModel({ ...data });

    const savedJobSeeker = await jobSeeker.save();
    return savedJobSeeker;

  } catch (err) {
    if (err.code === 11000) {
      // console.log("EMAIL ALREADY EXISTES AND THE CODE IS === " +err.code)
      
      const error = new Error('Email already exists for job seeker');
      error.statusCode = 409
      throw error;
    }else{
      throw err;
    }
    
  }
};

const createRecruiter = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.profilePassword, 10);



    const userType = await new UserTypeModel({
      email: data.email,
      profilePassword: hashedPassword,
      userType: data.userType

    }).save();

        console.log("following is data............"+data);

    


    // console.log(" recr this is the output after appending the data inside userType "+ userType);

    const recruiter = new RecruiterModel({ ...data });
        

    return await recruiter.save();

  } catch (err) {
    if (err.code === 11000) {
      const error = new Error('Email already exists for recruiter');
      error.statusCode = 409;
      throw error;
    }
    throw err;
  }
};

const retrieveJobSeeker = async () => {};

const updateJobSeeker = async () => {};

const deleteJobSeeker = async () => {};

module.exports = {
  createJobSeeker, createRecruiter,
  retrieveJobSeeker,
  updateJobSeeker,
  deleteJobSeeker,
};

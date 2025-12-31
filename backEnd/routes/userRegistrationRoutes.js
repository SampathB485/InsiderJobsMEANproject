const express = require("express");
const router = express.Router();
const userCreationActualOperations = require("../CRUDoperations/userCreationActualOperations");
// const JobSeekerModel = require("../models/jobSeekerModel");


// const dummyJobSeeker = {
//   firstName: "Sampathboss",
//   lastName: "Bf",
//   email: 'sampathb.test@gmail.com',
//   profilePassword: 'Password@123',
//   mobileNo: '9876543210',
// };
router.post("/", async (req, res) => {
  try {
    const { userType } = req.body;

    let result;

    if (userType === 'jobseeker') {
      result = await userCreationActualOperations.createJobSeeker(req.body);
    } 
    else if (userType === 'recruiter') {
      result = await recruiterRegFunctions.createRecruiter(req.body);
    } 
    else {
      return res.status(400).json({ message: "Invalid user type" });
    }

    res.status(201).json({
      message: "User registered successfully",
      data: result,
    });

  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message || "Server error while creating user",
    });
  }
});


module.exports = router;

const express = require("express");
const router = express.Router();
const jobSeekerRegFunctions = require("../CRUDoperations/jobSeekerActualOperations");
const JobSeekerModel = require("../models/jobSeekerModel");

// const dummyJobSeeker = {
//   firstName: "Sampathboss",
//   lastName: "Bf",
//   email: 'sampathb.test@gmail.com',
//   profilePassword: 'Password@123',
//   mobileNo: '9876543210',
// };
router.post("/",   async(req, res) => {
  // console.log("THIS IS INSIDE THE BACKEND POST ROUTE")
  // res.send();
  try {
    console.log("this is request"+ req.body)
    const result = await jobSeekerRegFunctions.createJobSeeker(req.body);
    res.status(201).json({
      message: 'Job seeker inserted successfully',
      data: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

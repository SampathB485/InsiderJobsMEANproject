const express = require("express");
const router = express.Router();
const JobPostFuntions = require("../CRUDoperations/jobActualOperations");
// const jobModel = require('../models/jobModel');

// This is used to call the functions from the jobActual operations file
//here is the proble inside the data result
// const dataresult = {
//       jobTitle: "ASFD",
//       //later here insert the data for the employer
//       jobMode: "Remote",
//       jobDescription: "dfssdf",
//       experience: 4,
//       salaryRange: {
//         minimum: 500000,
//         maximum: 800000,
//       }
//       // skills: ["angsd"],
//       // locations: ["Delhi"]
//       // posted: {
//       //   validUntil: "2026-01-18T15:43:49.514Z"
//       // },
//     };

router.post("/", async (req, res) => {
  try {
    // console.log("this is request" + req.body);
    const data = {
      ...req.body,
      recruiter: req.user.userId,
    };
    const result = await JobPostFuntions.createJob(data);

    res.status(201).json({
      message: "Job inserted successfully",
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

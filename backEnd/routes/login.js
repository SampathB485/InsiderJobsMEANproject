const express = require("express");
const router = express.Router();
const UserTypeModel = require("../models/userTypeModel");
const JobSeekerModel = require("../models/jobSeekerModel");
const RecruiterModel = require("../models/RecruiterModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  // this is /login
  try {
    const { email, password } = req.body;

    const user = await UserTypeModel.findOne({ email });
    // console.log("THIS IS WHAT YOU ARE CHECKING FOR----"+ req.body.email)

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.profilePassword);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    if (user.userType === "jobseeker") {
      const js = await JobSeekerModel.findOne({ email }, { firstName: 1, _id: 0 } );
      user.firstName = js?.firstName || null;
    } else if (user.userType === "recruiter") {
      const rec = await RecruiterModel.findOne( { email },{ firstName: 1, _id: 0 });
      user.firstName = rec?.firstName || null;
    }

    // Generate token
    const token = jwt.sign(
      {
        userId: user._id,
        userType: user.userType,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      //anoTHER PROBLEM IS HERE.. WE ARE NOT SENDING USER NAME FROM BACKEND TO FRONTEND.. THAT IS WHY IT IS UNDEFINED.. FIX IT..
      token,
      userType: user.userType,
      username: user.firstName,
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;

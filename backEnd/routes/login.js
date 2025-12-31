const express = require("express");
const router = express.Router();
const jobSeekerModel = require('../models/jobSeekerModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


router.post("/", async (req, res) => { // this is /login
  try {
    const { email, password } = req.body;

   
    
    const user = await jobSeekerModel.findOne({ email });
    console.log("this is the user data"+ password);
    
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }
  
    const isMatch = await bcrypt.compare(password, user.profilePassword);
   
   
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
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
      token,
      userType: user.userType,
      username: user.firstName,
    });

  } catch (err) {
    console.log("this is the logged error--------------"+ err);
    res.status(500).json({ message: "Login failed" });
  }
});



module.exports = router;

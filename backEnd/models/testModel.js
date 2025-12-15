// const express = require('express');
const mongoose = require('mongoose');


// ------------------- MongoDB Connection -------------------
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected successfullyyyyyyy');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// ------------------- Schema & Model -------------------
const userSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel
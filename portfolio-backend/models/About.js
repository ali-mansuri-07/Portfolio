const mongoose = require('mongoose');
const ExperienceSchema = require('./Experience.js')

const AboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  home_heading: {
    type: String,
    required: true,
  },
  
  profilePhotoUrl: {
    type: String,
    required: true,
  },
  aboutText: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  githubUrl:{
    type: String,
  },
  linkedInUrl:{
    type: String,
  },
  instagramUrl:{
    type: String,
  },
  twitterUrl : {
    type: String
  },
  experiences: [ExperienceSchema], 

});



module.exports = mongoose.model('About', AboutSchema);

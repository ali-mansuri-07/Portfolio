const About = require('../models/About');
const mongoose = require('mongoose');
const { formatDate } = require('../utils/dateUtils'); 

// Get About Me data
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne(); // Assuming only one About Me entry
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create About Me data
exports.createAbout = async (req, res) => {
    const { name, profilePhotoUrl, aboutText, resumeUrl, githubUrl, linkedInUrl, instagramUrl, twitterUrl } = req.body;
  
    try {
      // Check if About Me entry already exists
      const existingAbout = await About.findOne();
      if (existingAbout) {
        return res.status(400).json({ message: 'About Me entry already exists' });
      }
  
      const newAbout = new About({
        name,
        home_heading,
        profilePhotoUrl,
        aboutText,
        resumeUrl,
        githubUrl, 
        linkedInUrl, 
        instagramUrl, 
        twitterUrl
      });
  
      await newAbout.save();
      res.status(201).json(newAbout);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };

// Update About Me data
exports.updateAbout = async (req, res) => {
    const { name, home_heading, profilePhotoUrl, aboutText, resumeUrl, githubUrl, linkedInUrl, instagramUrl, twitterUrl } = req.body;

  try {
    const about = await About.findOne(); // Assuming only one About Me entry

    if (!about) {
      return res.status(404).json({ message: 'About Me data not found' });
    }

    about.name = name || about.name;
    about.home_heading = home_heading || about.home_heading;
    about.profilePhotoUrl = profilePhotoUrl || about.profilePhotoUrl;
    about.aboutText = aboutText || about.aboutText;
    about.resumeUrl = resumeUrl || about.resumeUrl;
    about.githubUrl = githubUrl || about.githubUrl;
    about.linkedInUrl = linkedInUrl || about.linkedInUrl;
    about.instagramUrl = instagramUrl || about.instagramUrl;
    about.twitterUrl = twitterUrl || about.twitterUrl;

    await about.save();

    res.json(about);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }

};


// Add a new experience to the about section
exports.addExperience = async (req, res) => {
  const { company, designation, fromDate, toDate, isCurrent, description } = req.body;

  try {
    const aboutData = await About.findOne();
    if (!aboutData) {
      return res.status(404).json({ message: 'About section not found' });
    }

    aboutData.experiences.push({
      company,
      designation,
      fromDate: formatDate(new Date(fromDate)), // Format date
      toDate: isCurrent ? null : formatDate(new Date(toDate)), // Format date
      isCurrent,
      description,
    });

    await aboutData.save();
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all experiences
exports.getAllExperiences = async (req, res) => {
  try {
    const about = await About.findOne(); // Assuming only one About Me entry
    if (!about || !about.experiences) {
      return res.status(404).json({ message: 'No experiences found' });
    }
    res.json(about.experiences);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an experience
exports.updateExperience = async (req, res) => {
  const { expId } = req.params;
  const { company, designation, fromDate, toDate, isCurrent, description } = req.body;

  try {
    const aboutData = await About.findOne();
    if (!aboutData) {
      return res.status(404).json({ message: 'About section not found' });
    }

    const experience = aboutData.experiences.id(expId);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }


    experience.company = company;
    experience.designation = designation;
    experience.fromDate = formatDate(new Date(fromDate)); // Format date
    experience.toDate = isCurrent ? null : formatDate(new Date(toDate)); // Format date
    experience.isCurrent = isCurrent;
    experience.description = description;

    await aboutData.save();
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an experience
exports.deleteExperience = async (req, res) => {
  const { expId } = req.params;

  try {
    const aboutData = await About.findOne();
    if (!aboutData) {
      return res.status(404).json({ message: 'About section not found' });
    }

    aboutData.experiences = aboutData.experiences.filter((exp) => exp._id.toString() !== expId);

    await aboutData.save();
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


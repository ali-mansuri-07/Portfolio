const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route to get About Me data
router.get('/', aboutController.getAbout);

// Route to create About Me data
router.post('/', aboutController.createAbout);

// Route to update About Me data
router.put('/', aboutController.updateAbout);

router.get('/experiences', aboutController.getAllExperiences);

router.post('/experience', aboutController.addExperience);

router.put('/experience/:expId', aboutController.updateExperience);

router.delete('/experience/:expId', aboutController.deleteExperience);

module.exports = router;

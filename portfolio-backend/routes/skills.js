const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Route to get all skills
router.get('/', skillController.getAllSkills);

// Route to add a new skill
router.post('/', skillController.addSkill);

router.delete('/:id', skillController.deleteSkill);

module.exports = router;
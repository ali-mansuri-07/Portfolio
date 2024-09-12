const express = require('express');
const { submitContactForm, getAllContacts, deleteContact } = require('../controllers/contactController');

const router = express.Router();

// Route to handle contact form submission
router.post('/', submitContactForm);
router.get('/messages', getAllContacts);
router.delete('/:id', deleteContact);

module.exports = router;

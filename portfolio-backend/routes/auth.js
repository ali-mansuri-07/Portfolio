const express = require('express');
const { login, adminRoute } = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Login route
router.post('/login', login);

// Protected admin route
router.get('/admin', authMiddleware, adminRoute);

module.exports = router;
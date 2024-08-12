const express = require('express');
const router = express.Router();
const { getUserInfo, updateUserRequests } = require('../controllers/userController');

// Route to get user info
router.get('/user-info/:id', getUserInfo);

// Route to update user requests
router.post('/user-requests/:id', updateUserRequests);

module.exports = router;

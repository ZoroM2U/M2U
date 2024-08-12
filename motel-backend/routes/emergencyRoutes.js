const express = require('express');
const router = express.Router();
const emergencyController = require('../controllers/emergencyController');

router.post('/call-911', emergencyController.call911);
router.post('/call-front-desk', emergencyController.callFrontDesk);

module.exports = router;

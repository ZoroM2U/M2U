const express = require('express');
const router = express.Router();
const roomManagementController = require('../controllers/roomManagementController');

router.post('/requests', roomManagementController.addRequest);
router.get('/requests', roomManagementController.getRequests);

module.exports = router;

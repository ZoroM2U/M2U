const express = require('express');
const router = express.Router();
const motelInfoController = require('../controllers/motelInfoController');

router.get('/motel-info', motelInfoController.getMotelInfo);

module.exports = router;

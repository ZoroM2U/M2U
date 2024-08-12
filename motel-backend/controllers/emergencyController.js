const User = require('../models/ User');
exports.call911 = (req, res) => {
    // This would trigger a 911 call in a real application.
    console.log('Calling 911...');
    res.json({ message: '911 has been called' });
  };
  
  exports.callFrontDesk = (req, res) => {
    // This would trigger a call to the front desk in a real application.
    console.log('Calling the front desk...');
    res.json({ message: 'Front desk has been called' });
  };
  
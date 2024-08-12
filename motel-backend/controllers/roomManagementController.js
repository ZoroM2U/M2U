const User = require('../models/ User');
exports.addRequest = async (req, res) => {
  try {
    const { request } = req.body;
    const user = await User.findOne(); // Assuming a single user for now
    user.requests.push(request);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add request' });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const user = await User.findOne(); // Assuming a single user for now
    res.json(user.requests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
};

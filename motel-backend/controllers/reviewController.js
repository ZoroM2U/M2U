const User = require('../models/ User');

exports.submitReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const user = await User.findOne(); // Assuming a single user for now
    user.reviews.push({ rating, comment });
    await user.save();
    res.json(user.reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const user = await User.findOne(); // Assuming a single user for now
    res.json(user.reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

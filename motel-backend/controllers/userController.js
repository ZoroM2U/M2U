const User = require('../models/ User');

// Controller for getting user information
exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Assuming you fetch by user ID
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Controller for updating user requests
exports.updateUserRequests = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.requests.push(req.body.request);
        await user.save();
        res.json({ message: 'Request updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

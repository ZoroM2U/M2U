const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    rewardsAccount: { type: String, required: true },
    stayDates: { type: [Date], required: true },
    requests: [{ type: String }],
    reviews: [{ rating: Number, comment: String }]
});

module.exports = mongoose.model('User', UserSchema);

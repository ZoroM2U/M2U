// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample route to fetch room info
app.get('/api/room-info', (req, res) => {
  res.json({
    checkIn: '3 PM',
    checkOut: '11 AM',
    message: 'Please inform the front desk if you want late checkouts. Extra charges may apply.',
    frontDeskContact: '091',
    poolHours: '11:30 AM - 8:00 PM everyday',
    breakfastMenu: {
      Monday: 'Classic American Breakfast: Scrambled eggs, bacon, toast, hash browns, coffee, orange juice',
      Tuesday: 'Pancake Delight: Pancakes, strawberries, whipped cream, sausage, yogurt, coffee or tea',
      Wednesday: 'Bagel and Lox: Smoked salmon, cream cheese, bagel, capers, coffee or green tea',
      Thursday: 'Oatmeal and More: Oatmeal, banana slices, apple juice, coffee',
      Friday: 'Breakfast Burrito: Burrito with eggs, cheese, salsa, avocado, coffee or iced tea',
      Saturday: 'Southern Style Breakfast: Biscuits, gravy, fried chicken, sweet iced tea',
      Sunday: 'Continental Breakfast: Pastries, cheese, cold cuts, coffee, fresh fruit bowl'
    },
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./backend/routes/taskRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// Routes
app.use('/api/tasks', taskRoutes); // Handle task-related routes

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the process if unable to connect
  }
};

// Start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

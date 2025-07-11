//import required packages
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const urlRoutes = require('./routes/url');


dotenv.config(); // Load environment variables from .env file

const app = express(); // Initialize Express app
app.use(express.json());  // Enable JSON parsing in request body

//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo error:', err));

app.use('/', urlRoutes); //set up routes

//start the server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

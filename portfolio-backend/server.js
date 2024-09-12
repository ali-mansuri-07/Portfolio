const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require("dotenv");
const skillRoutes = require('./routes/skills');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');



const app = express();

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});
app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

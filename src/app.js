const express = require('express');
const apiController = require('./controllers/apiController');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// API routes
app.use('/api', apiController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;

// src\app.js
const express = require('express');
const authRoutes = require('./routes/auth.route');
const postRoutes = require('./routes/post.route');
const cookieParser = require('cookie-parser');

// Middleware to parse cookies
const app = express();

app.use(cookieParser());
app.use(express.json()); // This line is crucial for parsing the request body
app.use('/api/auth', authRoutes); // Ensure this line is present and correct
app.use('/api/posts', postRoutes);

module.exports = app;
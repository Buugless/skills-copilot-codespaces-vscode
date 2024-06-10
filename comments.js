// Create web server
const express = require('express');
const app = express();

// Use the express.json middleware to parse JSON data from the request body
app.use(express.json());

// Create an array to store comments
const comments = [];

// Create a POST route to add a comment
app.post('/comments', (req, res) => {
  // Get the comment data from the request body
  const comment = req.body;
  // Add the comment to the comments array
  comments.push(comment);
  // Send a response with the comment data
  res.send(comment);
});

// Create a GET route to get all comments
app.get('/comments', (req, res) => {
  // Send a response with the comments array
  res.send(comments);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
// Import the express module
const express = require('express');
// Create an express application
const app = express();

// Use the express.json middleware to parse JSON data from the request body
app.use(express.json());

// Create an array to store comments
const comments = [];

// Create a POST route to add a comment
app.post('/comments', (req, res) => {
  // Get the comment data from the request body
  const comment = req.body;
  // Add the comment to the comments array
  comments.push(comment);
  // Send a response with the comment data
  res.send(comment);
});

// Create a GET route to get all comments
app.get('/comments', (req, res) => {
  // Send a response with the comments array
  res.send(comments);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: package.json
{
  "name": "express-comments",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "express": "^4.17.1"
  }
}

// Install the express module
npm install express

// Run the server
node index.js


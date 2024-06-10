// Create a web server
// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Load the comments module
const comments = require('./comments');

// Load the comments module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});
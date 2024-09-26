// Create web server with express.js
// Create a route that returns all comments
// Create a route that returns all comments for a specific post
// Create a route that returns all comments for a specific user
// Create a route that returns all comments for a specific user and post
// Create a route that returns all comments for a specific user that was made after a specific date
// Create a route that returns all comments for a specific post that was made after a specific date

const express = require('express');
const app = express();
const port = 3000;

const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:postId', (req, res) => {
  const postId = req.params.postId;
  const filteredComments = comments.filter(comment => comment.postId === postId);

  res.json(filteredComments);
});

app.get('/comments/user/:userId', (req, res) => {
  const userId = req.params.userId;
  const filteredComments = comments.filter(comment => comment.userId === userId);

  res.json(filteredComments);
});

app.get('/comments/user/:userId/post/:postId', (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  const filteredComments = comments.filter(comment => comment.userId === userId && comment.postId === postId);

  res.json(filteredComments);
});

app.get('/comments/user/:userId/date/:date', (req, res) => {
  const userId = req.params.userId;
  const date = new Date(req.params.date);
  const filteredComments = comments.filter(comment => comment.userId === userId && new Date(comment.date) > date);

  res.json(filteredComments);
});

app.get('/comments/post/:postId/date/:date', (req, res) => {
  const postId = req.params.postId;
  const date = new Date(req.params.date);
  const filteredComments = comments.filter(comment => comment.postId === postId && new Date(comment.date) > date);

  res.json(filteredComments);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


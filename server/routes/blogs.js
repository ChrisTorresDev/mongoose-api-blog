const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', (req, res) => {
  Blog
    .find()
    .then(blog => {
      res.status(200).json(blogs);
    });
});

module.exports = router;

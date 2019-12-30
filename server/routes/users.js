const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  User
    .find()
    .then(user => {
      res.status(200).json(users);
    });
});

router.get('/api/users/', (req, res) => {
  User
    .find()
    .then(user => {
      res.status(200).json(users);
    });
});

router.get('/api/users/:id', (req, res) => {
  User
    .findById()
    .then(user => {
      res.status(200).json(users);
    });
});

router.post('/api/users/', (req, res) => {
  User
    .save()
    .then(user => {
      res.status(200).json(users);
    });
});

router.put('/api/users/:id', (req, res) => {
  User
    .findByIdAndUpdate()
    .then(user => {
      res.status(200).json(users);
    });
});

router.delete('/api/users/:id', (req, res) => {
  User
    .findByIdAndRemove()
    .then(user => {
      res.status(200).json(users);
    });
});

module.exports = router;

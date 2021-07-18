const express = require('express');
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/pokemon')
  .get((req, res, next) => {
    controller.getPokemon()
      .then(data => {
        res.statusCode = 200;
        res.json(data);
      })
      .catch(err => {
        res.statusCode = 404;
        res.json(data);
      })
  });

  module.exports = router;
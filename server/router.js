const express = require('express');
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/pokemon')
  .get((req, res, next) => {
    let type = req.url.split('=')[1];
    !type ? type = null : type = type;
    controller.getPokemon(type)
      .then(data => {
        res.statusCode = 200;
        res.json(data);
      })
      .catch(err => {
        res.statusCode = 404;
        res.json(data);
      })
  })
  .post((req, res, next) => {
    controller.postPokemon(req.body)
    .then(data => {
      res.statusCode = 201;
      res.json(data);
    })
    .catch(err => {
      res.statusCode = 404;
      res.json(data);
    })
  })

  module.exports = router;
const express = require('express');
const methods = require('../db/methods.js');

let getPokemon = (type) => {
  return methods.getPokemon(type);
}

module.exports = {
  getPokemon
}
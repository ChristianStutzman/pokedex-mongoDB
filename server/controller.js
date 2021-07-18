const express = require('express');
const methods = require('../db/methods.js');

let getPokemon = () => {
  return methods.getPokemon();
}

module.exports = {
  getPokemon
}
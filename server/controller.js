const express = require('express');
const methods = require('../db/methods.js');

let getPokemon = (type) => {
  return methods.getPokemon(type);
}

let postPokemon = (data) => {
  return methods.postPokemon(data);
}

module.exports = {
  getPokemon,
  postPokemon
}
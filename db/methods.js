const mongoose = require('mongoose');
const db = require('./index.js');
const Pokemon = require('./Pokemon.js');


let getPokemon = async () => {
  return await Pokemon.find();
}


module.exports = {
  getPokemon
}
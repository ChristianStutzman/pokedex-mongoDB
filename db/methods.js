const mongoose = require('mongoose');
const db = require('./index.js');
const Pokemon = require('./Pokemon.js');


let getPokemon = async (type) => {
  if (type) {
    return await Pokemon.find({type: type})
  } else {
    return await Pokemon.find();
  }
}


module.exports = {
  getPokemon
}
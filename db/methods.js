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

let postPokemon = async (data) => {
  return await Pokemon.create(data);
}


module.exports = {
  getPokemon,
  postPokemon
}
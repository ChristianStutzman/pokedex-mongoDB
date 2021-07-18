const mongoose = require('mongoose');
const db = require('./index.js');


const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String
},
{
  collection: 'Pokemon'
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
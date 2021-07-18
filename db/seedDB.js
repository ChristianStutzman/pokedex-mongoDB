const mongoose = require('mongoose');
const db = require('./index.js');
const pokemonData = require('../pokemon.json');
const Pokemon = require('./Pokemon.js');


const insertSampleData = function() {
  Pokemon.create(pokemonData)
    .then(() => mongoose.connection.close());
};

db.once('open', () => {
  console.log('connected')
  insertSampleData();
});


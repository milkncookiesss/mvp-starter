const db = require('../database-mongo');
const request = require('./pokemonping');
const Pokedex = require('pokedex-promise-v2');
const p = new Pokedex();

module.exports = {
  get: (res, req) => {
    console.log('in the get...');
    p.getPokemonByName(150)
      .then((res) => {
        console.log('bulbasaur ', res);
      })
      .catch((err) => {
        console.log('err ', err);
      })

  },
  post: (res, req) => {
    console.log('in the post...')
  },
  delete: (res, req) => {
    console.log('in the delete...');
  }
}
const request = require('request');

const pokeRequest = request
  // .get('http://pokeapi.co/api/v2/pokemon-form/1')
  // .on('error', (err) => {
  //   console.log(err);
  // })
  // .on('response', (response) => {
  //   console.log('bulbasaur ', JSON.stringify(response));
  // });

  module.exports.pokeRequest = pokeRequest;
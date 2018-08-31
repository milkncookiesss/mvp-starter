const db = require('../database-mongo');
const Pokedex = require('pokedex-promise-v2');
const p = new Pokedex();

module.exports = {
  get: (req, res) => {
    console.log('in the get...');
    let num = rng();
    let pokemon = {};
    p.getPokemonByName(num)
      .then((response) => {
        pokemon = {
          name: response.name,
          img: response.sprites.front_default,
          id: response.id
        }
        console.log('the pokemon ', pokemon);
        res.send(pokemon);
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

const rng = () => {
  let num = Math.floor(Math.random() * 151);
  return num;
}
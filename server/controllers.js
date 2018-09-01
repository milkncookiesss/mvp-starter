const db = require('../database-mongo');
const Pokedex = require('pokedex-promise-v2');
const p = new Pokedex();

module.exports = {
  pokemon: {
    get: (req, res) => {
      let num = rng();
      let pokemon = {};
      p.getPokemonByName(num)
        .then((response) => {
          pokemon = {
            name: response.name,
            img: response.sprites.front_default,
            id: response.id
          }
          res.status(200).send(pokemon);
        })
        .catch((err) => {
        })
    }
  },
  user: {
    get: (req, res) => {
      const { username } = req.query;
      db.User.find({user_name: username}, (err, pokemons) => {
        if (err) {
          return err;
        } else {
          res.status(201).send(pokemons);
        }
      })
    },
    post: (req, res) => {
      const { username, pokemon } = req.body.params;
      db.save(username, pokemon)
    },
    delete: (req, res) => {
      console.log('deleting things...')
    }
  }
}

const rng = () => {
  let num = Math.floor(Math.random() * 151);
  return num;
}
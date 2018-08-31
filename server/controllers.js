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
          console.log('the pokemon ', pokemon);
          res.status(200).send(pokemon);
        })
        .catch((err) => {
          console.log('you fucked up ', err);
        })
    }
  },
  user: {
    get: (req, res) => {
      // console.log('in the get...', req.query)
      // console.log('what is db ', db);
      db.selectAll((err, pokedex) => {
        if (err) {
          return err;
        } else {
          res.status(200).send(pokedex);
        }
      })
    },
    post: (req, res) => {
      const { username, pokemon } = req.body.params;
      console.log('in the post...', username);
      console.log('pokemon? ', pokemon);
      db.save(username, pokemon)
      db.User.find({user_name: username}, (err, pokemons) => {
        if (err) {
          return err;
        } else {
          console.log(`${username}'s pokmemon `, pokemons);
          res.status(201).send(pokemons);
        }
      })
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
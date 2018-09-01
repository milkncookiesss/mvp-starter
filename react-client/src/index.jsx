import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Pokemon from './components/Pokemon.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemon: {},
      pokedex: [],
      user: ''
    }
    // this.setUserName = this.setUserName.bind(this);
    this.catchPokemon = this.catchPokemon.bind(this);
    this.pokedex = this.pokedex.bind(this);
  }

  componentDidMount() {
    // this.setUserName();
    let username = prompt('Enter a username').toLowerCase();
    this.setState({
      user: username
    })
    //set alert to sign in a user name
      //axios.get the username to load their pokedex
      // console.log(username);
    axios.get('/api/user', {
      params: {
        username
      }
    })
      .then((res) => {
        this.setState({
          pokedex: res.data
        })
        console.log('the pokedex ', this.state.pokedex);
      })
  }

  pokedex() {
    axios.get('/api/user', {params: {username: this.state.user}})
    .then((res) => {
      this.setState({
        pokedex: res.data
      })
    })
  }

  findPokemon() {
    axios.get('/api/pokemon')
    .then((res) => {
      this.setState({
        pokemon: res.data
      });
    })
    .catch((err) => {
      return err;
    });
  }

  catchPokemon() {
    let catchRate = Math.floor(Math.random() * 100);
    if (catchRate >= 50) {
      alert(`You caught ${this.state.pokemon.name}!!`)
      axios.post('/api/user', {params: {pokemon: this.state.pokemon, username: this.state.user}})
      .then((res) => {
        this.setState({
          pokedex: res.data
        });
        console.log('the res in catchpokemon ', res.data);
      })
      .catch((err) => {
        return err;
      });
    } else {
      alert(`you did not catch it, ${this.state.pokemon.name} ran away`);
      this.setState({
        pokemon: {}
      })
    }
  }

  render () {
    console.log(this.state.pokedex);
    return (<div>
      <h1>Pokemon Stay</h1>
      <Pokemon pokemon={this.state.pokemon} onCatch={this.catchPokemon}/>
      <button onClick={this.findPokemon.bind(this)}>Find a Pokemon</button>
      <button onClick={this.pokedex}>check pokedex</button>
      {/* <List items={this.state.pokedex}/> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
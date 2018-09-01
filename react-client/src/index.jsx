import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Pokemon from './components/Pokemon.jsx';
import PokedexList from './components/Pokedex.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemon: {},
      pokedex: [],
      user: '',
      modal: false
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
    this.setState({
      modal: !this.state.modal
    })
  }

  findPokemon() {
    // console.log('clicked');
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

  render() {
    return (
    <div>
      <h1>Pokemon Stay</h1>
      {/* <PokedexList pokedex={this.state.pokedex} /> */}
      <Pokemon pokemon={this.state.pokemon} onCatch={this.catchPokemon}/>
      <button onClick={this.findPokemon.bind(this)}>Find a Pokemon</button>
      <button onClick={this.pokedex}>check pokedex</button>
      {this.state.modal ? <PokedexList pokedex={this.state.pokedex}/>: null}
      {/* <List items={this.state.pokedex}/> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
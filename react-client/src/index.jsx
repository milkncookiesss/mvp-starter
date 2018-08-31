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
      pokedex: []
    }
  }

  componentDidMount() {
  console.log('hello world');
  }
  onClick() {
    console.log(this.state.pokemon);
    axios.get('/api/pokemon')
    .then((res) => {
      this.setState({
        pokemon: res.data
      })
    })
  }

  render () {
    return (<div>
      <h1>Pokemon Stay</h1>
      <Pokemon pokemon={this.state.pokemon} />
      <button onClick={this.onClick.bind(this)}>Find a Pokemon</button>
      {/* <List items={this.state.pokedex}/> */}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
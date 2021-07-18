import React from 'react';
import axios from 'axios';
import Pokemon from './Pokemon.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    }
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  fetchPokemon() {
    axios.get('http://localhost:3000/api/pokemon')
      .then(data => {
        console.log('pokemon list:', data.data);
        this.setState({
          pokemonList: data.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchPokemon()
  }


  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button>Show All</button>
          <select id="type">
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button>INSERT</button>
          {this.state.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}


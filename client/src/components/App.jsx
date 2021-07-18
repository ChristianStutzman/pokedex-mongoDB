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
    this.sortPokemon = this.sortPokemon.bind(this);
    this.showAll = this.showAll.bind(this);
    this.updateName = this.updateName.bind(this);
    this.pokemonList;
  }

  fetchPokemon(type = '') {
    axios.get('http://localhost:3000/api/pokemon/', {
      params: {type: type}
    })
      .then(data => {
        console.log('pokemon list:', data.data);
        this.pokemonList = data.data;
        this.setState({
          pokemonList: data.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  sortPokemon(e) {
    e.preventDefault();
    let result = [];
    for (let pokemon of this.pokemonList) {
      if (pokemon.type === e.target.value) {
        result.push(pokemon);
      }
    }
    this.setState({
      pokemonList: result
    })
    // this.fetchPokemon(e.target.value);
  }

  showAll() {
    this.setState({
      pokemonList: this.pokemonList
    })
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  updateName(prevName, newName) {
    let pokemonList = this.state.pokemonList;
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].name === prevName) {
        pokemonList[i].name = newName;
      }
    }
    for (let i = 0; i < this.pokemonList.length; i++) {
      if (this.pokemonList[i].name === prevName) {
        this.pokemonList[i].name = newName;
      }
    }
    this.setState({
      pokemonList: pokemonList
    })
  }


  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button onClick={this.showAll} >Show All</button>
          <select id="type" onChange={this.sortPokemon}>
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
          {this.state.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} updateName={this.updateName} />)}
        </div>
      </div>
    )
  }
}


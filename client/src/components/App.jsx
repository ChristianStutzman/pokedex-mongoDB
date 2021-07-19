import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Pokemon from './Pokemon.jsx';
import Insert from './Insert.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      currentType: ''
    }
    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.sortPokemon = this.sortPokemon.bind(this);
    this.showAll = this.showAll.bind(this);
    this.updateName = this.updateName.bind(this);
    this.pokemonList;
    this.delete = this.delete.bind(this);
    this.renderInsert = this.renderInsert.bind(this);
    this.insert = this.insert.bind(this);
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
      pokemonList: result,
      currentType: e.target.value
    })
  }

  showAll() {
    this.setState({
      pokemonList: this.pokemonList
    })
  }

  delete(name) {
    let pokemonList = this.state.pokemonList;
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].name === name) {
        pokemonList.splice(i, 1);
      }
    }
    for (let i = 0; i < this.pokemonList.length; i++) {
      if (this.pokemonList[i].name === name) {
        this.pokemonList.splice(i, 1);
      }
    }
    this.setState({
      pokemonList: pokemonList
    })
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

  renderInsert(e) {
    e.preventDefault();
    ReactDom.render(<Insert insert={this.insert} />, document.getElementById("insert"))
  }

  insert(pokeData) {
    axios.post('http://localhost:3000/api/pokemon/', pokeData)
      .then(res => {
        this.pokemonList.push(pokeData);
        if (this.state.currentType === pokeData.type || this.state.currentType === '') {
          let tempList = this.state.pokemonList;
          tempList.push(pokeData);
          this.setState({
            pokemonList: tempList
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchPokemon();
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
          <button onClick={this.renderInsert}>INSERT</button>
          <div id="insert"></div>
          {this.state.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} updateName={this.updateName} delete={this.delete} />)}
        </div>
      </div>
    )
  }
}


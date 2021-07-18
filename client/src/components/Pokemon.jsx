import React from 'react';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.pokemon = props.pokemon;
  }



  render() {
    return (
      <div>
        <h3>{this.pokemon.name}</h3>
        <img src={this.pokemon.img} />
      </div>
    )
  }
}
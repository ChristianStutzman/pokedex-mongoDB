import React from 'react';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.props = props;
  }



  render() {
    return (
      <div>
        <h3>{this.props.pokemon.name}</h3>
        <img src={this.props.pokemon.img} />
      </div>
    )
  }
}
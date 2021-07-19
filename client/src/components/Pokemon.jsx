import React from 'react';
import ReactDom from 'react-dom';
import Update from './Update.jsx';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.pokemon.name
    }
    this.props = props;
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    e.preventDefault();
    ReactDom.render(<Update updateName={this.props.updateName} name={this.props.pokemon.name}/>, document.getElementById(this.props.pokemon.name))
  }



  render() {
    return (
      <div>
        <h3 onClick={this.changeName}>{this.props.pokemon.name}</h3>
        <img src={this.props.pokemon.img} />
        <div id={this.props.pokemon.name}></div>
        <button type="button" onClick={() => this.props.delete(this.props.pokemon.name)}>Delete</button>
      </div>
    )
  }
}
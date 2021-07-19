import React from 'react';
import ReactDom from 'react-dom';


export default class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      img: ''
    }
    this.props = props;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let stateObj = {};
    stateObj[e.target.getAttribute('name')] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.insert(this.state);
    ReactDom.unmountComponentAtNode(document.getElementById("insert"));
  }

  render() {
    return (
      <div id="insert-input">
        <label>Insert New Pokemon:</label>
        <br></br><br></br>
        <label>Pokemon Name:</label>
        <input type="text" name="name" placeholder="Name" onChange={this.handleChange}></input>
        <label>Pokemon Type:</label>
        <input type="text" name="type" placeholder="Type" onChange={this.handleChange}></input>
        <label>Pokemon Image:</label>
        <input type="text" name="img" placeholder="Image Url" onChange={this.handleChange}></input>
        <button type="button" onClick={this.handleSubmit}>Add Pokemon</button>
      </div>
    )
  }
}
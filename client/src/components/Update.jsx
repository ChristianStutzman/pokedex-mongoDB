import React from 'react';
import ReactDom from 'react-dom';

export default class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateName(this.props.name, this.state.value);
    ReactDom.unmountComponentAtNode(document.getElementById(this.props.name));
  }

  render() {
    return (
      <div id={`${this.props.name}-update-name`}>
        <input type="text" placeholder="Enter A New Name" onChange={this.handleChange}></input>
        <button type="button" onClick={this.handleSubmit}>Update Name</button>
      </div>
    )
  }
}
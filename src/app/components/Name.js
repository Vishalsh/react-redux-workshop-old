import React, {Component} from 'react';

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    )
  }
}

export default Name;

import React, {Component} from 'react';


class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formattedName: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      formattedName: nextProps.name.toUpperCase()
    });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Name component will update');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Name component updated');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.formattedName.includes('A')
  }

  render() {
    return (
      <h1>Hello {this.state.formattedName}</h1>
    )
  }
}

export default Name;

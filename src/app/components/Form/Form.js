import React, {Component} from 'react';

import Name from 'components/Name/Name';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      name: this.inputName.value
    });
  }

  render() {
    return (
      <section>
        <input
          ref={(input) => this.inputName = input}
          onChange={this.onChange}/>
        <Name name={ this.state.name }/>
      </section>
    )
  }
}

export default Form;
import React, {Component} from 'react';

class User extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange() {

  }

  render() {
    return (
      <section>
        <input
          ref={(input) => this.inputName = input}
          onChange={this.onChange}/>
      </section>
    )
  }
}

export default User;
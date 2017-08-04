import React, {Component} from 'react';

class User extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.updateName(this.inputName.value)
  }

  render() {
    return (
      <section>
        <input
          placeholder="Name"
          ref={(input) => this.inputName = input}
          onChange={this.onChange}/>
      </section>
    )
  }
}

export default User;
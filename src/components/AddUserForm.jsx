import React, { Component } from 'react';

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>{this.props.message}</h1>
        <input
        onChange={this.handleUsernameChange}
        type="text"
        name="username"
        placeholder="Username"
        required />
        <br/>

        <input
        onChange={this.handleEmailChange}
        type="email"
        name="email"
        placeholder="Email"
        required />
        <br/>

        <input
        onChange={this.handlePasswordChange}
        type="password"
        name="password"
        placeholder="Password"
        required />
        <br/>

        <button type="submit">
          Create User
        </button>
      </form>
    );
  }
}
export default AddUserForm;

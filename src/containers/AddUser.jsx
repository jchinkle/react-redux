import React, { Component } from 'react';
import AddUserForm from '../components/AddUserForm';
import { addUser } from '../actions/users';
import { connect } from 'react-redux';

class AddUser extends Component {
  render() {
    return (
      <AddUserForm message="Add a User"
                   user={this.props.user}
                   onSubmitHandler={this.props.newUser} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  newUser: estate => dispatch(addUser(estate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

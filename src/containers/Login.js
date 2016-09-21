import React, { Component, PropTypes } from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
//import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(id, pw){

  }

  render() {
    return(
      <div>
        <Authentication mode={true} onLogin={this.handleLogin}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.login.status
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);

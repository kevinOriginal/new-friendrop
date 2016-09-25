import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Header } from '../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.props.isLoggedIn}/>
        {this.props.children}
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn : false
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.status.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Jokes from './components/Jokes'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DAD JOKES</h1>
          <div>
            <button onClick={this.logup}>Sign Up</button>
            <button onClick={this.login}>Sign In</button>
          </div>
        </header>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route exact path= '/jokes' component={Jokes} />
      </div>
    );
  }

  logup = event => {
    this.props.history.push('/signup');
  }

  login = event => {
    this.props.history.push('/signin');
  }

  logout = event => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  }
}

export default withRouter(App);
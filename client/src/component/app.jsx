import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { logout } from "../firebase/auth";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import HomeView from './homeView.jsx';
import Login from './login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from './signup.jsx';
import * as authActions from '../actions/authActions.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { loggedIn } = this.props;
    console.log(loggedIn);

    if(loggedIn) {
      return (
        <HomeView />
      )
    } else {
      return (
        <div>
          <Router>
            <div>
              <div className="ui pointing menu" >
                <a className="item"><Link to="/">FRIDGE-IT</Link></a>
                <a className="item"><Link to="/home">TEMP HOME</Link></a>
                <a className="item"><Link to="/login">Login</Link></a>
                <a className="item"><Link to="/signup">Sign Up</Link></a>
              </div>
                <Route exact path="/" render={() => (<LandingPage />)} />
                <Route path="/home" render={() => (<HomeView />)} />
                <Route path="/login" render={() => (<Login />)} />
                <Route path="/signup" render={() => (<SignUp />)} />
            </div>
          </Router>
        </div>
      );
    }
  }
};

const appState = (store) => {
  return {
    loggedIn: store.auth.loggedIn
  }
};

const appDispatch =(dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}
export default connect(appState, appDispatch)(App);

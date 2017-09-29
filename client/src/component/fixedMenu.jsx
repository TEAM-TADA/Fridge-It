import React from 'react';
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Link, Redirect } from 'react-router-dom';

import HomeView from './homeView.jsx';
import Login from './login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from './signup.jsx';
import * as authActions from '../actions/authActions.js';

const FixedMenu = ({ history }) => (
  <Router history={history}>
    <div>
      <div>
        <Menu fixed='top' size='large'>
          <Container>
            <Menu.Item as='a' href="/">
              <Link to="/">
                Fridge-It
              </Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button as='a' href="login">Log In</Button>
              </Menu.Item>
              <Menu.Item>
                <Button as='a' href="/signup">Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
      <div>
        <Route exact path="/" render={() => (<LandingPage />)} />
        <Route path="/login" render={() => (<Login />)} />
        <Route path="/signup" render={() => (<SignUp />)} />
      </div>
    </div>
  </Router>
)

export default FixedMenu;
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
        <Menu fixed='top' size='large' id='navbar'>
          <Container>
          <style>{
            `#navbar {
              background-color: #2185d0;
            }
          `}</style>
            <Menu.Item>
              <Link to="/">
                <Button content={'Fridge-It'} color={'blue'} size={'huge'}/>
              </Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Link to="/login">
                  <Button content={'Login'} color={'blue'} size={'large'}/>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/signup">
                  <Button content={"Signup"} color={'blue'} size={'large'}/>
                </Link>
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
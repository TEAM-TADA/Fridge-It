import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import {Button, Menu, Container } from 'semantic-ui-react';

import Search from './searchView.jsx';
import Home from './home.jsx';
import * as authActions from '../actions/authActions.js';

class HomeView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    if(localStorage.getItem('userid')) {
      return (
        <div>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.home-form {
            padding-top: 5%;
            padding-left: 5%;
            padding-right: 5%;
          }
        `}</style>
        <Router history={this.props.history}>
          <div>
            <Menu fixed='top' size='large'>
              <Container>
                <Menu.Item as='a' className="active">
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Link to="/search">Recipes</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Button as='a' onClick={(e) => {
                      e.preventDefault();
                      this.props.actions.logoutUser();
                      }}>Logout</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
            <Route exact path="/home" render={() => {return <Home />}}/>
            <Route path="/search" render={() => {return <Search />}}/>
          </div>
        </Router>
        </div>
      );
    } else {
      return (
        <div>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
            padding-top: 80px;
          }
        `}</style>
        <Redirect exact to={{ pathname: '/login'}} />
        </div>
      )
    }
  }
};

const homeState = (store) => {
  return {
    username: store.auth.username,
  }
}

const homeDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(homeState, homeDispatch)(HomeView);
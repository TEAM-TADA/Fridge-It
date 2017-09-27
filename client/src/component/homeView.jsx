import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from './searchView.jsx';
import Home from './home.jsx';
import Login from './login.jsx';

class HomeView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/search">Recipes</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
          <Route exact path="/" render={() => {return <Home />}}/>
          <Route path="/search" render={() => {return <Search />}}/>
          <Route path="/login" render={() => {return <Login />}}/>
        </div>
      </Router>
    );
  }
};

export default connect(null, null)(HomeView);
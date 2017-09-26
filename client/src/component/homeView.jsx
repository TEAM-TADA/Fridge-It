import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from './searchView.jsx';
import Home from './home.jsx';

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
          </ul>
          <Route exact path="/" render={() => {return <Home />}}/>
          <Route path="/search" render={() => {return <Search />}}/>
        </div>
      </Router>
    );
  }
};

export default connect(null, null)(HomeView);
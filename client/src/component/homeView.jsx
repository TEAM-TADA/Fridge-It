import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

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
          <div className="row">
            <a className="item"><Link to="/">HOME</Link></a>
            <a className="item"><Link to="/search">Recipes</Link></a>
            <a className="item"><Link to="/login">Log In</Link></a>
          </div>
          <Route exact path="/" render={() => {return <Home />}}/>
          <Route path="/search" render={() => {return <Search />}}/>
          <Route path="/login" render={() => {return <Login />}}/>
        </div>
      </Router>
    );
  }
};

export default connect(null, null)(HomeView);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

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
          <div className="ui pointing menu">
            <a className="item"><Link to="/home">Home</Link></a>
            <a className="item"><Link to="/search">Recipes</Link></a>
            <a className="item" onClick={this.handleLogout}>Logout</a>
          </div>
          <Route exact path="/home" render={() => {return <Home />}}/>
          <Route path="/search" render={() => {return <Search />}}/>
        </div>
      </Router>
    );
  }
};

export default connect(null, null)(HomeView);
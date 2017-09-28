import React, { Component } from 'react';

import Messages from './messagesListView.jsx';
import Search from './searchListView.jsx';
import Fridge from './fridgeView.jsx';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
    <div className="ui grid">
      <div className="row">
        <div className="eight wide column"> 
          <Fridge />
        </div>
        <div className="eight wide column">
          <Messages />
        </div>
      </div>
      <div className="six wide column">
        <Search />
      </div>
    </div>

    )
  }

}


export default Home;

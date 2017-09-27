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
    
    <div>
      Hello this is HOME
      <div>
        <div> 
          <Fridge />
        </div>
        <div>
          <Messages />
        </div>
      </div>
      <div>
        <Search />
      </div>
    </div>

    )
  }

}


export default Home;

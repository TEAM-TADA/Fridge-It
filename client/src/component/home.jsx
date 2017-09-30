import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Messages from './messagesListView.jsx';
import Search from './searchListView.jsx';
import Fridge from './fridgeView.jsx';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
    <Grid divided="verticaly">
      <Grid.Row columns={2} centered>
        <Grid.Column> 
          <Fridge />
        </Grid.Column>
        <Grid.Column>
          <Messages />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={8} centered>
        <Grid.Column 
          width={10}
          textAlign="center"
        >
          <Search />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    )
  }

}


export default Home;

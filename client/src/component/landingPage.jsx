import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>LANDING PAGE</div>
    )
  }
}

export default connect()(LandingPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logout} from "../firebase/auth";
import HomeView from './homeView.jsx'

const appTokenKey = "appToken";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user"))
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    logout().then(function () {
        localStorage.removeItem(appTokenKey);
        // this.props.history.push("/login"); Need to redirect to Sign In page.
        console.log("user signed out from firebase", localStorage);
    })
  };

  render() {
    return (
      <div>
        <HomeView />
        <button onClick={this.handleLogout}>Log out</button>
      </div>
    )
  }
};

export default connect(null, null)(App);
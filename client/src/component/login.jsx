import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions.js';

class Login extends Component {
  constructor (props) {
    super(props);
  }

  emailSignin() {
    let user = document.getElementById('inputNM');
    let pw = document.getElementById('inputPW');

    this.props.actions.emailLogin(user.value, pw.value);
  }
  
  getinfo() {
    console.log(localStorage.userid);
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Log In</h1>
        <form>
          <label>
            Email: 
            <input type="text" id="inputNM"/>
          </label>
        </form>
        <form>
          <label>
            Password: 
            <input type="password" id="inputPW"/>
          </label>
        </form>
        <button onClick={(e) => {
          e.preventDefault();
          this.emailSignin();
          }}>Log In</button>             
        <button onClick={() => this.props.actions.googleLogin()}>Sign in With Google</button>              
        <button onClick={() => this.getinfo()}>Show User Info</button>
        </div>
    )
  }
};

const loginDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, loginDispatch)(Login);
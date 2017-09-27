import React from 'react';
import {loginWithGoogle} from '../firebase/auth.js'
// import semantic from 'semantic-ui';

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";
const user = '';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user"))
    }
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  // from example.
  handleGoogleLogin() {
    // console.log(localStorage)
    loginWithGoogle()
    .catch(function (error) {
      alert(error); // or show toast
      localStorage.removeItem(firebaseAuthKey);
    });
    localStorage.setItem(firebaseAuthKey, "1");
    // need to get the username off the page and save it on local storage
    localStorage.setItem(user, "username");
    }

  handleSubmit(event) {
    event.preventDefault();
    console.log('button was clicked')
    
  }

  // ought to save username to localstorage.
  // firebase.auth().onAuthStateChanged(function(user) {
  //   localStorage.user = user; // user is undefined if no user signed in
  // });

  render() {
    return (
      <div>
    
    <div>
      <form >
        <div >
          <label> First Name </label>
          <input type="text" placeholder="Username"></input>
        </div>
        <div >
          <label> Last Name </label>
          <input type="text" placeholder="Password"></input>
        </div>
        <button  type="button" onClick={this.handleSubmit}>Submit</button>
      </form>    
    </div>
        <div>
          <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
        </div>
      </div>
    )
  }
}
export default Login;
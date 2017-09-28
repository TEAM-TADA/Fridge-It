import React from 'react';
import firebase, {auth, googleProvider} from '../firebase/config.js'

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pw: ''
    }  
    this.emailAuth = this.emailAuth.bind(this);
    this.handleName = this. handleName.bind(this);
    this.handlePw = this. handlePw.bind(this); 
    this.emailSignin = this.emailSignin.bind(this);   
  }

  handleName(event) {
    this.setState({user: event.target.value});
  }

  handlePw(event) {
    this.setState({pw: event.target.value});
  }

  emailAuth(email, pw) {
    firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error: ' + errorCode, ', ' + errorMessage);
    })
    .then(result => {
      localStorage.setItem('name', result.email);
      localStorage.setItem('userid', result.uid);
      console.log(result);
    })
  }

  emailSignin() {
    this.emailAuth(this.state.user, this.state.pw);
  }

  render() {
    return (
    <div className="wrapper">
      <h1>Sign Up</h1>
      <form>
        <label>
          Email: 
          <input type="text" id="name" onChange={this.handleName}/>
        </label>
      </form>
      <form>
        <label>
          Password: 
          <input type="password" id="pw" onChange={this.handlePw}/>
        </label>
      </form>
        <button onClick={this.emailSignin}>Submit</button>     
    </div>
    )
  }
}
export default Signup;
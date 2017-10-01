import firebase, { auth, googleProvider } from '../firebase/config.js';
import { push } from 'react-router-redux';

export const googleLogin = () => {
  return function(dispatch) {
    auth.signInWithPopup(googleProvider) 
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        let name = user.displayName === null ? user.email : user.displayName;
        localStorage.setItem('name', name);
        localStorage.setItem('userid', user.uid);
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: name});
        dispatch(push('/home'));
      })
      .catch(function(error) {
        alert(error.message);
        dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
      });
  };
};

export const emailLogin = (email, pw) => {
  return function(dispatch) {
    firebase.auth().signInWithEmailAndPassword(email, pw)
      .then(result => {
        localStorage.setItem('name', result.email)
        localStorage.setItem('userid', result.uid)
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: result.email});
        dispatch(push('/home'));
      })
      .catch((error) => {
        alert(errorMsgs[error.message]);        
        dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
    })
  };
};

export const logoutUser = () => {
  return function(dispatch) {
    auth.signOut()
      .then(() => {
        localStorage.removeItem('userid');
        localStorage.removeItem('name');
        localStorage.removeItem('fId');
        localStorage.removeItem('visitorId');
        dispatch({type: 'USER_LOGOUT_FULFILLED'});
        dispatch(push('/'));
        location.reload();
      })
      .catch((error) => {
        alert(error.message);        
        dispatch({type: 'USER_LOGOUT_REJECTED', payload: error.message});
      });
  };
};

export const emailSignUp = (email, pw) => {
  return function(dispatch) {    
    firebase.auth().createUserWithEmailAndPassword(email, pw)
      .then(result => {
        localStorage.setItem('name', result.email);
        localStorage.setItem('userid', result.uid);
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: result.email});
        dispatch(push('/home'));
      })
      .catch(function(error) {
        alert(error.message);        
        dispatch({type: 'USER_LOGIN_REJECTED', payload: error.message});
      });
  }
};

export const checkItOut = () => {
  return function(dispatch) {
    dispatch(push('/signup'));
  };
};

const errorMsgs = {
"The password is invalid or the user does not have a password.": 'Password and/or email address is incorrect.',
"The email address is badly formatted.": "Invalid email address.",
"There is no user record corresponding to this identifier. The user may have been deleted.": 'Password and/or email address is incorrect or incorrect log in method.',
"The email address is already in use by another account.": "The email address is already registered."
}
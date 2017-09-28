import firebase, { auth, googleProvider } from '../firebase/config.js';

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
      })
      .catch(function(error) {
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
      })
      .catch((error) => {
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
        dispatch({type: 'USER_LOGOUT_FULFILLED'});
      })
      .catch((error) => {
        dispatch({type: 'USER_LOGOUT_REJECTED', payload: error.message});
      });
  };
};

export const emailSignUp = (email, pw) => {
  firebase.auth().createUserWithEmailAndPassword(email, pw)
    .then(result => {
      localStorage.setItem('name', result.email);
      localStorage.setItem('userid', result.uid);
      dispatch({type: 'USER_SIGNUP_FULFILLED', payload: result.email});
    })
    .catch(function(error) {
      dispatch({type: 'USER_SIGNUP_REJECTED', payload: error.message});
    })
};
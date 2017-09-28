const initialState = {
  username: "",
  loggingIn: false,
  loggedIn: false,
  error: null
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_LOGIN_PENDING': {
      return Object.assign({}, state, {loggingIn: true});
    }
    case 'USER_LOGIN_REJECTED': {
      return Object.assign({}, state, {loggingIn: false, error: action.payload});
    }
    case 'USER_LOGIN_FULFILLED': {
      return Object.assign({}, state, {loggingIn: false, loggedIn: true, username: action.payload});
    }
    default: {
      return state;
    }
  }
}
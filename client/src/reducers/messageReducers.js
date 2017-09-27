import { combinedReducers, createStore } from 'redux';

const initialState = {
  fetching: false,
  fetched: false,
  posting: false,
  posted: false,
  deleting: false,
  deleted: false,
  updating: false,
  updated: false,
  messages: [],
  error: null,

}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_MESSAGES_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_MESSAGES_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_MESSAGES_FULFILLED": {
      return Object.assign({}, state, {
        ...state, 
        fetching: false,
        fetched: true,
        messages: state.messages.concat(action.payload),
      })
    }
    case "POST_MESSAGES_PENDING": {
      return {...state, posting: true}
    }
    case "POST_MESSAGES_REJECTED": {
      return {...state, posting: false, error: action.payload};
    }
    case "POST_MESSAGES_FULFILLED": {
      console.log(state.messages);
      return Object.assign({}, state, {
        posting: false,
        posted: true,
        messages: state.messages.concat(action.payload),
      })
    }
    case "DELETE_MESSAGES_PENDING": {
      return {...state, deleting: true}
    }
    case "DELETE_MESSAGES_REJECTED": {
      return {...state, deleting: false, error: action.payload};
    }
    case "DELETE_MESSAGES_FULFILLED": {
      return Object.assign({}, state, {
        ...state, 
        deleting: false,
        deleted: true,
        messages: state.messages.filter(message => message.id !== action.payload.id), //make sure this works
      })
    }
    case "UPDATE_MESSAGES_PENDING": {
      return {...state, updating: true}
    }
    case "UPDATE_MESSAGES_REJECTED": {
      return {...state, updating: false, error: action.payload};
    }
    case "UPDATE_MESSAGES_FULFILLED": {
      return Object.assign({}, state, {
        ...state, 
        updating: false,
        updated: true,
        messages: state.messages.filter(
          message => message.id === action.payload.id ? message.messageText = action.payload.message : null
        ),
      })
    }
  }
  
  return state;
}


export default messageReducer;
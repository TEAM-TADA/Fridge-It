const initialState = {
  fridge: {},
  fetching: false,
  fetched: false,
  posting: false,
  posted: false,
  error: null
}

const fridgeReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_FRIDGE_PENDING': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_FRIDGE_REJECTED': {
      state = {...state, fetching: false, error: action.payload};
      break;
    }
    case 'FETCH_FRIDGE_FULFILLED': {
      return Object.assign({}, state, {
        ...state,
        fetching: false,
        fetched: true,
        fridge: action.payload
      })
      break; 
    }
    case 'POST_FRIDGE_PENDING': {
      return {...state, posting: true}
      break;
    }
    case 'POST_FRIDGE_REJECTED': {
      state = {...state, posting: false, error: action.payload};
      break;
    }
    case 'POST_FRIDGE_FULFILLED': {
      return Object.assign({}, state, {
        ...state,
        posting: false,
        posted: true,
        fridge: action.payload
      })
      break; 
    }
  }
  return state;
}

export default fridgeReducer; 
const initialState = {
  items: [],
  fetching: false,
  fetched: false,
  posting: false,
  posted: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  error: null
}

const itemReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_ITEMS_PENDING': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_ITEMS_REJECTED': {
      state = {...state, fetching: false, error: action.payload};
      break;
    }
    case 'FETCH_ITEMS_FULFILLED': {
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        items: state.items.concat(action.payload)
      })
      break; 
    }
    case 'POST_ITEM_PENDING': {
      return {...state, posting: true}
      break;
    }
    case 'POST_ITEM_REJECTED': {
      state = {...state, posting: false, error: action.payload}
      break;
    }
    case 'POST_ITEM_FULFILLED': {
      return Object.assign({}, state, {
        ...state,
        posting: false,
        posted: true,
        items: state.items.concat(action.payload)
      })
      break;
    }
    case 'UPDATE_ITEM_PENDING': {
      return {...state, updating: true}
      break;
    }
    case 'UPDATE_ITEM_REJECTED': {
      state = {...state, updating: false, error: action.payload}
      break;
    }
    case 'UPDATE_ITEM_FULFILLED': {
      return {
        ...state,
        updating: false,
        updated: true,
        // items: fill me in
      }
      break;
    }
    case 'DELETE_ITEM_PENDING': {
      return {...state, deleting: true}
      break;
    }
    case 'DELETE_ITEM_REJECTED': {
      state = {...state, deleting: false, error: action.payload}
      break;
    }
    case 'DELETE_ITEMS_FULFILLED': {
      return {
        ...state,
        deleting: false,
        deleted: true,
        items: state.items.splice(indexOf(action.payload), 1)
      }
      break;
    }
  }
  return state;
}

export default itemReducer; 
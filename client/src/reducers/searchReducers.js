const initialState = {
  recipes: [],
  fetching: false,
  fetched: false,
  onRecipeListPage: false,
  error: null
}

const searchReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_RECIPES": {
      return Object.assign({}, state, {fetching: true});
    }
    case "FETCH_RECIPES_REJECTED": {
      return Object.assign({}, state, {fetching: false, error: action.payload});
    }
    case "FETCH_RECIPES_FULFILLED": {
      console.log('this is action.payload: ', action.payload);
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        recipes: action.payload,
      });
    }
    default: {
      return state;
    }
  }
}

export default searchReducer;
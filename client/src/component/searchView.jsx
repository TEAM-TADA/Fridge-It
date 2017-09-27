import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../actions/searchActions.js';

class SearchView extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div>SEARCH VIEW</div>
    )
  }
};

const searchState = (store) => {
  return {
    ingredients: store.items.items,
    recipeList: store.search.recipes,
    filtered: store.search.filtered,
  }
};

const searchDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(searchState, searchDispatch)(SearchView);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../actions/searchActions.js';
import SearchListEntry from './searchListEntry.jsx';

class SearchView extends Component {
  constructor(props){
    super(props);
  };

  render() {
    let { actions, ingredients, recipeList } = this.props;

    if(recipeList.length > 0) {
      return (
        <div>
          {recipeList.map(recipe => (
            <SearchListEntry key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )
    }

    return (
      <div>SEARCH VIEW</div>
    )
  }
};

const searchState = (store) => {
  return {
    ingredients: store.items.items,
    recipeList: store.search.recipes
  }
};

const searchDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(searchState, searchDispatch)(SearchView);
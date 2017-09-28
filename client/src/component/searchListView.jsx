import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchListEntry from './searchListEntry.jsx';
import * as searchActions from '../actions/searchActions.js';

class SearchListView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    const { recipeList, recipeFetched, recipeFetching, onRecipeListPage, actions, ingredients, ingredientsFetched } = this.props;
    const ingredientList = ingredients.map(ingredient => {
      return ingredient.name;
    });
    
    // DO NOT UNCOMMENT FOR REST OF THE DAY! IT WORKS THOUGH!
    // if(ingredientsFetched && !recipeFetched) {
    //   ingredientList.length > 0 ? actions.fetchRecipes(ingredientList) : null;
    // }

    if(recipeList.length === 0) {
      return (
        <div>
          Add Ingredients into your Fridge!
        </div>
      )
    } else {
      let top3 = [];
  
      for(let i = 0; i < 3; i++) {
        top3.push(recipeList[i]);
      };
  
      return (
        <div>
          <div>
            {top3.map(recipe => (
              <SearchListEntry {...actions} key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div>
            <button onClick={actions.switchView}>Find me more!</button>
          </div>
        </div>
      );
    }
  }
};

const mapState = (store) => {
  return {
    ingredients: store.items.items,
    ingredientsFetched: store.items.fetched,
    recipeList: store.search.recipes,
    recipeFetched: store.search.fetched,
    recipeFetching: store.search.fetching,
    recipeError: store.search.error,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(mapState, mapDispatch)(SearchListView);
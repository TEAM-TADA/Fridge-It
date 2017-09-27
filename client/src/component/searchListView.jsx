import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchListEntry from './searchListEntry.jsx';
import * as searchActions from '../actions/searchActions.js';

class SearchListView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }
  
  componentDidMount() {
    // !this.props.ingredients.length ? null : this.props.actions.fetchRecipes(this.props.ingredients);
  }

  render() {
    const { recipeList, recipeFetched, recipeFetching, onRecipeListPage } = this.props;

    if (!onRecipeListPage) {
      if (!recipeList.length) {
        return (
          <div>
            Add Ingredients into your Fridge!
          </div>
        )
      } else {
        let top3 = [];

        for(let i = 0; i < 3; i++) {
          top3.push(recipeList[i]);
        }

        return (
          <div>
            <div>
              {top3.map(recipe => (
                <SearchListEntry {...this.props.actions} key={recipe.id} recipe={recipe} />
              ))}
            </div>
            <div>
              <button onClick={this.props.actions.switchView}>Find me more!</button>
            </div>
          </div>
        )
      }
    } else {
      return (
        <div>
          {recipeList.map(recipe => (
            <SearchListEntry {...this.props.actions} key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )
    }
  }
};

const mapState = (store) => {
  return {
    ingredients: store.items.items, // TODO: update with correct prop name
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
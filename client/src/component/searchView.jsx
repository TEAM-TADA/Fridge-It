import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';

import * as searchActions from '../actions/searchActions.js';
import SearchListEntry from './searchListEntry.jsx';

class SearchView extends Component {
  constructor(props){
    super(props);
  };

  componentDidMount() {
    let items = document.getElementsByClassName("item nav-item");
    for (let i = 0; i < items.length; i++) {
      if (items[i].text === "Recipes") items[i].className = "item nav-item active";
    };
  }

  render() {
    let { actions, ingredients, recipeList } = this.props;

    if(recipeList.length > 0) {
      return (
        <div>
          <Card.Group itemsPerRow={3}>
            {recipeList.map(recipe => (
              <SearchListEntry key={recipe.id} recipe={recipe} />
            ))}
          </Card.Group>
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
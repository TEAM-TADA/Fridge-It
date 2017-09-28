import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemListView from './itemListView.jsx';
import ItemAddition from './itemAddition.jsx';

import * as fridgeActions from '../actions/fridgeActions.js';
import * as itemActions from '../actions/itemActions.js';

class Fridge extends Component {
  constructor(props) {
    super(props);
    this.filterItems = this.filterItems.bind(this);
  }
  
  componentDidMount() {
    this.props.fridgeActions.getFridge(1); // DONT FORGET TO EDIT OUT THE 1
    this.props.itemActions.getItems(1); // DONT FORGET TO EDIT OUT THE 1
  }

  filterItems(type) {
    return this.props.items.filter(item => {
      if (item.type === type) {
        return item; 
      }
    })
  }
  

  render() {
    const types = ["test"]; 

    if (this.props.items.length > 0) {
      return (
        <div>
          <h3 className="ui dividing header">Fridge</h3>
          <div>
            <ItemAddition />
          </div>
          {types.map(type => {
              let filteredItems = this.filterItems(type);
                return (
                  <div className={type}>
                    <ItemListView type={type} items={filteredItems}/> 
                  </div>
                )
          })}
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <ItemAddition />
          </div>
          <div>
            No items in fridge
          </div> 
        </div>
      )
    }
  }
}

const fridgeState = (store) => {
  return {
    fridge: store.fridge.fridge,
    items: store.items.items
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 



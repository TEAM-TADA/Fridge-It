import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Card } from 'semantic-ui-react';

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
    const types = ["produce", "dairy", "protein", "grains", "frozen", "misc"]; 

    if (this.props.items.length > 0) {
      return (
        <div className='wrapper'>
          <h3 className='ui dividing header'>Fridge</h3>
          <div>
            <ItemAddition />
          </div>
          <Card.Group itemsPerRow={2}>
            {types.map(type => {
                let filteredItems = this.filterItems(type);
                  return (
                    <Popup
                      trigger={<Card>{type}</Card>}
                      flowing
                      hoverable
                    >
                      <ItemListView actions={this.props.itemActions} type={type} items={filteredItems}/> 
                    </Popup>
                  )
            })}
          </Card.Group>
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



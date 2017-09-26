import React, { Component } from 'React'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemListView from './itemListView'
import fridgeActions from '../actions/fridgeActions.js'
import itemActions from '../actions/itemActions.js'

class Fridge extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.dispatch(getFridge());
    this.props.dispatch(getItems());
  }

  filterItems(type) {
    if (item.type === type) {
      return item;
    } 
  }

  render() {
    const types = []; 
    for (let i = 0; i < types.length; i++) {
      const filteredItems = this.props.items.filter(filterItems(types[i]) => {
        return (
          <div className={types[i]}>
            <ItemListView type={types[i]} items={filteredItems}/> 
          </div>
        )
      });  

    return (
      <div>
        {filteredItems}
      </div>
    )
  }

}

const fridgeState = (store) => {
  return {
    fridge: store.fridge
    items: store.items
  }
}

const dispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, dispatch)(fridgeView); 



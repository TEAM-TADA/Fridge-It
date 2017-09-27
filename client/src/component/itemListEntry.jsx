import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../actions/itemActions.js'

const Item = (props) => {
  console.log('item props:', props);
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        {props.quantity}
      </div>
      <button 
        className="addQuantity"
        onClick={props.itemActions.updateItem({
          name: props.name, 
          quantity: props.quantity + 1,
          type: props.type
        }, props.id)}
      ></button>
      <button 
        className="subtractQuantity"
        onClick={props.itemActions.updateItem({
          name: props.name,
          quantity: props.quantity - 1,
          type: props.type
        }, props.id)}
      ></button>
      <button 
        className="deleteItem"
        onClick={props.itemActions.deleteItem(props.id)}
      ></button>
    </div>
  )
}

// const state = (store) => {
//   fridge: store.fridge.fridge
//   items: store.fridge.items
// }

const dispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(null, dispatch)(Item);
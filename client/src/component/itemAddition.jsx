import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import * as itemActions from '../actions/itemActions.js'

class itemAddition extends Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const item = {};
    for (const field in this.refs) {
      item[field] = this.refs[field].value;
    }
    console.log('item being created', item);
    this.props.itemActions.addItem(item, 1); //change 1 to fridgeId
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            ref="name"
            className="itemName"
            placeholder="input name here"
            type="text"
          ></input>
          <select ref="type" className="itemType">
            <option>test</option>
          </select>
          <input
            ref="quantity"
            className="itemQuantity"
            type="number"
          ></input>
          <input
            type="submit"
            className="itemSubmit"
            value="Submit"
          ></input>
        </form>
      </div>
    )
  }
}

const fridgeState = (store) => {
  fridge: store.fridge.fridge
}

const dispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(null, dispatch)(itemAddition);
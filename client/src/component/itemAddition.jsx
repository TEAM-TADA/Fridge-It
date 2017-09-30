import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form, Button, Input, Select } from 'semantic-ui-react'

import * as itemActions from '../actions/itemActions.js'


class itemAddition extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    let type = '';
    
    const handleSubmit = () => {
      const item = {};
      
      let name = document.getElementById('inputItm');
      item.name = name.value;
      let qty = document.getElementById('inputQty');
      item.quantity = qty.value;
      item.type = type;
      console.log('item being created', item);
      this.props.itemActions.addItem(item, 1); //change 1 to fridgeId
      name = '';
      qty = '';
      type = '';
    }
    const options = [
      {
        key: 1, 
        text: "produce",
        value: "produce"
      },
      {
        key: 2, 
        text: "dairy",
        value: "dairy"
      },
      {
        key: 3, 
        text: "protein",
        value: "protein"
      },
      {
        key: 4, 
        text: "grains and starches",
        value: "grains"
      },
      {
        key: 5, 
        text: "frozen",
        value: "frozen"
      },
      {
        key: 6, 
        text: "miscellaneous",
        value: "misc"
      }
    ]; 

    const item = {};

    return (
      <Form 
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Form.Group inline>
          <Form.Input 
            //width={4} 
            placeholder='Type name here'
            id="inputItm"
          />
          <Form.Input 
            width={2}
            type='number'
            id="inputQty"
          />
          <Form.Select 
            //width={2}
            placeholder='Browse categories' 
            options={options} 
            id="inputType"
            onChange={(e, {value}) => {
              type = value;
            }}
          />
          <Form.Button 
           //width={1} 
            content='Go'/>
        </Form.Group>
      </Form>
    )
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
    itemActions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(fridgeState, fridgeDispatch)(itemAddition);
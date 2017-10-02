import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Card, Button, Input, Form } from 'semantic-ui-react';

import ItemListView from './itemListView.jsx';
import ItemAddition from './itemAddition.jsx';

import * as fridgeActions from '../actions/fridgeActions.js';
import * as itemActions from '../actions/itemActions.js';

import styles from '../../public/fridge.css'

class Fridge extends Component {
  constructor(props) {
    super(props);
    this.filterItems = this.filterItems.bind(this);
  }
  
  componentDidMount() {
    this.props.fridgeActions.getFridge(localStorage.getItem('visitorId') || localStorage.getItem('name'));
    let state = this;
    setTimeout(() => {
      state.props.itemActions.getItems(localStorage.getItem('fId'));
    }, 500);
  }

  filterItems(type) {
    return this.props.items.filter(item => {
      if (item.type === type) {
        return item; 
      }
    })
  }

  render() {
    let { fridge, fridgeActions, itemActions } = this.props;
    const types = [
      {
        name: "produce", 
        position: "top center",
        img: '',
        display: 'Produce'
      }, 
      {
        name: "dairy", 
        position: "top left",
        img: '',
        display: 'Dairy'
      },
      {
        name: "protein",
        position: "left center",
        img: '',
        display: 'Protein'
      },
      {
        name: "grains",
        position: "top right",
        img: '',
        display: 'Grains'
      }, 
      {
        name: "frozen",
        position: "right center",
        img: '',
        display: 'Frozen'
      }, 
      {
        name: "misc",
        position: "top left",
        img: '',
        display: 'Misc'
      }
    ]; 
    return (
      <div>
        <h3 className='ui dividing header'>{fridge.name && fridge.name.split('@')[0]}'s Fridge</h3>
        <div>
          <ItemAddition />
          <Form>
            <Form.Group inline>
              <Form.Input 
                id="inputFid"
                placeholder='Fridge ID'
              />
              <Form.Button content={'Switch fridge'}
                onClick={(e) => {
                  e.preventDefault();
                  fridgeActions.getFridge(document.getElementById('inputFid').value);
                  localStorage.setItem('visitorId', document.getElementById('inputFid').value);
                  location.reload();
                  document.getElementById('inputFid').value = '';
                }}
              />
            </Form.Group>
          </Form>
        </div>
        <div className={styles.container}>
          {types.map(type => {
              let filteredItems = this.filterItems(type.name);
                return (
                    <Popup
                      trigger={<div className={styles[type.name]}></div>}
                      flowing
                      hoverable
                      position={type.position}
                    >
                      <ItemListView actions={itemActions} type={type} items={filteredItems}/> 
                    </Popup>
                )
          })}
        </div>
      </div>
    )
  }
}

const fridgeState = (store) => {
  return {
    username: store.auth.username,
    fridge: store.fridge.fridge,
    items: store.items.items,
    posted: store.fridge.posted,
    fetched: store.fridge.fetched
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 
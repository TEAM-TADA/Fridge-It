import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props);
  }
  
  // addOne() {

  // }

  // subtractOne() {

  // }

  // delete() {

  // }
  
  render() {
    return (
      <div>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.quantity}
        </div>
      </div>
    )
  }
}

export default Item;
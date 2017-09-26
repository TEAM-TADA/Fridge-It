import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.quantity}
        {this.props.type}
      </div>
    )
  }
}
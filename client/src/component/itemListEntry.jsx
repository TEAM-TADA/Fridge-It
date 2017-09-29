import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const Item = (props) => {
  console.log('item props:', props);
  return (
    <div>
    <Table.Cell>
    {props.quantity}
    </Table.Cell>
    <Table.Cell textAlign="center">
        {props.name} 
    </Table.Cell>
    <Table.Cell singleLine>
      <Icon 
        size="small"
        onClick={() => {props.updateItem({
          name: props.name, 
          quantity: props.quantity + 1,
          type: props.type
        }, props.id)}}
        name="plus"
      ></Icon>
      <Icon 
        name="minus"
        size="small"
        onClick={() => {props.updateItem({
          name: props.name,
          quantity: props.quantity - 1,
          type: props.type
        }, props.id)}}
      ></Icon>
      <Icon 
        name="remove"
        size="small"
        onClick={()=> {props.deleteItem(props.id)}}
      ></Icon>
    </Table.Cell>
    </div>
  )
}



export default Item;
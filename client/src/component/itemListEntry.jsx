import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const Item = (props) => {
  console.log('item props:', props);
  return (
    <Table.Row>
      <Table.Cell textAlign="center">{props.quantity}</Table.Cell>
      <Table.Cell textAlign="left">{props.name}</Table.Cell>
      <Table.Cell>
          <Icon 
            size="small"
            onClick={() => {props.updateItem({
              name: props.name, 
              quantity: props.quantity + 1,
              type: props.type
            }, props.id)}}
            name="plus"
          ></Icon>
        </Table.Cell>
        <Table.Cell>
          <Icon 
            name="minus"
            size="small"
            onClick={() => {props.updateItem({
              name: props.name,
              quantity: props.quantity - 1,
              type: props.type
            }, props.id)}}
          ></Icon>
        </Table.Cell>
        <Table.Cell>
          <Icon 
            name="remove"
            size="small"
            onClick={()=> {props.deleteItem(props.id)}}
          ></Icon>
        </Table.Cell>
    </Table.Row>
  )
}



export default Item;
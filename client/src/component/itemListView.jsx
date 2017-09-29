import React from 'react';
import ItemListEntry from './itemListEntry.jsx';
import { Table } from 'semantic-ui-react';

const ItemList = (props) => {
  console.log('props passed down to item list', props);
  return (
    <Table celled textAlign="left">
      {props.items.map(item => (
        <ItemListEntry {...props.actions} name={item.name} quantity={item.quantity} type={item.type} id={item.id} key={item.id}/>
      ))}
    </Table> 
  )
}

export default ItemList; 

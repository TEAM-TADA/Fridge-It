import React from 'react'
import ItemListEntry from './itemListEntry.jsx'

const ItemList = (props) => {
  console.log('props passed down to item list', props);
  return (
    <div>
      {props.items.map(item => (
        <ItemListEntry name={item.name} quantity={item.quantity} type={item.type} id={item.id} key={item.id}/>
      ))}
    </div> 
  )
}

export default ItemList; 

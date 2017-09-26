import React from 'react'
import itemListEntry from './itemListEntry'

const itemList = (props) => {
  return (
    <div>
    {props.map(item => (
      <ItemListEntry name={item.name} quantity={item.quantity} type={item.type}/>
    ))}
    </div> 
  )
}

export default itemList; 
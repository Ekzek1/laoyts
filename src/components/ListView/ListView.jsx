import React from 'react';
import ShopItem from './ShopItem';
import './listView.css'

const ListView = ({items}) => {
  
  return (
    <div className='list__body'>
      {items.map((item, index) => 
        <ShopItem
          name = {item.name}
          color = {item.color}
          img = {item.img}
          price = {item.price}
          key = {index + 1}
        />
      )}
    </div>
  )
}

export default ListView
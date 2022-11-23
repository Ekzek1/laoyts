import React from 'react'
import './cardsView.css'
import ShopCard from './ShopCard'

const CardsView = ({cards}) => {

  return (
    <div className='cards__body'>
      {cards.map((item, index) => 
        <ShopCard
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

export default CardsView
import React from 'react';
import Button from '../ui/Button';
import './cardsView.css'

const ShopCard = ({name, color, img, price}) => {



  return (
    <div className='cards__item'>
      <h2 className='cards__title'>{name}</h2>
      <span className='cards__color'>{color}</span>
      <img src={img} alt="imgSneakers" className='cards__img'/>
      <div className="cards__add">
        <span className='cards__price'>${price}</span>
        <Button/>
      </div>
    </div>
  )
}

export default ShopCard
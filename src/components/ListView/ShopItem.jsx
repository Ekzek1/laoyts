import React from 'react'
import Button from '../ui/Button'

const ShopItem =({name, color, img, price}) => {



  return (
    <div className='list__item'>
      <img src={img} alt="imgSneakers" className='list__img'/>
      <h2 className='list__title'>{name}</h2>
      <span className='list__color'>{color}</span>
      <span className='list__price'>${price}</span>
      <Button/>
    </div>
  )


}

export default ShopItem
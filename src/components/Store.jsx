import React, { useState } from 'react';
import '../App.css';
import IconSwitch from './Iconswitch/IconSwitch';
import { products } from './products';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

const Store = () => {

  const [icon, setIcon] = useState('view_list');

  const listProducts = products;

  return (
    <div className='wrapper' >
      <IconSwitch 
        icon = {icon}
        onSwitch = {() => {icon == 'view_list' ? setIcon('view_module') : setIcon('view_list')}}
      />
      { icon == 'view_list' 
        ? <CardsView cards = {listProducts}/>
        : <ListView items = {listProducts} />
      }
    </div>
  )
}

export default Store
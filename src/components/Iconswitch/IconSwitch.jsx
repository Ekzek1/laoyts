import React from 'react'
import './iconSwitch.css'

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <span onClick = {onSwitch} className= {["material-icons", 'icon'].join(' ')}>{icon}</span>
  )
}

export default IconSwitch
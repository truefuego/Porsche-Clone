import React from 'react'
import './ButtonFilled.css'

const ButtonFilled = ({image,text,link}) => {
  return (
    <div className='button-filled'>
      <img className='button-filled-image' src={image} alt='img'/>
      <p className='button-filled-text'>{text}</p>
    </div>
  )
}

export default ButtonFilled
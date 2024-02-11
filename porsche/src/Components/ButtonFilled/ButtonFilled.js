import React from 'react'
import './ButtonFilled.css'
import { useNavigate } from 'react-router-dom'

const ButtonFilled = ({image,text,link}) => {
  const navigate = useNavigate()
  return (
    <div className='button-filled' onClick={() => navigate(link)}>
      <img className='button-filled-image' src={image} alt='img'/>
      <p className='button-filled-text'>{text}</p>
    </div>
  )
}

export default ButtonFilled
import React, { useState } from 'react'
import './ButtonHollow.css'
import { useNavigate } from 'react-router-dom';

const ButtonHollow = ({image,hoverImage,text,link}) => {
  const navigate = useNavigate()
  const [hovering,setHovering] = useState(false);
  const handleHovering = () => {
    setHovering(!hovering)
  }
  return (
    <div className='button-hollow' onMouseEnter={handleHovering} onMouseLeave={handleHovering} onClick={() => navigate(link)}>
        <img className='button-hollow-image' src={hovering?hoverImage:image} alt='img'/>
        <p className='button-hollow-text'>{text}</p>
    </div>
  )
}

export default ButtonHollow
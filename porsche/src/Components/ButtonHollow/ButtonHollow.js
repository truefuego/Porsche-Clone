import React, { useState } from 'react'
import './ButtonHollow.css'

const ButtonHollow = ({image,hoverImage,text,link}) => {
  const [hovering,setHovering] = useState(false);
  const handleHovering = () => {
    setHovering(!hovering)
  }
  return (
    <div className='button-hollow' onMouseEnter={handleHovering} onMouseLeave={handleHovering}>
        <img className='button-hollow-image' src={hovering?hoverImage:image} alt='img'/>
        <p className='button-hollow-text'>{text}</p>
    </div>
  )
}

export default ButtonHollow
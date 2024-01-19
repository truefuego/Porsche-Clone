import React, { useState } from 'react'
import './CarsCarouselCardButton.css'
import RightLinkArrow from '../../../../Assets/Images/Buttons/link-arrow-white.png'
import LinkArrowRed from '../../../../Assets/Images/Navigation/LinkArrowRed.png'

const CarsCarouselCardButton = ({text}) => {
  const [hovering,setHovering] = useState(false)
  return (
    <div className='cars-carousel-card-button' onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
      {hovering ? (<img src={LinkArrowRed}/>) : (<img src={RightLinkArrow}/>)}
      <p>{text}</p>
    </div>
  )
}

export default CarsCarouselCardButton
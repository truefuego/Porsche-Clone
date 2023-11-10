import React from 'react'
import './CarouselCard.css'
import LinkArrow from '../../../Assets/Images/Navigation/LinkArrowRed.png'
import HorizontalSpacer from '../../HorizontalSpacer'

const CarouselCard = ({image,title,tagline,link}) => {
  const handleClick = () => {
    
  }
  return (
    <div className='carousel-card'>
      <img className='carousel-image' src={image}/>
      <div className='carousel-card-content'>
        {link !== undefined ? (<img className="carousel-card-content-image" src={LinkArrow}/>) : (<HorizontalSpacer size={'12'}/>)}
        <div className='carousel-card-content-text' onClick={handleClick}>
          <p className='carousel-card-content-title '>
            {title}
          </p>
          <p className='carousel-card-content-tagline'>
            {tagline}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
import React from 'react'
import './CarouselCard.css'

const CarouselCard = ({image}) => {
  return (
    <div>
        <img className='carousel-image' src={image}/>
    </div>
  )
}

export default CarouselCard
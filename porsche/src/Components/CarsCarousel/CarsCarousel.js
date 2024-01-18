import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CarsCarousel.css'
import Carousel_Background from '../../Assets/Images/carousel-background.png'

const CarsCarousel = () => {
  const {modelName} = useParams();
  return (
    <div className='cars-carousel'>
      <img src={Carousel_Background} className='cars-carousel-background' alt='carousel-backgorund'/>
      <div className='cars-carousel-data'>
        <div className='cars-carousel-filters'>filters</div>
        <div className='cars-carousel-cards'>cards</div>
        <div className='cars-carousel-indexes'>indexes</div>
      </div>
    </div>
  )
}

export default CarsCarousel
import React from 'react'
import './CarsCarouselCard.css'
import CarsCarouselCardButton from './CarsCarouselCardButton/CarsCarouselCardButton'

const CarsCarouselCard = ({carData}) => {
  return (
    <div className='cars-carousel-card'>
      <p className='cars-carousel-card-name'>{carData.name}</p>
      <p className='cars-carousel-card-price'>from INR {(carData.price).toLocaleString('en-US')}</p>
      <img src={carData.carousel_image}/>
      <div className='cars-carousel-card-car-data'>
        <div className='cars-carousel-card-car-data-block'>
          <div className='cars-carousel-card-car-data-value'>{carData.kws} kW/{carData.horsepower} PS</div>
          <div className='cars-carousel-card-car-data-attribute'>Power (kW)/Power (PS)</div>
        </div>
        <div className='cars-carousel-card-car-data-block'>
          <div className='cars-carousel-card-car-data-value'>{carData.acceleration} s</div>
          <div className='cars-carousel-card-car-data-attribute'>Acceleration 0 - 100 km/h</div>
        </div>
        <div className='cars-carousel-card-car-data-block'>
          <div className='cars-carousel-card-car-data-value'>{carData.top_speed} km/h</div>
          <div className='cars-carousel-card-car-data-attribute'>Top Speed</div>
        </div>
      </div>
      <div className='cars-carousel-card-button-section'>
        <CarsCarouselCardButton text={'Technical Specs'}/>
        <CarsCarouselCardButton text={'Book your test drive'}/>
        <CarsCarouselCardButton text={'Build Your Own'}/>
        <CarsCarouselCardButton text={'Compare'}/>
      </div>
    </div>
  )
}

export default CarsCarouselCard
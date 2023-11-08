import React from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard/CarouselCard'
import Porsche_India from './Images/porsche-india.webp'
import Timeless_Macine from './Images/timeless-machine.webp'
import Drive_Defines_US from './Images/drive-defines-us.webp'
import Contemporary_Dynamic_And_Urban from './Images/contemporary-dynamic-and-urban.webp'

const Carousel = () => {
  return (
    <div>
        <CarouselCard image={Porsche_India} />
        <CarouselCard image={Timeless_Macine} />
        <CarouselCard image={Drive_Defines_US} />
        <CarouselCard image={Contemporary_Dynamic_And_Urban} />
    </div>
    // After 768 dont show the navigation buttons 
  )
}

export default Carousel
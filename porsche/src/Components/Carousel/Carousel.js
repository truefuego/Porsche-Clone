import React, { useRef, useState } from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard/CarouselCard'
import Porsche_India from './Images/porsche-india.webp'
import Timeless_Machine from './Images/timeless-machine.webp'
import Drive_Defines_US from './Images/drive-defines-us.webp'
import Contemporary_Dynamic_And_Urban from './Images/contemporary-dynamic-and-urban.webp'
import Left from '../../Assets/Images/Navigation/Left.png'
import Right from '../../Assets/Images/Navigation/Right.png'

const Cards = [
  {
    id: 0,
    image: Porsche_India
  },
  {
    id: 1,
    image: Timeless_Machine
  },
  {
    id: 2,
    image: Drive_Defines_US
  },{
    id: 3,
    image: Contemporary_Dynamic_And_Urban
  }
]

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <CarouselCard image={Porsche_India} title={'Porsche India.'} tagline={'Know of our Porsche Centre network in India.'} link={'https://dealer.porsche.com/in/india/'}/>
        </div>
        <div className="carousel-item">
          <CarouselCard image={Timeless_Machine} title={'Timeless Machine.'} tagline={'The 911 Carrera S.'} link={'https://www.porsche.com/middle-east/_india_/models/911/911-models/carrera-s/'}/>
        </div>
        <div className="carousel-item">
          <CarouselCard image={Contemporary_Dynamic_And_Urban} title={'Contemporary, dynamic and urban.'} tagline={'The Macan T.'}/>
        </div>
        <div className="carousel-item">
          <CarouselCard image={Drive_Defines_US} title={'Drive defines us.'} tagline={'The Panamera 4S E-Hybrid.'}/>
        </div>
      </div>
      <div className='carousel-buttons'>
        <button classname="carousel-button" href="#carouselExampleIndicators" data-slide="prev">
          <img className='carousel-button-image' src={Left} alt='left'/>
        </button>
        <button classname="carousel-button" href="#carouselExampleIndicators" data-slide="next">
          <img className='carousel-button-image' src={Right} alt='left'/>
        </button>
      </div>

  </div>

  );

}

export default Carousel

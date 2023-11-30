import React from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard/CarouselCard'
import Porsche_India from './Images/porsche-india.webp'
import Timeless_Machine from './Images/timeless-machine.webp'
import Choose_Boldly from './Images/choose-boldly.webp'
import The_One_And_Always from './Images/the-one-and-always.webp'
import Left from '../../Assets/Images/Navigation/Left.png'
import Right from '../../Assets/Images/Navigation/Right.png'

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
          <CarouselCard image={Choose_Boldly} title={'Choose boldly.'} tagline={'The new Panamera.'}/>
        </div>
        <div className="carousel-item">
          <CarouselCard image={The_One_And_Always} title={'The one and always.'} tagline={'The new 911 S/T.'} link={'https://www.porsche.com/middle-east/_india_/models/911/911-st/911-st/'}/>
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

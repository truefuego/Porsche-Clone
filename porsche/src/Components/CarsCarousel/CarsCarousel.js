import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CarsCarousel.css'
import Carousel_Background from '../../Assets/Images/carousel-background.png'
import { Cars } from '../../Stores/Cars';
import CarsCarouselCard from './CarsCarouselCard/CarsCarouselCard';
import LeftArrow from '../../Assets/Images/Navigation/Left.png'
import RightArrow from '../../Assets/Images/Navigation/Right.png'
import HorizontalSpacer from '../HorizontalSpacer';

const CarsCarousel = () => {
  const { modelName, modelHeader } = useParams();
  const [carData,setCarData] = useState([]);
  const [filterType,setFilterType] = useState([]);

  const containerRef = useRef(null);
  const [clicks,setClicks] = useState(0)

  function scrollToNextElement() {
    const container = containerRef.current;
    if (container) {
      setClicks(clicks + 1)
      const currentScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth / 1.972;
      const nextElementPosition = currentScrollLeft + containerWidth;
      container.scrollTo({ left: nextElementPosition, behavior: 'smooth' });
    }
  }

  function scrollToPreviousElement() {
    const container = containerRef.current;
    if (container) {
      setClicks(clicks - 1)
      const currentScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth / 1.972;
      const nextElementPosition = currentScrollLeft - containerWidth;
      container.scrollTo({ left: nextElementPosition, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    let tempModelHeader = "";
    for(let i = 0 ; i < modelHeader.length ; i++) {
      if(modelHeader[i] === '-') {
        tempModelHeader += ' '
        tempModelHeader += modelHeader[i+1].toUpperCase()
        i++;
      }
      else {
        tempModelHeader += modelHeader[i]
      }
    }
    const tempCarsData = Cars.filter((item) => item.model === modelName).filter((item) => item.header === tempModelHeader);
    console.log(tempCarsData)
    setCarData(tempCarsData)
  },[])

  return (
    <div className='cars-carousel'>
      <img src={Carousel_Background} className='cars-carousel-background' alt='carousel-backgorund'/>
      <div className='cars-carousel-cards-navigator'>
        {clicks !== 0 && (<button onClick={() => scrollToPreviousElement()}><img src={LeftArrow}/></button>)}
        <div />
        {clicks !== carData.length - 1 && (<button onClick={() => scrollToNextElement()}><img src={RightArrow}/></button>)}
      </div>
      <div className='cars-carousel-data'>
        <div className='cars-carousel-filters'>
          <button className='cars-carousel-filters-buttons selected'>All</button>
          <button className='cars-carousel-filters-buttons'>Coupé</button>
          <button className='cars-carousel-filters-buttons'>Cabriolet</button>
        </div>
        <div className='cars-carousel-cards snaps-inline-carousel' ref={containerRef}>
          <div className='card-carousel-card-padder'/>
          {carData.map((car) => <CarsCarouselCard carData={car}/>)}
          <div className='card-carousel-card-padder'/>
        </div>
        <div className='cars-carousel-indexes'>indexes</div>
      </div>
    </div>
  )
}

export default CarsCarousel
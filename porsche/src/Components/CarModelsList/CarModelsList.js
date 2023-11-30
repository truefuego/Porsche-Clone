import React, { useRef, useState } from 'react'
import './CarModelsList.css'
import Porsche718 from './Images/porsche-718.webp'
import Porsche911 from './Images/porsche-911.webp'
import PorscheCayenne from './Images/porsche-cayenne.webp'
import PorscheMacan from './Images/porsche-macan.webp'
import PorschePanamera from './Images/porsche-panamera.webp'
import PorscheTaycan from './Images/porsche-taycan.webp'
import CarModelCard from './CarModelCard/CarModelCard'
import LeftScrollImage from '../../Assets/Images/Navigation/Left.png'
import RightScrollImage from '../../Assets/Images/Navigation/Right.png'
import HorizontalSpacer from '../HorizontalSpacer'

const cars = [
  {
    name: '718',
    image: Porsche718,
    link: 'https://finder.porsche.com/in/en-IN/search/718?model=718'
  },
  {
    name: '911',
    image: Porsche911,
    link: 'https://finder.porsche.com/in/en-IN/search/911?model=911'
  },
  {
    name: 'Taycan',
    image: PorscheTaycan,
    link: 'https://finder.porsche.com/in/en-IN/search/taycan?model=taycan'
  },
  {
    name: 'Panamera',
    image: PorschePanamera,
    link: 'https://finder.porsche.com/in/en-IN/search/panamera?model=panamera'
  },
  {
    name: 'Macan',
    image: PorscheMacan,
    link: 'https://finder.porsche.com/in/en-IN/search/macan?model=macan'
  },
  {
    name: 'Cayenne',
    image: PorscheCayenne,
    link: 'https://finder.porsche.com/in/en-IN/search/cayenne?model=cayenne'
  },
]

const pointerList = [
  {
    index: 0
  },
  {
    index: 1
  },
  {
    index: 2
  },
  {
    index: 3
  }
];

const CarModelsList = () => {
  const containerRef = useRef(null);
  const [clicks,setClicks] = useState(0)
  function scrollToNextElement() {
    const container = containerRef.current;
    if (container) {
      setClicks(clicks + 1)
      const currentScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth / 3;
      const nextElementPosition = currentScrollLeft + containerWidth;
      container.scrollTo({ left: nextElementPosition, behavior: 'smooth' });
    }
  }

  function scrollToPreviousElement() {
    const container = containerRef.current;
    if (container) {
      setClicks(clicks - 1)
      const currentScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth / 3;
      const nextElementPosition = currentScrollLeft - containerWidth;
      container.scrollTo({ left: nextElementPosition, behavior: 'smooth' });
    }
  }

  return (
    <div>
      <p className='car-models-list-header'>Find a Porsche near you</p>
      <div className='car-models-list-wrapper'>
        {clicks === 0 ? 
          (<HorizontalSpacer size={20} />) : 
          (<div className='car-models-list-wrapper-pointer' onClick={scrollToPreviousElement}>
            <img className='car-models-list-wrapper-pointer-image' src={LeftScrollImage} alt='poniter-left'/>
          </div>)
        }
        <div className='car-models-list snaps-inline' ref={containerRef}>
          {cars.map((item) => (<CarModelCard key={item.name} image={item.image} name={item.name} link={item.link} />))}
        </div>
        {clicks === 3 ? 
          (<HorizontalSpacer size={20} />) : 
          (<div className='car-models-list-wrapper-pointer' onClick={scrollToNextElement}>
            <img className='car-models-list-wrapper-pointer-image' src={RightScrollImage} alt='poniter-right'/>
          </div>)
        }
      </div>
      <div className='car-models-poniter'>
        {pointerList.map((item) => clicks !== item.index ? (<div className='car-model-list-pointer'/>) : (<div className='car-model-list-pointer-active'/>) )}
      </div>
    </div>
  )
}

export default CarModelsList
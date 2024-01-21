import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CarsCarousel.css'
import Carousel_Background from '../../Assets/Images/carousel-background.png'
import { Cars } from '../../Stores/Cars';
import CarsCarouselCard from './CarsCarouselCard/CarsCarouselCard';
import LeftArrow from '../../Assets/Images/Navigation/Left.png'
import RightArrow from '../../Assets/Images/Navigation/Right.png'
import { HeaderUrlMaps, ModelUrlMaps } from '../../Stores/UrlMaps';
import LeftArrowWhite from '../../Assets/Images/Buttons/link-arrow-white-left.png'
import RightArrowWhite from '../../Assets/Images/Buttons/link-arrow-white.png'

const CarsCarousel = () => {
  const { modelName, modelHeader } = useParams();
  const [carData,setCarData] = useState([]);
  const [originalCarData,setOriginalCarData] = useState([]);
  const [bodyDesign,setBodyDesign] = useState(['All']);
  const [filterType,setFilterType] = useState('All');

  const [indexes,setIndexes] = useState([])

  const containerRef = useRef(null);
  const [clicks,setClicks] = useState(0)

  const [hoveringLeft,setHoveringLeft] = useState(false)
  const [hoveringRight,setHoveringRight] = useState(false)

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

  function scrollToElement(index) {
    const container = containerRef.current
    const currentIndex = clicks;
    const designatedIndex = index;
    if(container) {
      let offsetIndex = designatedIndex - currentIndex 
      const currentScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth / 1.972;
      const nextElementPosition = currentScrollLeft + containerWidth * offsetIndex;
      container.scrollTo({ left: nextElementPosition, behavior: 'smooth' });
      setClicks(index)
    }
  }

  useEffect(() => {
    let tempIndexes = []
    let tempBodyDesign = ['All']
    let tempCarsData = Cars.filter((item) => item.model === ModelUrlMaps[modelName]).filter((item) => item.header === HeaderUrlMaps[modelHeader])
    for(let i = 0 ; i < tempCarsData.length ; i++) {
      if(tempBodyDesign.indexOf(tempCarsData[i].body_design) === -1) {
        tempBodyDesign.push(tempCarsData[i].body_design)
      }
    }
    scrollToElement(-clicks)
    setClicks(0)
    setBodyDesign(tempBodyDesign)
    setOriginalCarData(tempCarsData)
    let tempFilteredCarsData = tempCarsData
    if(filterType !== 'All') {
      tempFilteredCarsData = tempCarsData.filter((item) => item.body_design === filterType)
    }
    for(let i = 0 ; i < tempFilteredCarsData.length ; i++) {
      tempFilteredCarsData[i]['index'] = i;
      tempIndexes.push({'index':i});
    }
    setCarData(tempFilteredCarsData)
    setIndexes(tempIndexes)
  },[modelHeader,modelName,filterType])

  return (
    <div className='cars-carousel'>
      <img src={Carousel_Background} className='cars-carousel-background' alt='carousel-backgorund'/>
      <div className='cars-carousel-cards-navigator'>
        {(clicks !== 0) && (<button onClick={() => scrollToPreviousElement()} className='cars-carousel-cards-navigator-button'><img className='hovering-arrow-navigator' src={LeftArrow} alt='left-arrow'/></button>)}
        <div />
        {(clicks !== carData.length - 1) && (<button onClick={() => scrollToNextElement()} className='cars-carousel-cards-navigator-button'><img className='hovering-arrow-navigator' src={RightArrow} alt='right-arrow'/></button>)}
      </div>
      <div className='cars-carousel-data'>
        <div className='cars-carousel-filters'>
          {bodyDesign.length > 2 && bodyDesign.map((item) => <div onClick={() => setFilterType(item)} className={`cars-carousel-filters-buttons ${item === filterType ? 'selected' : ''}`}>{item}</div>)}
        </div>
        <div className='cars-carousel-cards snaps-inline-carousel' ref={containerRef}>
          <div className='card-carousel-card-padder'/>
          {carData.map((car) => <CarsCarouselCard key={car.name} carData={car} index={clicks}/>)}
          <div className='card-carousel-card-padder'/>
        </div>
        {indexes.length > 1 && (<div className='cars-carousel-indexes'>{indexes.map((item) => clicks !== item.index ? (<div key={item.index} className='cars-carousel-indexes-pointers' onClick={() => {scrollToElement(item.index)}}><div className='inactive-pointer'/></div>) : (<div className='cars-carousel-indexes-pointers'><div className='active-pointer'/></div>))}</div>)}
      </div>
    </div>
  )
}

export default CarsCarousel
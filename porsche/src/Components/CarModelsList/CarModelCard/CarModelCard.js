import React from 'react'
import './CarModelCard.css'
import LinkArrowWhite from '../../../Assets/Images/Buttons/link-arrow-white.png'

const CarModelCard = ({name,image,link}) => {
  const goToLink = () => {
    window.open(link)
  }
  return (
    <div className='car-model-card'>
      <img className='car-model-card-image' src={image} alt={name}/>
      <button className='car-model-card-button' onClick={goToLink}>
        <img src={LinkArrowWhite} alt='pointer'/>
        <p className='car-model-card-button-find-button'>Find {name} Models</p>
      </button>
    </div>
  )
}

export default CarModelCard
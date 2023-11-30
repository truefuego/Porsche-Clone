import React from 'react'
import './ShoppingToolsCard.css'
import LinkArrowRed from '../../../Assets/Images/Navigation/LinkArrowRed.png'

const ShoppingToolsCard = ({image,name,link}) => {
  return (
    <div className='shopping-tools-card'>
        <img className='shopping-tools-image' src={image} alt={name}/>
        <div className='shopping-tools-info'>
            <img src={LinkArrowRed} alt='link'/>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default ShoppingToolsCard
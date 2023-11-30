import React from 'react'
import './ModelsCard.css'
import ButtonFilled from '../../ButtonFilled/ButtonFilled'
import ButtonHollow from '../../ButtonHollow/ButtonHollow'
import BoxLink from '../../../Assets/Images/Buttons/go-to-link.png'
import ArrowLink from '../../../Assets/Images/Buttons/link-arrow-white.png'
import ArrowLinkHover from '../../../Assets/Images/Navigation/LinkArrowRed.png'

const ModelsCard = ({image,price,name,link}) => {
  return (
    <div className='models-card'>
        <img className='models-card-image' src={image} alt={name}/>
        <div className='models-card-info shadow'>
            <div className='models-card-info-data'>
                <p className='models-card-info-name'>{name}</p>
                <p className='models-card-info-price'>from INR {price}</p>
            </div>
            <div className='models-card-info-link'>
                <ButtonFilled image={BoxLink} text={'Build Your Own'} link={''}/>
                <ButtonHollow image={ArrowLink} text={'All Models'} link={''} hoverImage={ArrowLinkHover}/>
            </div>
        </div>
    </div>
  )
}

export default ModelsCard
import React from 'react'
import './ModelsCard.css'
import ButtonFilled from '../../ButtonFilled/ButtonFilled'
import ButtonHollow from '../../ButtonHollow/ButtonHollow'
import BoxLink from '../../../Assets/Images/Buttons/go-to-link.png'
import ArrowLink from '../../../Assets/Images/Buttons/link-arrow-white.png'
import ArrowLinkHover from '../../../Assets/Images/Navigation/LinkArrowRed.png'
import { useNavigate } from 'react-router-dom'

const ModelsCard = ({image,price,name,link1,link2}) => {
  const navigate = useNavigate()
  return (
    <div className='models-card'>
        <img className='models-card-image' src={image} alt={name}/>
        <div className='models-card-info shadow'>
            <div className='models-card-info-data'>
                <p className='models-card-info-name'>{name}</p>
                <p className='models-card-info-price'>from INR {price}</p>
            </div>
            <div className='models-card-info-link'>
                <ButtonFilled image={BoxLink} text={'Build Your Own'} link={link2}/>
                <ButtonHollow image={ArrowLink} text={'All Models'} link={link1} hoverImage={ArrowLinkHover}/>
            </div>
        </div>
    </div>
  )
}

export default ModelsCard
import React from 'react'
import './ModelListCard.css'
import HorizontalSpacer from '../../../Components/HorizontalSpacer'

const ModelListCard = ({car}) => {
    const asterisk = car.footnote ? '*' : ''
    return (
        <div className='model-list-card'>
            <img className='model-list-card-image' src={car.image} alt={car.name}/>
            <HorizontalSpacer size={10} />
            <p className='model-list-card-name'>{car.name}</p>
            {car.new && (<p className='model-list-card-new'>New</p>)}
            <p className='model-list-card-price'>from INR {(car.price).toLocaleString('en-IN')} {asterisk}</p>
            {car.footnote && (<p className='model-list-card-footnote'>* European specifications shown below. Market specific values to be confirmed upon homologation.</p>)}
        </div>
    )
}

export default ModelListCard
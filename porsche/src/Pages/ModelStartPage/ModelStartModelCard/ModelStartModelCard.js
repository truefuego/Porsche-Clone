import React from 'react'
import './ModelStartModelCard.css'
import Button_Image from '../../../Assets/Images/Navigation/LinkArrowRed.png'

const ModelStartModelCard = ({ModelImage,ModelName,ModelLink}) => {
  return (
    <div className='model-start-model-card'>
        <img src={ModelImage} alt={ModelName}/>
        <div className='model-start-model-card-separator'/>
        <div className='container-center'>
            <div className='model-start-model-card-info'>
                <img src={Button_Image} alt={'link'}/>
                <p>{ModelName}</p>
            </div>
        </div>
    </div>
  )
}

export default ModelStartModelCard
import React from 'react'
import './Models.css'
import Porsche718 from './Images/718.webp';
import Porsche911 from './Images/911.webp';
import PorscheTaycan from './Images/taycan.webp';
import PorschePanamera from './Images/panamera.webp';
import PorscheMacan from './Images/macan.webp';
import PorscheCayenne from './Images/cayenne.webp';
import ModelsCard from './ModelsCard/ModelsCard';
import { useNavigate } from 'react-router-dom';

const ModelsList = [
    {
        model: '718',
        price: '14,772,000',
        link1: '/models/718/718-models',
        link2: '/models',
        image: Porsche718
    },
    {
        model: '911',
        price: '18,646,000',
        link1: '/models/911/911-models',
        link2: '/models',
        image: Porsche911
    },
    {
        model: 'Taycan',
        price: '16,093,000*',
        link1: '/models/taycan/taycan-models',
        link2: '/models',
        image: PorscheTaycan
    },
    {
        model: 'Panamera',
        price: '15,804,000',
        link1: '/models/panamera/panamera-models',
        link2: '/models',
        image: PorschePanamera
    },
    {
        model: 'Macan',
        price: '8,806,000',
        link1: '/models/macan/macan-models',
        link2: '/models',
        image: PorscheMacan
    },
    {
        model: 'Cayenne',
        price: '13,561,000',
        link1: '/models/cayenne/cayenne-models',
        link2: '/models',
        image: PorscheCayenne
    }
]

const Models = () => {
  return (
    <div className='models'>
        <p className='models-header'>Models</p>
        <div className='models-grid'>
            {ModelsList.map((card) => (<ModelsCard key={card.name} image={card.image} link1={card.link1} link2={card.link2} name={card.model} price={card.price} />))}
        </div>
        <p className='models-footer'>* European specifications shown below. Market specific values to be confirmed upon homologation.</p>
    </div>
  )
}

export default Models
import React from 'react'
import './Discover.css'
import Porsche_E_Performance from './Images/porsche-e-performance.webp'
import Porsche_Exclusive_Manufaktur from './Images/porsche-exclusive-manufaktur.webp'
import Porsche_Finder from './Images/porsche-finder.webp'
import Porsche_Lifestyle from './Images/porsche-lifestyle.webp'
import LinkArrowRed from '../../Assets/Images/Navigation/LinkArrowRed.png'

const data =[
    {
        name: 'Porsche E-Performance.',
        image: Porsche_E_Performance
    },
    {
        name: 'Porsche Finder.',
        image: Porsche_Finder
    },
    {
        name: 'Porsche Lifestyle.',
        image: Porsche_Lifestyle
    },
    {
        name: 'Porsche Exclusive Manufaktur.',
        image: Porsche_Exclusive_Manufaktur
    }
]

const Discover = () => {
  return (
    <div className='container-center'>
        <div className='discover'>
            <p className='discover-header'>Discover</p>
            <div className='discover-wrapper'>
                {data.map((item) => (
                    <div className='discover-card'>
                        <img className='discover-card-image' src={item.image} alt={item.name}/>
                        <div className='discover-card-links'>
                            <img src={LinkArrowRed} alt='arrow'/>
                            <p className='discover-card-links-text'>{item.name}</p>
                        </div>
                    </div>))
                }
            </div>
        </div> 
    </div>
  )
}

export default Discover
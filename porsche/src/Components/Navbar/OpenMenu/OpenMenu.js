import React, { useState } from 'react'
import './OpenMenu.css'
import LinkArrow from '../../../Assets/Images/Buttons/left-link-arrow.png'
import Search_Icon from '../../../Assets/Images/Buttons/search-icon.png'
import Location from '../../../Assets/Images/Buttons/location.png'
import Porsche718 from './Images/718.webp'
import Porsche911 from './Images/911.webp'
import PorscheTaycan from './Images/taycan.webp'
import PorschePanamera from './Images/panamera.webp'
import PorscheMacan from './Images/macan.webp'
import PorscheCayenne from './Images/cayenne.webp'
import { useNavigate } from 'react-router-dom'

const OpenMenu = () => {
    const navigate = useNavigate()
    const [clicked,setClicked] = useState('Models')
  return (
    <div className='open-menu'>
        <div className='open-menu-left-area'>
            <div className={`open-menu-left-button ${clicked === "Models"? 'is-clicked' : ''}`} onClick={() => setClicked('Models')}>
                <p className='open-menu-left-button-text'>Models</p>
                <img className='open-menu-left-button-image' src={LinkArrow} alt='link'/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Vehicle Purchase"? 'is-clicked' : ''}`} onClick={() => setClicked('Vehicle Purchase')}>
                <p className='open-menu-left-button-text'>Vehicle Purchase</p>
                <img className='open-menu-left-button-image' src={LinkArrow} alt='link'/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Services"? 'is-clicked' : ''}`} onClick={() => setClicked('Services')}>
                <p className='open-menu-left-button-text'>Services</p>
                <img className='open-menu-left-button-image' src={LinkArrow} alt='link'/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Experience"? 'is-clicked' : ''}`} onClick={() => setClicked('Experience')}>
                <p className='open-menu-left-button-text'>Experience</p>
                <img className='open-menu-left-button-image' src={LinkArrow} alt='link'/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Find a Dealer"? 'is-clicked' : ''}`} onClick={() => setClicked('Find a Dealer')}>
                <p className='open-menu-left-button-text'>Find a Dealer</p>
                <img className='open-menu-left-button-image' src={LinkArrow} alt='link'/>
            </div>
        </div>
        <div className='open-menu-right-area'>
            {clicked === 'Models' && (
                <div className='open-menu-right-content'>
                    <img className='open-menu-right-content-image' src={Porsche718} alt='Porsche718' onClick={() => navigate('/models/718/718-models')}/>
                    <img className='open-menu-right-content-image' src={Porsche911} alt='Porsche911' onClick={() => navigate('/models/911/911-models')}/>
                    <img className='open-menu-right-content-image' src={PorscheTaycan} alt='PorscheTaycan' onClick={() => navigate('/models/taycan/taycan-models')}/>
                    <img className='open-menu-right-content-image' src={PorschePanamera} alt='PorschePanamera' onClick={() => navigate('/models/panamera/panamera-models')}/>
                    <img className='open-menu-right-content-image' src={PorscheMacan} alt='PorscheMacan' onClick={() => navigate('/models/macan/macan-models')}/>
                    <img className='open-menu-right-content-image' src={PorscheCayenne} alt='PorscheCayenne' onClick={() => navigate('/models/cayenne/cayenne-models')}/>
                </div>
            )}
            {clicked === 'Vehicle Purchase' && (
                <div className='open-menu-right-content-text-area'>
                    <p className='open-menu-right-content-text' onClick={() => navigate('/model-start')}>Configure</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('/models')}>Compare Models</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Find New and Pre-owned Vehicles</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Saved Vehicles</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('/aboutporsche/e-performance/')}>E-Mobility & E-Performance</p>
                </div>
            )}
            {clicked === 'Services' && (
                <div className='open-menu-right-content-text-area'>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Factory Delivery</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Tequipment - Genuine Accesories</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Exclusive Manufaktur - Individual Vehicles</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Approved - Pre-owned Cars & Warranty</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Service & Maintenance</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Classic - Service & Parts</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Lifestyle - Fashion & Accessories</p>
                </div>
            )}
            {clicked === 'Experience' && (
                <div className='open-menu-right-content-text-area'>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Motorsport</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Porsche Experience - Driving & Track Experience</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Porsche Clubs</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Golf</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Christophorus - The Porsche Magazine</p>
                    <p className='open-menu-right-content-text' onClick={() => navigate('')}>Porsche Museum</p>
                </div>
            )}
            {clicked === 'Find a Dealer' && (
                <div className='open-menu-right-content'>
                    <div className='open-menu-find-a-dealer-zip-code'>
                        <input placeholder={'Zip code or town'}/>
                        <img src={Search_Icon} alt='search-icon'/>
                    </div>
                    <p>or</p>
                    <div className='open-menu-find-a-dealer-location'>
                        <img src={Location} alt='search-icon'/>
                        <p>Use current location</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default OpenMenu
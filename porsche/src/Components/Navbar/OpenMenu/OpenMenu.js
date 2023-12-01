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

const OpenMenu = () => {
    const [clicked,setClicked] = useState('Models')
  return (
    <div className='open-menu'>
        <div className='open-menu-left-area'>
            <div className={`open-menu-left-button ${clicked === "Models"? 'is-clicked' : ''}`} onClick={() => setClicked('Models')}>
                <p className='open-menu-left-button-text'>Models</p>
                <img className='open-menu-left-button-image' src={LinkArrow}/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Vehicle Purchase"? 'is-clicked' : ''}`} onClick={() => setClicked('Vehicle Purchase')}>
                <p className='open-menu-left-button-text'>Vehicle Purchase</p>
                <img className='open-menu-left-button-image' src={LinkArrow}/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Services"? 'is-clicked' : ''}`} onClick={() => setClicked('Services')}>
                <p className='open-menu-left-button-text'>Services</p>
                <img className='open-menu-left-button-image' src={LinkArrow}/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Experience"? 'is-clicked' : ''}`} onClick={() => setClicked('Experience')}>
                <p className='open-menu-left-button-text'>Experience</p>
                <img className='open-menu-left-button-image' src={LinkArrow}/>
            </div>
            <div className={`open-menu-left-button ${clicked === "Find a Dealer"? 'is-clicked' : ''}`} onClick={() => setClicked('Find a Dealer')}>
                <p className='open-menu-left-button-text'>Find a Dealer</p>
                <img className='open-menu-left-button-image' src={LinkArrow}/>
            </div>
        </div>
        <div className='open-menu-right-area'>
            {clicked === 'Models' && (
                <div className='open-menu-right-content'>
                    <img className='open-menu-right-content-image' src={Porsche718}/>
                    <img className='open-menu-right-content-image' src={Porsche911}/>
                    <img className='open-menu-right-content-image' src={PorscheTaycan}/>
                    <img className='open-menu-right-content-image' src={PorschePanamera}/>
                    <img className='open-menu-right-content-image' src={PorscheMacan}/>
                    <img className='open-menu-right-content-image' src={PorscheCayenne}/>
                </div>
            )}
            {clicked === 'Vehicle Purchase' && (
                <div className='open-menu-right-content-text-area'>
                    <p className='open-menu-right-content-text'>Configure</p>
                    <p className='open-menu-right-content-text'>Compare Models</p>
                    <p className='open-menu-right-content-text'>Find New and Pre-owned Vehicles</p>
                    <p className='open-menu-right-content-text'>Saved Vehicles</p>
                    <p className='open-menu-right-content-text'>E-Mobility & E-Performance</p>
                </div>
            )}
            {clicked === 'Services' && (
                <div className='open-menu-right-content-text-area'>
                    <p className='open-menu-right-content-text'>Factory Delivery</p>
                    <p className='open-menu-right-content-text'>Tequipment - Genuine Accesories</p>
                    <p className='open-menu-right-content-text'>Exclusive Manufaktur - Individual Vehicles</p>
                    <p className='open-menu-right-content-text'>Approved - Pre-owned Cars & Warranty</p>
                    <p className='open-menu-right-content-text'>Service & Maintenance</p>
                    <p className='open-menu-right-content-text'>Classic - Service & Parts</p>
                    <p className='open-menu-right-content-text'>Lifestyle - Fashion & Accessories</p>
                </div>
            )}
            {clicked === 'Experience' && (
                <div className='open-menu-right-content-text-area'>
                    <p className='open-menu-right-content-text'>Motorsport</p>
                    <p className='open-menu-right-content-text'>Porsche Experience - Driving & Track Experience</p>
                    <p className='open-menu-right-content-text'>Porsche Clubs</p>
                    <p className='open-menu-right-content-text'>Golf</p>
                    <p className='open-menu-right-content-text'>Christophorus - The Porsche Magazine</p>
                    <p className='open-menu-right-content-text'>Porsche Museum</p>
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
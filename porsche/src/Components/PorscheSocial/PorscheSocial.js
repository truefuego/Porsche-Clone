import React from 'react'
import './PorscheSocial.css'
import Beggining from './Assets/beggining.mp4';
import Celebrate75 from './Assets/celebrate-75.mp4'
import CyberWeek from './Assets/cyber-week.webp'
import ElectrifiedSunday from './Assets/electrified-sunday.webp'
import FamilyMatters from './Assets/family-matters.webp'
import BelloDiCerte from './Assets/bello-di-certe.webp'
import A911 from './Assets/a-911.webp'
import JoinThe3rd from './Assets/join-the-3rd.mp4'
import OnlineShop from './Assets/online-shop.webp'
import LinkArrowWhite from '../../Assets/Images/Buttons/link-arrow-white.png'
import InstaGram from '../../Assets/Images/Icons/instagram.png'
import FaceBook from '../../Assets/Images/Icons/facebook.png'

const PorscheSocial = () => {
  return (
    <div className='container-center'>
        <div className='porsche-social'>
            <p className='porsche-social-header'>Porsche Social</p>
            <div className='porsche-social-grid'> 
                <div style={{gridArea:"1/1/3/3"}} className='porsche-social-item'>
                    <video className='porsche-social-large porsche-social-media' autoPlay muted loop>
                        <source src={Beggining} type='video/mp4' />
                    </video>
                    <div>
                        <img className='porsche-social-item-logo' src={InstaGram} alt='instagram'/> 
                    </div>
                </div>
                <div style={{gridArea:"3/1/4/2"}} className='porsche-social-item'>
                    <video className='porsche-social-small porsche-social-media' autoPlay muted loop>
                        <source src={Celebrate75} type='video/mp4' />
                    </video>
                    <div>
                        <img className='porsche-social-item-logo' src={InstaGram} alt='instagram'/> 
                    </div>
                </div>
                <div style={{gridArea:"3/2/4/3"}} className='porsche-social-item'>
                    <img className='porsche-social-small porsche-social-media' src={CyberWeek} alt='CyberWeek'/>
                    <div>
                        <img className='porsche-social-item-logo' src={FaceBook} alt='facebook'/> 
                    </div>
                </div>
                <div style={{gridArea:"2/3/4/5"}} className='porsche-social-item'>
                    <img className='porsche-social-large porsche-social-media' src={ElectrifiedSunday} alt='ElectrifiedSunday'/>
                    <div>
                        <img className='porsche-social-item-logo' src={FaceBook} alt='facebook'/> 
                    </div>
                </div>
                <div style={{gridArea:"1/3/1/4"}} className='porsche-social-item'>
                    <img className='porsche-social-small porsche-social-media' src={FamilyMatters} alt='FamilyMatters'/>
                    <div>
                        <img className='porsche-social-item-logo' src={FaceBook} alt='facebook'/> 
                    </div>
                </div>
                <div style={{gridArea:"1/4/1/5"}} className='porsche-social-item'>
                    <img className='porsche-social-small porsche-social-media' src={BelloDiCerte} alt='BelloDiCerte'/>
                    <div>
                        <img className='porsche-social-item-logo' src={InstaGram} alt='instagram'/> 
                    </div>
                </div>
                <div style={{gridArea:"1/5/3/7"}} className='porsche-social-item'>
                    <img className='porsche-social-large porsche-social-media' src={A911} alt='A911'/>
                    <div>
                        <img className='porsche-social-item-logo' src={InstaGram} alt='instagram'/> 
                    </div>
                </div>
                <div style={{gridArea:"3/5/4/6"}} className='porsche-social-item'>
                    <video className='porsche-social-small porsche-social-media' autoPlay muted loop>
                        <source src={JoinThe3rd} type='video/mp4' />
                    </video>
                    <div>
                        <img className='porsche-social-item-logo' src={InstaGram} alt='instagram'/> 
                    </div>
                </div>
                <div style={{gridArea:"3/6/4/7"}} className='porsche-social-item'>
                    <img className='porsche-social-small porsche-social-media' src={OnlineShop} alt='OnlineShop'/>
                    <div>
                        <img className='porsche-social-item-logo' src={FaceBook} alt='facebook'/> 
                    </div>
                </div>
            </div>
            <div className='porsche-social-button'>
                <button className='car-model-card-button'>
                    <img src={LinkArrowWhite} alt='pointer'/>
                    <p className='car-model-card-button-find-button'>Load More</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default PorscheSocial
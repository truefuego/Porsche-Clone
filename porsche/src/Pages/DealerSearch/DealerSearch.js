import React, { useEffect, useState } from 'react'
import './DealerSearch.css'
import Navbar from '../../Components/Navbar/Navbar'
import Navigation_Menu_Hamburger_White from '../../Assets/Images/Buttons/navigation-menu-hamburger.png'
import Navigation_Menu_Hamburger_Red from '../../Assets/Images/Buttons/navigation-menu-hamburger-red.png'
import GoToLinkImage from '../../Assets/Images/Buttons/link-arrow-white.png'
import '../ModelStartPage/ModelStartPage.css'
import Footer from '../../Components/Footer/Footer'
import ButtonColored from '../../Components/ButtonColored/ButtonColored'
import UseCurrentLocationBlack from '../../Assets/Images/Buttons/current-location-black.png'
import UseCurrentLocationRed from '../../Assets/Images/Buttons/current-location-red.png'
import MoreAbout from '../../Components/MoreAbout/MoreAbout'
import GoToLinkRed from '../../Assets/Images/Buttons/go-to-link-red.png'

const MoreAboutDealerSearch = [
    {name: 'All Porsche Models', image: null, link: ''},
    {name: null, image: null, link: ''},
    {name: 'Porsche Finder', image: GoToLinkRed, link: ''},
    {name: null, image: null, link: ''},
    {name: 'Motorsport & Events', image: null, link: ''},
    {name: null, image: null, link: ''},
    {name: 'Service & Accessories', image: null, link: ''},
    {name: null, image: null, link: ''},
    {name: 'About Porsche', image: null, link: ''},
    {name: null, image: null, link: ''},
    {name: 'Request a Test Drive', image: null, link: ''},
]

const DealerSearch = () => {
    const [hovering,setHovering] = useState(false)
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    useEffect(()=> {
        setWindowWidth(window.innerWidth-15)
    },[window])
    const [hoveringLoc,setHoveringLoc] = useState(false)
  return (
    <div className='dealer-search'>
        <Navbar />
        <div className='container-center' style={{backgroundColor:'#eff0f1'}}>
            <div className='porsche-car-configurator'>
                <p className='porsche-car-configurator-header'>Porsche Centre Search</p>
                <div className='porsche-car-configurator-drop-down'>
                    <div className='model-start-navigator' onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
                        <img src={hovering ? Navigation_Menu_Hamburger_Red : Navigation_Menu_Hamburger_White} alt='hamburger'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-center'>
            <div className='porsche-dealer-search'>
                Find a Porsche Centre
            </div>
        </div>
        <div className='dealer-search-map'>
            <iframe className='dealer-search-map-background' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40521464.833652735!2d29.30616625938705!3d51.69216397664959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707407745997!5m2!1sen!2sin" width={windowWidth} height={700} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className='dealer-search-map-foreground'>
                <div className='dealer-search-find-location-box'>
                    <div className='search-location-box-header' onMouseEnter={() => setHoveringLoc(!hoveringLoc)} onMouseLeave={() => setHoveringLoc(!hoveringLoc)}>
                        {hoveringLoc ? (<img src={UseCurrentLocationRed} alt='use-loc'/>) : (<img src={UseCurrentLocationBlack} alt='use-loc'/>)}
                        <p>Use my current location</p>
                    </div>
                    <div style={{fontFamily: 'PorscheNext SemiBold', fontSize: '20px',paddingLeft: '20px'}}>
                        Or
                    </div>
                    <div className='search-address'>
                        <input placeholder='Postcode / address'/>
                        <ButtonColored FONT_SIZE={17} Button_Text={'Search'} Button_Image={GoToLinkImage} Button_Color={'#313639'}/>
                    </div>
                </div>
            </div>
        </div>
        <MoreAbout List_Data={MoreAboutDealerSearch}/>
        <Footer />
    </div>
  )
}

export default DealerSearch
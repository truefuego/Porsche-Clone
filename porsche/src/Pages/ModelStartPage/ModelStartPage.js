import React, { useState } from 'react'
import './ModelStartPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Porsche_718 from './Images/porsche-718.jpg'
import Porsche_911 from './Images/porsche-911.jpg'
import Porsche_Taycan from './Images/porsche-taycan.jpg'
import Porsche_Panamera from './Images/porsche-panamera.png'
import Porsche_Macan from './Images/porsche-macan.png'
import Porsche_Cayenne from './Images/porsche-cayenne.png'
import Timeless_Machine from './Images/timeless-machine.jpg'
import Navigation_Menu_Hamburger_White from '../../Assets/Images/Buttons/navigation-menu-hamburger.png'
import Navigation_Menu_Hamburger_Red from '../../Assets/Images/Buttons/navigation-menu-hamburger-red.png'
import Button_Image from '../../Assets/Images/Buttons/link-arrow-white.png'
import ButtonColored from '../../Components/ButtonColored/ButtonColored'
import ModelStartModelCard from './ModelStartModelCard/ModelStartModelCard'
import Go_To_Link_Image from '../../Assets/Images/Buttons/go-to-link-red.png'
import VerticalSeparator from '../../Components/VerticalSeparator'

const Cars = [
    {
        name: '718',
        image: Porsche_718,
        link: '#'
    },
    {
        name: '911',
        image: Porsche_911,
        link: '#'
    },
    {
        name: 'Taycan',
        image: Porsche_Taycan,
        link: '#'
    },
    {
        name: 'Panamera',
        image: Porsche_Panamera,
        link: '#'
    },
    {
        name: 'Macan',
        image: Porsche_Macan,
        link: '#'
    },
    {
        name: 'Cayenne',
        image: Porsche_Cayenne,
        link: '#'
    },
]

const ModelStartPage = () => {
    const [hovering,setHovering]  = useState(false)
  return (
    <div>
        <Navbar />
        <div className='container-center' style={{backgroundColor:'#eff0f1'}}>
            <div className='porsche-car-configurator'>
                <p className='porsche-car-configurator-header'>Porsche Car Configurator</p>
                <div className='porsche-car-configurator-drop-down'>
                    <div className='model-start-navigator' onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
                        <img src={hovering ? Navigation_Menu_Hamburger_Red : Navigation_Menu_Hamburger_White} alt='hamburger'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-center' style={{marginTop: '26px',marginBottom: '26px'}}>
            <ButtonColored Button_Image={Button_Image} Button_Text={'Porsche Code'} Button_Color={'#313639'} Button_Link={'#'}/>
            <ButtonColored Button_Image={Button_Image} Button_Text={'All Models'} Button_Color={'#313639'} Button_Link={'#'}/>
        </div>
        <div className='container-center'>
            <p style={{fontFamily: 'PorscheNext SemiBold',fontSize:'40px',width: '86%'}}>Choose your favorite model</p>
        </div>
        <div className='container-center'>
            <div className='model-start-grid'>
                {Cars.map((item) => <ModelStartModelCard ModelImage={item.image} ModelName={item.name} ModelLink={item.link}/>)}
            </div>
        </div>
        <div className='container-center'>
            <p style={{fontFamily: 'PorscheNext SemiBold',fontSize:'40px',width: '86%'}}>Discover now</p>
        </div>
        <div className='container-center'>
            <div style={{display:'grid',width:'86%',gridAutoColumns:'.25fr'}}>
                <ModelStartModelCard ModelImage={Timeless_Machine} ModelName={'Timeless Machine.'}/>
            </div>
        </div>
        <div className='container-center'>
            <p style={{fontFamily: 'PorscheNext SemiBold',fontSize:'40px',width: '86%',marginTop:'72px'}}>More about</p>
        </div>
        <div className='container-center'>
            <div className='model-start-more-about'>
                <p>All Porsche Models</p>
                <VerticalSeparator />
                <div className='model-start-more-about-info'>
                    <img src={Go_To_Link_Image} alt='link'/>
                    <p>Porsche Finder</p>
                </div>
                <VerticalSeparator />
                <p>Motorsport & Events</p>
                <VerticalSeparator />
                <p>Service & Accesories</p>
                <VerticalSeparator />
                <p>About Porsche</p>
                <VerticalSeparator />
                <p>Request a Test Drive</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ModelStartPage
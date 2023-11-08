import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Menu from './Menu/Menu'
import LogoText from '../../Assets/Images/logo-text.png'
import LogoImage from '../../Assets/Images/logo-image.png'

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className='nav-bar'>
        <Menu />
        {screenWidth >= 760 ? 
            (<img src={LogoText} alt='logo' className='logo'/>) :
            (<img src={LogoImage} alt='logo' className='logo-small'/>)
        }
        <div className='empty'></div>
    </div>
  )
}

export default Navbar
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Menu from './Menu/Menu'
import LogoText from '../../Assets/Images/logo-text.png'
import LogoImage from '../../Assets/Images/logo-image.png'
import openMenuStore from '../../Stores/OpenMenuStore'
import BackButton from '../../Assets/Images/Buttons/cross.png'
import OpenMenu from './OpenMenu/OpenMenu'

const Navbar = () => {
    const {openMenu, toggleOpenMenu} = openMenuStore((state) => {
        return {openMenu: state.openMenu,toggleOpenMenu: state.toggleOpenMenu}
    })
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
    <div>
        <div className='nav-bar'>
            <Menu />
            {screenWidth >= 760 ? 
                (<img src={LogoText} alt='logo' className='logo'/>) :
                (<img src={LogoImage} alt='logo' className='logo-small'/>)
            }
            <div className='empty' />
        </div>
        {openMenu && (
            <div className='menu-open'>
                <OpenMenu />
                <div className='back-button' onClick={() => toggleOpenMenu()}><img className='back-button-image' src={BackButton} alt='back'/></div>
            </div>
        )}
    </div>
  )
}

export default Navbar
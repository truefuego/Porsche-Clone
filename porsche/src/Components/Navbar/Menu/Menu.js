import React, { useState, useEffect } from 'react'
import './Menu.css'
import Hamburger from './hamburger-icon.png'

const Menu = () => {
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
        <div className='menu'>
            <img className='menu-bar' src={Hamburger} alt='-'/>
            {screenWidth >= 480 && (<div className='menu-text'>
                Menu
            </div>)}
            
        </div>
    )
}

export default Menu
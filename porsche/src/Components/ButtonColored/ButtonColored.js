import React, { useState } from 'react'
import './ButtonColored.css'
const ButtonColored = ({Button_Image,Button_Color,Button_Text,Button_Link}) => {
    const [hovering,setHovering] = useState(false)
  return (
    <div className='button-colored' style={{backgroundColor: `${!hovering ? Button_Color : '#d5001c'}`}} onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
        <img src={Button_Image} alt={'link'}/>
        <p>{Button_Text}</p>
    </div>
  )
}

export default ButtonColored
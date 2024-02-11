import React, { useState } from 'react'
import './CheckBox.css'
import CheckBoxImage from './check-box-image.png'

const CheckBox = () => {
    const [clicked,setClicked] = useState(false)
  return (
    <div className='check-box' onClick={() => setClicked(!clicked)}>
        {clicked ? (<img className='check-box-image' src={CheckBoxImage} alt='check-box-image'/>) : (<div className='unticked-check-box'></div>)}
    </div>
  )
}

export default CheckBox
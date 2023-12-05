import React, { useState } from 'react'
import './ModelListHeader.css'

const ModelListHeader = ({header,image,hoverImage}) => {
    const [hovering,setHovering] = useState(false)

  return (
    <div className='model-list-header' onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
        <img className='model-list-header-image' src={hovering ? hoverImage : image}/>
        <p className='model-list-header-text'>{header}</p>
    </div>
  )
}

export default ModelListHeader
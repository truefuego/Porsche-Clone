import React, { useEffect } from 'react'
import './MoreAbout.css'

const MoreAbout = ({List_Data}) => {

  return (
    <div className='container-center'>
      <div className='more-about'>
          <div className='more-about-header'>
            More about
          </div>
          <div className='more-about-list'>
            {List_Data.map((item) => (<>{item.name != null ? (<div onClick={() => window.open(item.link)} className='more-about-list-item'>{item.image != null && <img src={item.image}/>}{item.name}</div>) : (<div className='more-about-list-item-separator'/>)}</>))}
          </div>
      </div>
    </div>
  )
}

export default MoreAbout
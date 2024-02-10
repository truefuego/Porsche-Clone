import React from 'react'

const Spacer = ({size}) => {
  return (
    <div style={{padding: `${size}vh`,zIndex:'-10 !important'}}/>
  )
}

export default Spacer
import React, { useEffect, useState } from 'react'
import './CarPage.css'
import { useLocation, useParams } from 'react-router-dom'
import CarsCarousel from '../../Components/CarsCarousel/CarsCarousel'
import Navbar from '../../Components/Navbar/Navbar'

const CarPage = () => {
    const [car,setCar] = useState('')
    const {modelName} = useParams()
    
  return (
    <div>
      <Navbar />
      <CarsCarousel />
    </div>
  )
}

export default CarPage
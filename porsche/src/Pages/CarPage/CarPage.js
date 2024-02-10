import React, { useEffect, useState } from 'react'
import './CarPage.css'
import { useLocation, useParams } from 'react-router-dom'
import CarsCarousel from '../../Components/CarsCarousel/CarsCarousel'
import Navbar from '../../Components/Navbar/Navbar'
import { CarsPageData } from '../../Stores/CarsPageData'

const CarPage = () => {
    const [car,setCar] = useState('')
    const {modelHeader} = useParams()
    const [pageData,setPageData] = useState([])
  return (
    <div className='car-page'>
      <Navbar />
      <CarsCarousel />
      {CarsPageData[modelHeader]}
    </div>
  )
}

export default CarPage
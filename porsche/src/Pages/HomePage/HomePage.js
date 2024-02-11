import React from 'react'
import './HomePage.css'
import Carousel from '../../Components/Carousel/Carousel'
import Navbar from '../../Components/Navbar/Navbar'
import Models from '../../Components/Models/Models'
import CarModelsList from '../../Components/CarModelsList/CarModelsList'
import ShoppingTools from '../../Components/ShoppingTools/ShoppingTools'
import PorscheSocial from '../../Components/PorscheSocial/PorscheSocial'
import Discover from '../../Components/Discover/Discover'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />  
      <Models />
      <CarModelsList />
      <ShoppingTools />
      <PorscheSocial />
      <Discover />
      <Footer />
    </>
  )
}

export default HomePage
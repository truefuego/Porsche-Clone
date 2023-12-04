import React, { useState } from 'react'
import './ModelsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ButtonColored from '../../Components/ButtonColored/ButtonColored'
import Button_Image from '../../Assets/Images/Buttons/link-arrow-white-left.png'
import Add_Image from '../../Assets/Images/Buttons/add.png'
import Subtract_Image from '../../Assets/Images/Buttons/subtract.png'
import { Cars } from '../../Stores/Cars'

const ModelsPage = () => {
  const [selectedFilter,setSelectedFilter] = useState({
    models: '',
    body_design: '',
    transmission: '',
    seats: '',
    drive: '',
    fuel_type: '',
    price: '',
    horsepower: ''
  })

  const [filtersToBeShown,setFiltersToBeShown] = useState({
    models: '',
    body_design: '',
    transmission: '',
    seats: '',
    drive: '',
    fuel_type: '',
    price: '',
    horsepower: ''
  })

  return (
    <div>
      <Navbar />
      <div className='container-center' style={{backgroundColor:'#eff0f1'}}>
        <div style={{width: '86%',fontFamily: 'PorscheNext SemiBold',fontSize:'26px',paddingTop: '16px',paddingBottom:'8px'}}>
          Porsche Car Configurator
        </div>
      </div>
      <div className='container-center'>
        <div style={{width:'86%',marginTop:'32px',marginBottom:'32px'}}>
          <ButtonColored Button_Color={'#313639'} Button_Image={Button_Image} Button_Text={'Back'} Button_Link={'#'}/>
        </div>
      </div>
      <div className='container-center'>
        <div className='model-page-porsche-car-configurator'>
          <div className='porsche-car-configurator-filter-buttons'>

          </div>
          <div className='porsche-car-configurator-vertical-divider'/>
          <div className='porsche-car-configurator-models'>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ModelsPage
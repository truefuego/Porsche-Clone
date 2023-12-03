import React from 'react'
import './ModelsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const ModelsPage = () => {
  return (
    <div>
      <Navbar />
      <div className='container-center' style={{backgroundColor:'#eff0f1'}}>
        <div style={{width: '86%',fontFamily: 'PorscheNext SemiBold',fontSize:'26px',paddingTop: '16px',paddingBottom:'8px'}}>
          Porsche Car Configurator
        </div>
      </div>
      <div className='container-center'>
        <div style={{width:'86%'}}>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ModelsPage
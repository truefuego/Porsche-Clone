import React, { useEffect, useState, useRef, useCallback } from 'react'
import './ModelsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ButtonColored from '../../Components/ButtonColored/ButtonColored'
import Button_Image from '../../Assets/Images/Buttons/link-arrow-white-left.png'
import Add_Image from '../../Assets/Images/Buttons/add.png'
import Add_Image_Red from '../../Assets/Images/Buttons/add-red.png'
import Add_Image_NonInteractive from '../../Assets/Images/Buttons/add-noninteractive.png'
import Reset_Image from '../../Assets/Images/Navigation/LinkArrowRed.png'
import { Cars } from '../../Stores/Cars'
import ModelListCard from './ModelListCard/ModelListCard'
import HeaderArrow from '../../Assets/Images/Buttons/header-image.png'
import HeaderArrowRed from '../../Assets/Images/Buttons/header-image-red.png'
import ModelListHeader from './ModelListHeader/ModelListHeader'
import Slider from 'react-slider'

const ModelsPage = () => {
  const HPSMIN = 265
  const HPSMAX = 761
  const PRICEMIN = 8806000
  const PRICEMAX = 42620000

  const [carsData,setCarsData] = useState(Cars)
  const [carsDataShow,setCarsDataShow] = useState({
    '718 Models': [],
    '718 Cayman GT4 RS': [],
    '911 Carrera & Targa Models': [],
    '911 Turbo Models': [],
    '911 GT3 Models': [],
    '911 GT3 RS': [],
    '911 S/T': [],
    'Taycan Models': [],
    'Panamera Models': [],
    'Macan Models': [],
    'Cayenne Models': [],
    'Cayenne Coupé Models': []
  })

  const ResetCarsDataShow = () => {
    setCarsDataShow({
      '718 Models': [],
      '718 Cayman GT4 RS': [],
      '911 Carrera & Targa Models': [],
      '911 Turbo Models': [],
      '911 GT3 Models': [],
      '911 GT3 RS': [],
      '911 S/T': [],
      'Taycan Models': [],
      'Panamera Models': [],
      'Macan Models': [],
      'Cayenne Models': [],
      'Cayenne Coupé Models': []
    })
  }

  const header = ['718 Models','718 Cayman GT4 RS','911 Carrera & Targa Models','911 Turbo Models','911 GT3 Models','911 GT3 RS','911 S/T','Taycan Models','Panamera Models','Macan Models','Cayenne Models','Cayenne Coupé Models']

  const [models,setModels] = useState('')
  const [bodyDesign,setBodyDesign] = useState('')
  const [transmission,setTransmission] = useState('')
  const [seats,setSeats] = useState('')
  const [drive,setDrive] = useState('')
  const [fuelType,setFuelType] = useState('')

  const [price,setPrice] = useState([8806000,42620000])
  const [horsepower,setHorsepower] = useState(265)

  const constructCarDataShow = () => {
    let tempCarsData = {
      '718 Models': [],
      '718 Cayman GT4 RS': [],
      '911 Carrera & Targa Models': [],
      '911 Turbo Models': [],
      '911 GT3 Models': [],
      '911 GT3 RS': [],
      '911 S/T': [],
      'Taycan Models': [],
      'Panamera Models': [],
      'Macan Models': [],
      'Cayenne Models': [],
      'Cayenne Coupé Models': []
    };
    carsData.map((item) => {
      tempCarsData[item.header].push(item)
    })
    ResetCarsDataShow()
    setCarsDataShow(tempCarsData)
  }

  const [visible,setVisible] = useState({
    '' : true,

    '718' : false,
    '911' : false,
    'Taycan': false,
    'Panamera': false,
    'Macan': false,
    'Cayenne': false,

    'Coupe': false,
    'Cabriolet': false,
    'Targa': false,
    'Roadster': false,
    'SUV': false,
    'Sport Saloon': false,
    'Executive': false,
    'Sport Turismo': false,
    'Cross Turismo': false,
    
    'Manual': false,
    'Tiptronic': false,
    'PDK': false,
    '2-speed transmission': false,
    
    '2': false,
    '4-5': false,
    
    'RWD': false,
    'AWD': false,
    
    'Gasoline': false,
    'Diesel': false,
    'Hybrid': false,
    'Electro': false,
  })

  const resetVisible = () => {
    setVisible({
      '' : true,
  
      '718' : false,
      '911' : false,
      'Taycan': false,
      'Panamera': false,
      'Macan': false,
      'Cayenne': false,
  
      'Coupe': false,
      'Cabriolet': false,
      'Targa': false,
      'Roadster': false,
      'SUV': false,
      'Sport Saloon': false,
      'Executive': false,
      'Sport Turismo': false,
      'Cross Turismo': false,
      
      'Manual': false,
      'Tiptronic': false,
      'PDK': false,
      '2-speed transmission': false,
      
      '2': false,
      '4-5': false,
      
      'RWD': false,
      'AWD': false,
      
      'Gasoline': false,
      'Diesel': false,
      'Hybrid': false,
      'Electro': false,
    })
  }

  const filterVisible = (data) => {
    data.map((item) => {setVisible(prev => ({...prev,[item.body_design]: true,[item.model]: true,[item.transmission]: true,[item.seats]: true, [item.drive]: true,[item.fuel_type]: true}))})
  }

  const filterCarData = () => {
    let tempCarsData = Cars
    if(models !== '') {
      tempCarsData = tempCarsData.filter((item) => item.model === models)
    }
    if(bodyDesign !== '') {
      tempCarsData = tempCarsData?.filter((item) => item.body_design === bodyDesign)
    }
    if(transmission !== '') {
      tempCarsData = tempCarsData?.filter((item) => item.transmission === transmission)
    }
    if(seats !== '') {
      tempCarsData = tempCarsData?.filter((item) => item.seats === seats)
    }
    if(drive !== '') {
      tempCarsData = tempCarsData?.filter((item) => item.drive === drive)
    }
    if(fuelType !== '') {
      tempCarsData = tempCarsData?.filter((item) => item.fuel_type === fuelType)
    }
    tempCarsData = tempCarsData?.filter((item) => item.price >= price[0]);
    tempCarsData = tempCarsData?.filter((item) => item.price <= price[1]);
    tempCarsData = tempCarsData?.filter((item) => item.horsepower >= horsepower);
    setCarsData(tempCarsData)
    resetVisible()
    filterVisible(tempCarsData)
    constructCarDataShow()
  }

  useEffect(() => {
    filterCarData()
  },[models,bodyDesign,transmission,seats,drive,fuelType,horsepower,price])

  useEffect(() => {
    constructCarDataShow()
  },[carsData])

  const ResetFilter = () => {
    setBodyDesign('')
    setDrive('')
    setFuelType('')
    setModels('')
    setSeats('')
    setTransmission('')
    setHorsepower(265)
    setPrice([8806000,42620000])
    setCarsData(Cars)
  }

  const handleModelChange = (data) => {
    if(models === data) 
      setModels('') 
    else 
      setModels(data)
  }

  const handleBodyDesignChange = (data) => {
    if(bodyDesign === data) 
      setBodyDesign('') 
    else 
      setBodyDesign(data)
  }

  const handleDriveChange = (data) => {
    if(drive === data) 
      setDrive('') 
    else 
      setDrive(data)
  }

  const handleFuelTypeChange = (data) => {
    if(fuelType === data) 
      setFuelType('') 
    else 
      setFuelType(data)
  }

  const handleSeatsChange = (data) => {
    if(seats === data) 
      setSeats('') 
    else 
      setSeats(data)
  }

  const handleTransmissionChange = (data) => {
    if(transmission === data) 
      setTransmission('') 
    else 
      setTransmission(data)
  }

  return (
    <>
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

            <p className='porsche-car-configurator-filter-buttons-header'>Models</p>
            <div className={`porsche-car-configurator-button ${models === '718' ? 'porsche-car-configurator-filter-button-deselect' : models === '' && visible['718'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleModelChange('718')} >
              <div className={`${models === '718' ? 'porsche-car-configurator-filter-button-deselect-image' : models === '' && visible['718'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>718</p>
            </div>
            <div className={`porsche-car-configurator-button ${models === '911' ? 'porsche-car-configurator-filter-button-deselect' : models === '' && visible['911'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`}  onClick={() => handleModelChange('911')}>
              <div className={`${models === '911' ? 'porsche-car-configurator-filter-button-deselect-image' : models === '' && visible['911'] === true? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>911</p>
            </div>
            <div className={`porsche-car-configurator-button ${models === 'Taycan' ? 'porsche-car-configurator-filter-button-deselect' : models === '' && visible['Taycan'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleModelChange('Taycan')}>
              <div className={`${models === 'Taycan' ? 'porsche-car-configurator-filter-button-deselect-image' : models === '' && visible['Taycan'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Taycan</p>
            </div>
            <div className={`porsche-car-configurator-button ${models === 'Panamera' ? 'porsche-car-configurator-filter-button-deselect' : models === '' && visible['Panamera'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleModelChange('Panamera')}>
              <div className={`${models === 'Panamera' ? 'porsche-car-configurator-filter-button-deselect-image' : models === ''  && visible['Panamera'] === true? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Panamera</p>
            </div>
            <div className={`porsche-car-configurator-button ${models === 'Macan' ? 'porsche-car-configurator-filter-button-deselect' : models === '' && visible['Macan'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleModelChange('Macan')}>
              <div className={`${models === 'Macan' ? 'porsche-car-configurator-filter-button-deselect-image' : models === ''  && visible['Macan'] === true? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Macan</p>
            </div>
            <div className={`porsche-car-configurator-button ${models === 'Cayenne' ? 'porsche-car-configurator-filter-button-deselect' : models === '' && visible['Cayenne'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleModelChange('Cayenne')}>
              <div className={`${models === 'Cayenne' ? 'porsche-car-configurator-filter-button-deselect-image' : models === '' && visible['Cayenne'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Cayenne</p>
            </div>

            <p className='porsche-car-configurator-filter-buttons-header'>Body Design</p>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Coupe' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Coupe'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Coupe')}>
              <div className={`${bodyDesign === 'Coupe' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Coupe'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Coupe</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Cabriolet' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Cabriolet'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Cabriolet')}>
              <div className={`${bodyDesign === 'Cabriolet' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Cabriolet'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Cabriolet</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Targa' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Targa'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Targa')}>
              <div className={`${bodyDesign === 'Targa' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Targa'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Targa</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Roadster' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Roadster'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Roadster')}>
              <div className={`${bodyDesign === 'Roadster' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Roadster'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Roadster</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'SUV' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['SUV'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('SUV')}>
              <div className={`${bodyDesign === 'SUV' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['SUV'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>SUV</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Sport Saloon' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Sport Saloon'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Sport Saloon')}>
              <div className={`${bodyDesign === 'Sport Saloon' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Sport Saloon'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Sport Saloon</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Executive' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Executive'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Executive')}>
              <div className={`${bodyDesign === 'Executive' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Executive'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Executive</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Sport Turismo' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Sport Turismo'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Sport Turismo')}>
              <div className={`${bodyDesign === 'Sport Turismo' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Sport Turismo'] === true  ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Sport Turismo</p>
            </div>
            <div className={`porsche-car-configurator-button ${bodyDesign === 'Cross Turismo' ? 'porsche-car-configurator-filter-button-deselect' : bodyDesign === '' && visible['Cross Turismo'] === true  ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleBodyDesignChange('Cross Turismo')}>
              <div className={`${bodyDesign === 'Cross Turismo' ? 'porsche-car-configurator-filter-button-deselect-image' : bodyDesign === '' && visible['Cross Turismo'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Cross Turismo</p>
            </div>
            
            <p className='porsche-car-configurator-filter-buttons-header'>Transmission</p>
            <div className={`porsche-car-configurator-button ${transmission === 'Manual' ? 'porsche-car-configurator-filter-button-deselect' : transmission === '' && visible['Manual'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleTransmissionChange('Manual')}>
              <div className={`${transmission === 'Manual' ? 'porsche-car-configurator-filter-button-deselect-image' : transmission === '' && visible['Manual'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Manual</p>
            </div>
            <div className={`porsche-car-configurator-button ${transmission === 'Tiptronic' ? 'porsche-car-configurator-filter-button-deselect' : transmission === '' && visible['Tiptronic'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleTransmissionChange('Tiptronic')}>
              <div className={`${transmission === 'Tiptronic' ? 'porsche-car-configurator-filter-button-deselect-image' : transmission === '' && visible['Tiptronic'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Tiptronic</p>
            </div>
            <div className={`porsche-car-configurator-button ${transmission === 'PDK' ? 'porsche-car-configurator-filter-button-deselect' : transmission === '' && visible['PDK'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleTransmissionChange('PDK')}>
              <div className={`${transmission === 'PDK' ? 'porsche-car-configurator-filter-button-deselect-image' : transmission === '' && visible['PDK'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>PDK</p>
            </div>
            <div className={`porsche-car-configurator-button ${transmission === '2-speed transmission' ? 'porsche-car-configurator-filter-button-deselect' : transmission === '' && visible['2-speed transmission'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleTransmissionChange('2-speed transmission')}>
              <div className={`${transmission === '2-speed transmission' ? 'porsche-car-configurator-filter-button-deselect-image' : transmission === '' && visible['2-speed transmission'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>2-speed transmission</p>
            </div>

            <p className='porsche-car-configurator-filter-buttons-header'>Seats</p>
            <div className={`porsche-car-configurator-button ${seats === '2' ? 'porsche-car-configurator-filter-button-deselect' : seats === '' && visible['2'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleSeatsChange('2')}>
              <div className={`${seats === '2' ? 'porsche-car-configurator-filter-button-deselect-image' : seats === '' && visible['2'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>2</p>
            </div>
            <div className={`porsche-car-configurator-button ${seats === '4-5' ? 'porsche-car-configurator-filter-button-deselect' : seats === '' && visible['4-5'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleSeatsChange('4-5')}>
              <div className={`${seats === '4-5' ? 'porsche-car-configurator-filter-button-deselect-image' : seats === '' && visible['4-5'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>4-5</p>
            </div>

            <p className='porsche-car-configurator-filter-buttons-header'>Drive</p>
            <div className={`porsche-car-configurator-button ${drive === 'RWD' ? 'porsche-car-configurator-filter-button-deselect' : drive === '' && visible['RWD'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleDriveChange('RWD')}>
              <div className={`${drive === 'RWD' ? 'porsche-car-configurator-filter-button-deselect-image' : drive === '' && visible['RWD'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Rear Wheel Drive</p>
            </div>
            <div className={`porsche-car-configurator-button ${drive === 'AWD' ? 'porsche-car-configurator-filter-button-deselect' : drive === '' && visible['AWD'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleDriveChange('AWD')}>
              <div className={`${drive === 'AWD' ? 'porsche-car-configurator-filter-button-deselect-image' : drive === '' && visible['AWD'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>All Wheel Drive</p>
            </div>

            <p className='porsche-car-configurator-filter-buttons-header'>Fueltype</p>
            <div className={`porsche-car-configurator-button ${fuelType === 'Gasoline' ? 'porsche-car-configurator-filter-button-deselect' : fuelType === '' && visible['Gasoline'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleFuelTypeChange('Gasoline')}>
              <div className={`${fuelType === 'Gasoline' ? 'porsche-car-configurator-filter-button-deselect-image' : fuelType === '' && visible['Gasoline'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Gasoline</p>
            </div>
            <div className={`porsche-car-configurator-button ${fuelType === 'Diesel' ? 'porsche-car-configurator-filter-button-deselect' : fuelType === '' && visible['Diesel'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleFuelTypeChange('Diesel')}>
              <div className={`${fuelType === 'Diesel' ? 'porsche-car-configurator-filter-button-deselect-image' : fuelType === '' && visible['Diesel'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Diesel</p>
            </div>
            <div className={`porsche-car-configurator-button ${fuelType === 'Hybrid' ? 'porsche-car-configurator-filter-button-deselect' : fuelType === '' && visible['Hybrid'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleFuelTypeChange('Hybrid')}>
              <div className={`${fuelType === 'Hybrid' ? 'porsche-car-configurator-filter-button-deselect-image' : fuelType === '' && visible['Hybrid'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Hybrid</p>
            </div>
            <div className={`porsche-car-configurator-button ${fuelType === 'Electro' ? 'porsche-car-configurator-filter-button-deselect' : fuelType === '' && visible['Electro'] === true ? 'porsche-car-configurator-filter-button-select' : 'porsche-car-configurator-filter-button-noninteractive'}`} onClick={() => handleFuelTypeChange('Electro')}>
              <div className={`${fuelType === 'Electro' ? 'porsche-car-configurator-filter-button-deselect-image' : fuelType === '' && visible['Electro'] === true ? 'porsche-car-configurator-filter-button-select-image' : 'porsche-car-configurator-filter-button-noninteractive-image'}`}/>
              <p>Electro</p>
            </div>
            
            <p className='porsche-car-configurator-filter-buttons-header'>MSRP $</p>
            <div className='range-slider'>
              <Slider className={'range-slider-slider'} value={price} min={PRICEMIN} max={PRICEMAX} onChange={setPrice} step={106000}/>
              <div className='range-slider-data'>
                <p>
                  {(price[0]).toLocaleString('en-US')}
                </p>
                <p>
                  {(price[1]).toLocaleString('en-US')}
                </p>
              </div>
            </div>

            <p className='porsche-car-configurator-filter-buttons-header'>Horsepower</p>
            <div className='range-slider'>
              <Slider className={'range-slider-slider'} value={horsepower} min={HPSMIN} max={HPSMAX} onChange={setHorsepower} step={4}/>
              <div className='range-slider-data'>
                <p>
                  {horsepower}
                </p>
                <p>
                  {'761'}
                </p>
              </div>
            </div>

            <div className='porsche-car-configurator-button-reset' onClick={() => ResetFilter()}>
              <div className='porsche-car-configurator-button-reset-image-wrapper'>
                <img className='porsche-car-configurator-button-reset-image-wrapper-image' src={Reset_Image}/>
              </div>
              <p>Reset Filter</p>
            </div>
          </div>
          <div className='porsche-car-configurator-vertical-divider'/>
          <div className='porsche-car-configurator-models'>
            {header.map((hdr) => (
              <div key={hdr}>
                {carsDataShow[hdr].length > 0 && <ModelListHeader header={hdr} image={HeaderArrow} hoverImage={HeaderArrowRed}/>}
                <div className='porsche-car-configurator-grid'>
                  {carsDataShow[hdr].map((item) => (<ModelListCard key={item.name} car={item}/>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ModelsPage
import React, { useEffect, useRef, useState } from 'react'
import './ContactPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Navigation_Menu_Hamburger_White from '../../Assets/Images/Buttons/navigation-menu-hamburger.png'
import Navigation_Menu_Hamburger_Red from '../../Assets/Images/Buttons/navigation-menu-hamburger-red.png'
import HorizontalSpacer from '../../Components/HorizontalSpacer'
import Footer from '../../Components/Footer/Footer'
import Drop_Up_Image from '../../Assets/Images/Buttons/link-arrow-white.png'
import Spacer from '../../Components/Spacer'
import CheckBox from '../../Components/CheckBox/CheckBox'
import GoToLinkImage from '../../Assets/Images/Buttons/link-arrow-white.png'
import ButtonColored from '../../Components/ButtonColored/ButtonColored'
import MoreAbout from '../../Components/MoreAbout/MoreAbout'

const SalutationList = ['- - -','Mr.','Mrs.','Mr. and Mrs.','Ms.','Company']
const AcademicTitleList = ['- - -','Dr.','Prof.','Adv.','Colonel','Deputy','General','Lt.','Major','Commander','Brig.','Capt.','Eng.']
const NobleTitleList = ['- - -','Minister','President','Al Sayyid','Al Sayyida','H.E.','H.E. Sheikh','H.E. Sheikha','H.E. Prince','H.E. Princess','H.H. King','H.R.H.','H.R.H. Prince','Sheikh','Sheikha','Colonel','H.H. Sayyid', 'H.H. Sayyida']
const Vehicle = [
    {
        name: '- - -',
        model: ['- - -']
    },
    {
        name: '~other make',
        model: ['- - -','sonstiges Modell']
    },
    {
        name: 'Acura',
        model: ['- - -','allgemein','EL','ILX','MDX','NSX','RDX','RLX/TLX/TL/RL/CL/TSX','RSX','ZDX']
    },
    {
        name: 'Alfa Romeo',
        model: ['- - -','145/146','147','156/155','159/Sportwagon','164','166','4C','8C','allgemein','Brera','Crosswagon Q4','Guilia','Guilietta','GT/GTV','Mito','Spider','Stelvio','Tonale']
    },
    {
        name: 'Aston Martin',
        model: ['- - -','allgemein','Cygnet','DB 11','DB 9','DBS / Superleggera / Volante','DBX','One 77','Raptide','V12 Vantage / GT12', 'V12 Zagato', 'V8 Vantage / GT8', 'Valkyrie', 'Vanquish / Vanquish Zagato', 'Virage']
    },
    {
        name: '---',
        model: ['- - -']
    },
]
const PorscheCentre = ['- please choose -','Porsche Centre Ahemdabad','Porsche Centre Bengaluru','Porsche Centre Chandigarh','Porsche Centre Chennai','Porsche Centre Delhi-NCR','Porsche Centre Kochi','Porsche Centre Mumbai']
const ModelsList = ['- - -', '718 Boxster','718 Cayman', '911','Taycan','Panamera','Macan','Cayenne','All Models']
const MoreAboutContactPage = [
    {name: 'Events', image: null, link: ''}
]

const ContactPage = () => {
    const [hovering,setHovering] = useState(false)
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const [stickyNav,setStickyNav] = useState(false)
    const [scrollPosition,setScrollPosition] = useState(0)

    const StickyNavRef = useRef()

    const [salutation,setSalutation] = useState('- - -')
    const [academicTitle,setAcademicTitle] = useState('- - -')
    const [nobleTitle,setNobleTitle] = useState('- - -')

    const [selectSalutation,setSelectSalutaion] = useState(false)
    const [selectAcademicTitle,setSelectAcademicTitle] = useState(false)
    const [selectNobleTitle,setSelectNobleTitle] = useState(false)

    const [vehicle,setVehicle] = useState('- - -')
    const [model,setModel] = useState('- - -')
    const [modelsList,setModelsList] = useState([])
    const [toggleVehicleSelector,setToggleVehicleSelector] = useState(false)
    const [toggleModelSelector,setToggleModelSelector] = useState(false)

    const [porscheCentre,setPorscheCentre] = useState('- please choose -')
    const [togglePorscheCentre,setTogglePorscheCentre] = useState(false)

    const [modelOfInterestList,setModelOfInterestList] = useState('- - -')
    const [toggleModelOfListSelector,setToggleModelOfListSelector] = useState(false)

    const handleScroll = () => {
        setScrollPosition(window.screenY)
        setStickyNav(scrollPosition >= StickyNavRef.current.getBoundingClientRect().top)
    }
    
    useEffect(()=> {
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[window])

  return (
    <div>
        <Navbar />
        <div className='container-center' style={{backgroundColor:'#eff0f1'}}>
            <div className='registration-navigator'>
                <p className='registration-navigator-header'>Registration From</p>
            </div>
        </div>
        <div className='container-center' style={{backgroundColor:'#eff0f1'}} ref={StickyNavRef}>
            <div className={`registration-navigator ${stickyNav ? 'sticky-nav-registration' : ''}`}>
                <div className='registration-navigator-drop-down'>
                    <div className='registration-nav-navigator' onMouseEnter={() => setHovering(!hovering)} onMouseLeave={() => setHovering(!hovering)}>
                        <img src={hovering ? Navigation_Menu_Hamburger_Red : Navigation_Menu_Hamburger_White} alt='hamburger'/>
                    </div>
                </div>
            </div>
        </div>
        {stickyNav && (<HorizontalSpacer size={30} />)}
        <HorizontalSpacer size={52} />
        <div className='container-center'>
            <div style={{width: '86%'}}>
                <div style={{width: '86%'}}>
                    <p style={{fontFamily: 'PorscheNext Regular', width: '64%'}}>Please enter your details into the following fields to register your interest. Click 'Send' to complete your registration and a Porsche consultant will contact you shortly afterwards.</p>
                </div>
                <div style={{display: 'flex',width: '100%'}}>
                    <div style={{display: 'flex',width: '42%',flexDirection: 'column'}}>
                        <p style={{fontFamily: 'PorscheNext SemiBold',fontSize: '20px',marginTop: '0'}}>Personal details</p>
                        <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Salutation *</p>
                        <div className='contact-page-drop-up'>
                            <div className='region-selector contact-page-drop-up-controller' onClick={() => setSelectSalutaion(!selectSalutation)}>
                                <p className='contact-page-drop-up-text'>{salutation}</p>
                                <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                            </div>
                            <div className='contact-page-drop-up-content'>
                                {selectSalutation && SalutationList.map((item) => <p key={item} className='region-selector-option' onClick={() => {setSalutation(item);setSelectSalutaion(!selectSalutation)}}>{item}</p>)}
                            </div>
                        </div>
                        <div style={{display: 'flex', width: '100%',gap:'24px',justifyContent: 'space-between'}}>
                            <div style={{width: '50%'}}>
                                <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Academic Title</p>
                                <div className='contact-page-drop-up'>
                                    <div className='region-selector contact-page-drop-up-controller' onClick={() => setSelectAcademicTitle(!selectAcademicTitle)}>
                                        <p className='contact-page-drop-up-text'>{academicTitle}</p>
                                        <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                                    </div>
                                    <div className='contact-page-drop-up-content'>
                                        {selectAcademicTitle && AcademicTitleList.map((item) => <p key={item} className='region-selector-option' onClick={() => {setAcademicTitle(item);setSelectAcademicTitle(!selectAcademicTitle)}}>{item}</p>)}
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '50%'}}>
                                <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Noble Title</p>
                                <div className='contact-page-drop-up'>
                                    <div className='region-selector contact-page-drop-up-controller' onClick={() => setSelectNobleTitle(!selectNobleTitle)}>
                                        <p className='contact-page-drop-up-text'>{nobleTitle}</p>
                                        <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                                    </div>
                                    <div className='contact-page-drop-up-content'>
                                        {selectNobleTitle && NobleTitleList.map((item) => <p key={item} className='region-selector-option' onClick={() => {setNobleTitle(item);setSelectNobleTitle(!selectNobleTitle)}}>{item}</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>First/Middle name*</p>
                            <div className='contact-page-input-box'>
                                <input/>
                            </div>
                        </div>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Last name*</p>
                            <div className='contact-page-input-box'>
                                <input/>
                            </div>
                        </div>
                        <p style={{fontFamily: 'PorscheNext SemiBold',fontSize: '20px',marginTop: '0'}}>Contact data</p>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>E-mail address*</p>
                            <div className='contact-page-input-box'>
                                <input/>
                            </div>
                        </div>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Phone number</p>
                            <div className='contact-page-input-box'>
                                <input/>
                            </div>
                        </div>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Mobile number*</p>
                            <div className='contact-page-input-box'>
                                <input/>
                            </div>
                        </div>
                    </div>
                    <Spacer size={8}/>
                    <div style={{display: 'flex',width: '42%',flexDirection: 'column'}}>
                        <p style={{fontFamily: 'PorscheNext SemiBold',fontSize: '20px',marginTop: '0'}}>Vehicle data</p>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Vehicle (currently owned)</p>
                            <div className='contact-page-drop-up'>
                                <div className='region-selector contact-page-drop-up-controller' onClick={() => setToggleVehicleSelector(!toggleVehicleSelector)}>
                                <p className='contact-page-drop-up-text'>{vehicle}</p>
                                <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                                </div>
                                <div className='contact-page-drop-up-content'>
                                {toggleVehicleSelector && Vehicle.map((item) => <p key={item.name} className='region-selector-option' onClick={() => {setVehicle(item.name);setModelsList(Vehicle.find(ctr => ctr.name === item.name).model);setToggleVehicleSelector(!toggleVehicleSelector)}}>{item.name}</p>)}
                                </div>
                            </div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Vehicle (currently owned)</p>
                            <div className='contact-page-drop-up'>
                                <div className='region-selector contact-page-drop-up-controller' onClick={() => setToggleModelSelector(!toggleModelSelector)}>
                                <p className='contact-page-drop-up-text'>{model}</p>
                                <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                                </div>
                                <div className='contact-page-drop-up-content'>
                                    {toggleModelSelector && modelsList.map((item) => <p key={item} className='region-selector-option' onClick={() => {setModel(item);setToggleModelSelector(!toggleModelSelector)}}>{item}</p>)}
                                </div>
                            </div>
                        </div>
                        <p style={{fontFamily: 'PorscheNext SemiBold',fontSize: '20px',marginTop: '0'}}>Your preffed Porsche Importer</p>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Porsche Centre*</p>
                            <div className='contact-page-drop-up'>
                                <div className='region-selector contact-page-drop-up-controller' onClick={() => setTogglePorscheCentre(!togglePorscheCentre)}>
                                    <p className='contact-page-drop-up-text'>{porscheCentre}</p>
                                    <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                                </div>
                                <div className='contact-page-drop-up-content'>
                                    {togglePorscheCentre && PorscheCentre.map((item) => <p key={item} className='region-selector-option' onClick={() => {setPorscheCentre(item);setTogglePorscheCentre(!togglePorscheCentre)}}>{item}</p>)}
                                </div>
                            </div>
                        </div>
                        <p style={{fontFamily: 'PorscheNext SemiBold',fontSize: '20px',marginTop: '0'}}>Model of interest</p>
                        <div>
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>Model of interest*</p>
                            <div className='contact-page-drop-up'>
                                <div className='region-selector contact-page-drop-up-controller' onClick={() => setToggleModelOfListSelector(!toggleModelOfListSelector)}>
                                    <p className='contact-page-drop-up-text'>{modelOfInterestList}</p>
                                    <img className='contact-page-drop-up-image' src={Drop_Up_Image} alt='link'/>
                                </div>
                                <div className='contact-page-drop-up-content'>
                                    {toggleModelOfListSelector && ModelsList.map((item) => <p key={item} className='region-selector-option' onClick={() => {setModelOfInterestList(item);toggleModelOfListSelector(!toggleModelOfListSelector)}}>{item}</p>)}
                                </div>
                            </div>
                        </div>
                        <p style={{fontFamily: 'PorscheNext SemiBold',fontSize: '20px',marginTop: '0'}}>Data Protection Notice:</p>
                        <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0'}}>The Porsche Group* or its agents may use the information you provide together with other information we have about you to contact you, including by mail, phone, SMS, fax or e-mail, with offers or information about Porsche products and services we can provide. We may keep your information for a reasonable period to contact you with offers, invitations or information about our products and services. In order to continue, you must have read the <u>Privacy Policy</u>.</p>
                        <div style={{display: 'flex',alignItems: 'center',paddingTop: '8px',paddingTop: '32px'}}>
                            <CheckBox />
                            <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingLeft:'8px',marginBottom:'0'}}>I have read and understood the Privacy Policy.</p>
                        </div>
                        <p style={{fontFamily: 'PorscheNext Regular',fontSize: '16px',paddingTop: '8px',marginBottom:'0',padding: '32px 0'}}>Fields marked with * must be completed.</p>
                        <div style={{width: '100%',display: 'flex',justifyContent: 'flex-end',padding: '32px 0'}}>
                            <ButtonColored FONT_SIZE={17} Button_Text={'Search'} Button_Image={GoToLinkImage} Button_Color={'#313639'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MoreAbout List_Data={MoreAboutContactPage} />
        <Footer />

    {/*
            
        {   
            name: "Audi",
            model: []
        }
            name: "Bentley"
            name: "BMW"
            name: "Brilliance"
            name: "Bugatti"
            name: "Buick"
            name: "BYD"
            name: "Cadillac"
            name: "Chang´an Automobile"
            name: "Changfeng"
            name: "Chery"
            name: "Chevrolet"
            name: "Chrysler"
            name: "Citroen"
            name: "Cupra"
            name: "Dacia"
            name: "Daihatsu"
            name: "De Tomaso"
            name: "Dodge"
            name: "Dongfeng"
            name: "FAW"
            name: "Ferrari"
            name: "Fiat"
            name: "Ford"
            name: "Geely"
            name: "Genesis"
            name: "Geo"
            name: "GMC"
            name: "Great Wall Motor"
            name: "Hafei"
            name: "Holden"
            name: "Honda"
            name: "Hummer"
            name: "Hyundai"
            name: "Infiniti"
            name: "Isuzu"
            name: "Jaguar"
            name: "Jeep"
            name: "Jianghuai"
            name: "Karma/Fisker"
            name: "Kia"
            name: "Koenigsegg"
            name: "Lada"
            name: "Lamborghini"
            name: "Lancia"
            name: "Land Rover"
            name: "Lexus"
            name: "Lifan"
            name: "Lincoln"
            name: "Lotus"
            name: "Maserati"
            name: "Maybach"
            name: "Mazda"
            name: "McLaren"
            name: "Mercedes-Benz"
            name: "Mercury"
            name: "Mini"
            name: "Mitsubishi"
            name: "Morgan"
            name: "Nissan"
            name: "Oldsmobil"
            name: "Opel"
            name: "Pagani"
            name: "Peugeot"
            name: "Polestar"
            name: "Pontiac"
            name: "Porsche"
            name: "Proton"
            name: "Ram"
            name: "Renault Samsung"
            name: "Renault"
            name: "Rolls Royce"
            name: "SAIC"
            name: "Saturn"
            name: "Scion"
            name: "Seat"
            name: "Skoda"
            name: "Smart"
            name: "Southeast"
            name: "Ssangyong"
            name: "Subaru"
            name: "Suzuki"
            name: "Tesla"
            name: "Toyota"
            name: "TVR"
            name: "Vauxhall"
            name: "Volvo"
            name: "VW"
            name: "Wiesmann"
            name: "Zotye"
             */}
    </div>
  )
}

export default ContactPage
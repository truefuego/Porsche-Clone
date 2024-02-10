import React, { useEffect, useRef, useState } from 'react'
import './EPerformancePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import EPerformanceHeaderImage from './Images/performance-header-image.webp'
import HorizontalSpacer from '../../Components/HorizontalSpacer'
import EPerformanceModelsImage from './Images/eperformance-models.webp'
import HeaderImageBlack from '../../Assets/Images/Buttons/header-image.png'
import HeaderImageRed from '../../Assets/Images/Buttons/header-image-red.png'
import ChargingAllElectricModels from './Images/chargin-all-electric-models.webp'
import ChargingPluInHybridModels from './Images/chargin-plug-in-hybrid-models.webp'
import ButtonColored from '../../Components/ButtonColored/ButtonColored'
import LinkArrow from '../../Assets/Images/Buttons/link-arrow-white.png'
import LinkArrowRed from '../../Assets/Images/Buttons/header-image-red.png'
import HelpAndContact from './Images/eperformance-help-and-contact.webp'
import Germany_Tour_Hours_of_Tranquility from './Images/germany-tour-hours-of-tranquility.webp'
import Journey_to_the_Land_of_Giant_Trees from './Images/journey-to-the-land-of-giant-trees.webp'
import Room_for_Adventure from './Images/room-for-adventure.webp'

const FAQCard = ({question,answers}) => {
    const [showDetails,setShowDetails] = useState(false)
    return (
        <div className='faq-card'>
            <div style={{display: 'flex',width: '100%',marginBottom: '0',cursor: 'pointer',justifyContent:'space-between',alignItems:'center',padding: '12px 0'}} onClick={() => setShowDetails(!showDetails)}>
                <p style={{fontFamily: 'PorscheNext Regular',fontSize: '19px',marginBottom: '0'}}>{question}</p>
                <img className={`${showDetails ? 'arrow-up' : 'arrow-down'}`} src={LinkArrowRed} alt=''/>
            </div>
            {showDetails && (<div style={{display:'flex', flexDirection:'column',gap: '8px',padding:'0 0 16px 0',width: '60%'}}>
                {answers.map((item) => (<div style={{fontFamily: 'PorscheNext Thin',fontWeight: 'bold',fontSize: '17px'}}>{item}</div>))}
            </div>)}
        </div>
    )
}

const EPerformanceButton = ({text,link}) => {
    const [hoveringButton,setHoveringButton] = useState(false)
    return (
        <div onClick={() => window.open(link)} className='eperformance-models-button' onMouseEnter={() => setHoveringButton(!hoveringButton)} onMouseLeave={() => setHoveringButton(!hoveringButton)}>
            {hoveringButton ? (<img src={HeaderImageRed} alt='link-image'/>) : (<img src={HeaderImageBlack} alt='link-image'/>)}
            {text}
        </div>
    )
}

const EPerformanceButtonWhite = ({text,link}) => {
    const [hoveringButton,setHoveringButton] = useState(false)
    return (
        <div onClick={() => window.open(link)} className='eperformance-models-button-white' onMouseEnter={() => setHoveringButton(!hoveringButton)} onMouseLeave={() => setHoveringButton(!hoveringButton)}>
            {hoveringButton ? (<img className='eperformance-models-button-white-img-hover' src={HeaderImageRed} alt='link-image'/>) : (<img className='eperformance-models-button-white-img' src={HeaderImageBlack} alt='link-image'/>)}
            {text}
        </div>
    )
}

const EPerformancePage = () => {
    const stickyNavRef = useRef()
    const [stickyNav,setStickyNav] = useState(false)
    const [scrollPosition,setScrollPosition] = useState(0)
    
    const [hoveringModels,setHoveringModels] = useState(false)

    const modelsRef = useRef()
    const chargingRef = useRef()
    const faqsRef = useRef()
    const magazineRef = useRef()
    const helpAndContactRef = useRef()

    const [activeModelsRef,setActiveModelsRef] = useState(false)
    const [activeChargingRef,setActiveChargingRef] = useState(false)
    const [activeFaqsRef,setActiveFaqsRef] = useState(false)
    const [activeMagazineRef,setActiveMagazineRef] = useState(false)
    const [activeHelpAndContactRef,setActiveHelpAndContactRef] = useState(false)

    const [faqCard,setFaqCard] = useState(false)

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        setStickyNav(scrollPosition >= stickyNavRef.current.getBoundingClientRect().top && scrollPosition <= helpAndContactRef.current.getBoundingClientRect().bottom)
        setActiveModelsRef(scrollPosition >= modelsRef.current.getBoundingClientRect().top && scrollPosition <= modelsRef.current.getBoundingClientRect().bottom)
        setActiveChargingRef(scrollPosition >= chargingRef.current.getBoundingClientRect().top && scrollPosition <= chargingRef.current.getBoundingClientRect().bottom)
        setActiveFaqsRef(scrollPosition >= faqsRef.current.getBoundingClientRect().top && scrollPosition <= faqsRef.current.getBoundingClientRect().bottom)
        setActiveMagazineRef(scrollPosition >= magazineRef.current.getBoundingClientRect().top && scrollPosition <= magazineRef.current.getBoundingClientRect().bottom)
        setActiveHelpAndContactRef(scrollPosition >= helpAndContactRef.current.getBoundingClientRect().top && scrollPosition <= helpAndContactRef.current.getBoundingClientRect().bottom)

      };
    
      const [windowWidth,setWindowWidth] = useState(window.innerWidth)
      useEffect(()=> {
          setWindowWidth(window.innerWidth-15)
      },[window])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    

  return (
    <div className='eperformace-page'>
        <Navbar />
        <div className='eperformance-page-landing'>
            <img src={EPerformanceHeaderImage} alt='e-performance'/>
            <div className='container-center'>
                <div className='eperformance-page-landing-foreground' style={{width: '86%', alignItems: 'flex-end', paddingBottom: '40px'}}>
                    <div>
                        <div style={{fontSize: '48px'}}>
                            Experience electromobility with Porsche E-Performance.
                        </div>
                        <div style={{fontSize: '26px'}}>
                            Soul, electrified.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref={stickyNavRef}>
            <div className={`e-performance-nav ${stickyNav ? 'sticky' : ''}`}>
                <div className='container-center' style={{width: '100%',height: '100%'}}>
                    <div style={{width: '86%',height:'100%',fontFamily: 'PorscheNext Regular',display:'flex',gap: '49px',fontSize:'18px',alignItems: 'center'}}>
                        <div className={`e-performance-nav-buttons ${activeModelsRef ? 'active-eperformance-nav' : ''}`} onClick={() => {const elementPosition = modelsRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition+2,behavior: 'smooth',});}}>Models</div>
                        <div className={`e-performance-nav-buttons ${activeChargingRef ? 'active-eperformance-nav' : ''}`} onClick={() => {const elementPosition = chargingRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition+2,behavior: 'smooth',});}}>Charging</div>
                        <div className={`e-performance-nav-buttons ${activeFaqsRef ? 'active-eperformance-nav' : ''}`} onClick={() => {const elementPosition = faqsRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition+2,behavior: 'smooth',});}}>FAQs</div>
                        <div className={`e-performance-nav-buttons ${activeMagazineRef ? 'active-eperformance-nav' : ''}`} onClick={() => {const elementPosition = magazineRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition+2,behavior: 'smooth',});}}>Magazine</div>
                        <div className={`e-performance-nav-buttons ${activeHelpAndContactRef ? 'active-eperformance-nav' : ''}`} onClick={() => {const elementPosition = helpAndContactRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition+2,behavior: 'smooth',});}}>Help & Contact</div>
                    </div>
                </div>
            </div>
        </div>
        {stickyNav && <HorizontalSpacer size={30} />}
        <div ref={modelsRef}>
            <div className='container-center'>    
                <div className='eperformance-models-upper'>
                    <p>
                        We are driven by our passion for sports cars. With Porsche E-Performance, our concept for emotional electromobility, we are taking a step further toward the mobility of the future. And bringing Porsche electric and plug-in hybrid models together with a sophisticated charging in- frastructure. For more performance in everyday life and more sustainable mobility.
                    </p>
                </div>
            </div>
            <div className='eperformance-models-lower'>
                <div className='eperformance-models-lower-image'>
                    <img src={EPerformanceModelsImage} alt='models-image'/>
                </div>
                <div className='eperformance-models-lower-textarea'>
                    <div style={{width: '60%'}}>
                        <p style={{fontFamily: 'PorscheNext SemiBold', fontSize: '40px',lineHeight: '48px'}}>Porsche E-Performance models.</p>
                        <p style={{fontFamily: 'PorscheNext Regular', fontSize: '18px'}}>Discover our current models with all-electric drive or plug-in hybrid technology and find the Porsche that is perfect for you.</p>
                        <EPerformanceButton text={'Discover Models'} link={''} />
                    </div>
                </div>
            </div>
        </div>
        <div ref={chargingRef}>
            <div className='container-center'>
                <div style={{width: '86%',paddingTop: '90px',paddingBottom: '60px'}}>
                    <p style={{fontFamily:'PorscheNext SemiBold',fontSize:'40px'}}>Find charging stations on your route using the Charge Map.</p>
                    <p style={{fontFamily:'PorscheNext Regular',fontSize:'16px',width: '60%'}}>The Porsche Charge Map shows you available charging stations on your route. This allows you to plan charging stops with consideration of your car’s range.</p>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4977764.29081681!2d31.658928824360643!3d30.512121754493318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707494699812!5m2!1sen!2sin" width={windowWidth} height={585} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div style={{width: '100%',display: 'flex',paddingTop: '10px'}}>
                <div style={{width: '37%',background: '#eff0f1',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <div style={{width: '60%'}}>
                        <p style={{fontFamily: 'PorscheNext SemiBold', fontSize: '40px',lineHeight: '48px'}}>Charging all-elec-tric models.</p>
                        <p style={{fontFamily: 'PorscheNext Regular', fontSize: '18px'}}>Electromobility requires a good charging infrastructure: as the driver of an all-electric Porsche, you can choose from a wide network of different charging stations. At home, on the road at public charging pedestals and at your destination. Speed charging stations are also available on the road – here you can charge particularly quickly using direct current, also known as DC charging.</p>
                        <EPerformanceButton text={'Charging electric vehicles'} link={''} />
                    </div>
                </div>
                <div style={{width: '63%'}}>
                    <img style={{width:'100%'}} src={ChargingAllElectricModels} alt='Charging All Electric Models'/>
                </div>
            </div>
            <div style={{width: '100%',display: 'flex'}}>
                <div style={{width: '63%'}}>
                    <img style={{width:'100%'}} src={ChargingPluInHybridModels} alt='Charging All Electric Models'/>
                </div>
                <div style={{width: '37%',background: '#eff0f1',display: 'flex',alignItems: 'center',justifyContent: 'center'}}> 
                    <div style={{width: '60%'}}>
                        <p style={{fontFamily: 'PorscheNext SemiBold', fontSize: '40px',lineHeight: '48px'}}>Charging plug-in hybrid models.</p>
                        <p style={{fontFamily: 'PorscheNext Regular', fontSize: '18px'}}>Charge your plug-in hybrid model conveniently at home. On the road, public charging pedestals with alternating current are available. Charging with alternating current is also called AC charging.</p>
                        <EPerformanceButton text={'Charging plug-in hybrids'} link={''} />
                    </div>
                </div>
            </div>
            <div className='container-center' style={{background: '#eff0f1'}}>
                <div style={{width: '86%',paddingTop: '24px'}}>
                    <p style={{fontFamily: 'PorscheNext SemiBold', fontSize: '42px'}}>Charging - an overview.</p>
                    <p style={{fontFamily: 'PorscheNext Regular', fontSize: '16px',width: '60%'}}>Porsche offers a variety of individual charging solutions to suit your everyday life. At home, you can charge comfortably and easily with the intelligent home charging solutions. When travelling, you benefit from a wide and secure fast charging network. Once you have reached your destination, you can charge your vehicle with our exclusive partners for free. Discover charging at </p>
                </div>
            </div>
        </div>
        <div ref={faqsRef} className='container-center'>
            <div style={{width: '86%'}}>
                <p style={{fontFamily:'PorscheNext SemiBold',fontSize: '48px',paddingTop: '40px'}}>FAQs.</p>
                <p style={{fontFamily:'PorscheNext SemiBold',fontSize: '26px',width:'100%',marginBottom: '0',borderBottom: '1px solid #c4c4c4'}}>The most important info on electromobility.</p>
                <>
                    <FAQCard question={'Where can I charge my Porsche?'} answers={[`Your Porsche can be easily charged in various everyday situations: at home, on the road and at your destination.`,`A range of Porsche charging equipment is available for charging at home. You will find the charging solution to suit your needs via the Porsche Charging Pre-Check at https://www.porsche.com/countries/charging-check. Contact your Porsche partner for further information.`,`At selected destinations, e.g. luxury hotels, you can charge your vehicle for free via Porsche Destination Charging.`]}/>
                    <FAQCard question={'Must I always charge my Porsche completely?'} answers={[`No, you don't have to charge the high-voltage battery of your Porsche completely every time. Partially charging your Porsche will not cause capacity loss ("memory effect") and does not reduce the service life of your high-voltage battery.`,`In addition, the charging speed reduces as the charge level of the high-voltage battery increases. Therefore it can save time to only charge the battery up to approx. 80 per cent or until the required range has been achieved.`,`Moreover, only allowing it to discharge to 20% and charging it slowly to 80% protects the battery.`]}/>
                    <FAQCard question={'On what does the range of my Porsche depend?'} answers={[`The range is influenced by various factors, such as the driving style, comfort functions, aerodynamics and road conditions. The most important factor is your driving style: environmentally-aware and anticipatory driving behaviour promotes brake energy recovery and thereby increases the range of the vehicle. In addition, you can reduce the strength of your comfort functions such as the air-conditioning system and heating, and only fit add-on parts that influence the aerodynamics (e.g. roof boxes) when required.`]}/>
                    <FAQCard question={'What must I be aware of when driving abroad?'} answers={[`Country-specific stipulations and approvals may restrict the use of charging equipment abroad. Consult the Driver's Manual and contact your Porsche partner to learn if your equipment is suitable for the country you intend to visit or if you need additional equipment`]}/>
                </>
                <div style={{padding: '84px 0 20px 0'}}>
                    <EPerformanceButton text={'Discover more FAQs'} link={''} />
                </div>
            </div>
        </div>
        <div ref={magazineRef} style={{background: '#000'}}>
            <div className='container-center'>
                <div style={{width:'86%'}}>
                    <div style={{width: '54%',paddingBottom: '64px'}}>
                        <p style={{fontFamily:'PorscheNext SemiBold', fontSize: '40px',color: '#fff',paddingTop:'24px',marginBottom:'8px'}}>E-Performance Magazine.</p>
                        <p style={{fontFamily:'PorscheNext Regular', fontSize: '16px',color: '#fff'}}>Immerse yourself in the world of electromobility: read our magazine for exciting articles and reports plus exclusive interviews about Porsche electric vehicles, trends and developments in electromobility and our concept of the car of the future.</p>
                    </div>
                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                        <div style={{width: '32.7%'}}>
                            <img style={{width: '100%'}} src={Journey_to_the_Land_of_Giant_Trees}/>
                            <div style={{padding:'28px',width: '100%',background:'#fff'}}>
                                <p style={{fontFamily: 'PorscheNext Regular',color: '#a4a4a4'}}>Lifestyle</p>
                                <p style={{fontFamily: 'PorscheNext SemiBold',fontSize:'32px'}}>Journey to the Land of Giant Trees</p>
                                <p style={{fontFamily: 'PorscheNext Regular'}}>As one of the originators of the American television series Backseat Drivers, John Chuldenko created the first car show for kids. Now he and his wife...</p>
                                <EPerformanceButton text={'Learn more'}/>
                            </div>
                        </div>
                        <div style={{width: '32.7%',position:'relative'}}>
                            <img style={{width: '100%'}} src={Germany_Tour_Hours_of_Tranquility}/>
                            <div style={{padding:'28px',position: 'absolute',top:'0',width: '100%',height: '100%',boxShadow:'inset 200px 200px 2000px rgba(0,0,0,.7)'}}>
                                <p style={{fontFamily: 'PorscheNext Regular',color: '#fff'}}>Lifestyle</p>
                                <p style={{fontFamily: 'PorscheNext SemiBold',fontSize:'32px',color: '#fff'}}>Germany Tour Hours of Tranquility</p>
                                <p style={{fontFamily: 'PorscheNext Regular',color: '#fff'}}>Think of Germany and the word “autobahn” surely comes to mind—an image shaped by high speed. But it’s also a nation of tree-lined country roads and lakes, nature and high culture. A journey to Goethe, Fontane, and Beethoven in the Porsche Taycan.</p>
                                <EPerformanceButtonWhite text={'Learn more'}/>
                            </div>
                        </div>
                        <div style={{width: '32.7%'}}>
                            <img style={{width: '100%'}} src={Room_for_Adventure}/>
                            <div style={{padding:'28px',width: '100%',background:'#fff'}}>
                                <p style={{fontFamily: 'PorscheNext Regular',color: '#a4a4a4'}}>Products</p>
                                <p style={{fontFamily: 'PorscheNext SemiBold',fontSize:'32px'}}>Room for Adventure</p>
                                <p style={{fontFamily: 'PorscheNext Regular'}}>The Porsche Taycan Cross Turismo is the brand’s first Cross Utility Vehicle (CUV). Fully electric, versatile, robust—and ready for adventure.</p>
                                <EPerformanceButton text={'Learn more'}/>
                            </div>
                        </div>
                    </div>
                    <div className='container-center' style={{padding: '36px'}}>
                        <EPerformanceButtonWhite text={'Click here for the magazine'}/>
                    </div>
                </div>
            </div>
        </div>
        <div ref={helpAndContactRef} style={{position: 'relative'}}>
            <div style={{height: '34vh'}}>
                <img style={{width: '100%'}} src={HelpAndContact} alt='help-and-contact-background'/>
            </div>
            <div className='container-center' style={{width: '100%'}}>
                <div style={{width:'86%',height:'100%',position: 'absolute', top:'0'}}>
                    <div style={{width: '52%',height:'100%',display:'flex',padding:'28px 0', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <p style={{fontFamily:'PorscheNext SemiBold', fontSize: '40px'}}>Help & Contact.</p>
                        <p style={{fontFamily:'PorscheNext Regular', fontSize: '16px'}}>Our help & contact area contains all the important information and contact details for any questions you may have regarding electromobility at Porsche.</p>
                        <EPerformanceButton text={'Discover more'}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default EPerformancePage
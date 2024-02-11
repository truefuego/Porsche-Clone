import React, { useRef, useState, useEffect } from "react"
import './CarsPageData.css';
import ReactPlayer from 'react-player'
import Porsche_718_Models_Concept from '../Assets/Cars/Porsche_718/porsche-718-models-concept.mp4'
import Porsche_718_Models_Design from '../Assets/Cars/Porsche_718/porsche-718-models-design.mp4'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ButtonFilled from "../Components/ButtonFilled/ButtonFilled";
import PlusIcon from '../Assets/Images/Buttons/add.png'
import Spacer from "../Components/Spacer";

export const ConceptVideoComponent = ({heading,text,video,refer}) => {
    return (
        <div className="concept-component" ref={refer}>
            <div className="concept-component-text-area">
                <div className="concept-component-heading">{heading}</div>
                <div className="concept-component-text">{text}</div>
            </div>
            <ReactPlayer height={549} width={975} url={Porsche_718_Models_Concept} playing loop muted/>
        </div>
    )
}

export const DesignComponent = () => {
    return (
        <>
            
        </>
    )
}


const Porsche718Models = () => {
    const The718ConceptRef = useRef()
    const DesignRef = useRef()
    const ExteriorRef = useRef()
    const PerformanceRef = useRef()
    const ComfortRef = useRef()
    const Porsche718StyleEditionRef = useRef()
    const Porsche718GTSRef = useRef()
    const ModelsAndDataRef = useRef()
    const BuildAndPriceRef = useRef()
    const GalleryRef = useRef()
    const PersonalizationRef = useRef()
    const NextStepsRef = useRef()
    
    const stickyNav = useRef()

    const [scrollPosition, setScrollPosition] = useState(0);
    const [sticky, setSticky] = useState(false);

    const designBackgroundRef = useRef()
    const designForegroundRef = useRef()
    const [stickyDesign,setStickyDesign] = useState(false);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setSticky(scrollPosition >= stickyNav.current.getBoundingClientRect().top)
      setStickyDesign(scrollPosition >= DesignRef.current.getBoundingClientRect().top && scrollPosition <= designForegroundRef.current.getBoundingClientRect().top)

    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[]);
  

    return (
        <div className='cars-page-data' ref={stickyNav}>
            <div className={`sticky-nav ${sticky ? 'sticky' : ''}`}>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = The718ConceptRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'The 718 concept'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = DesignRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Design'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = ExteriorRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'360° Exterior'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = PerformanceRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Performance'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = ComfortRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Comfort'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = Porsche718StyleEditionRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'718 Style Edition'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = Porsche718GTSRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'718 GTS'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = ModelsAndDataRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Models & Data'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = BuildAndPriceRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Build & Price'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = GalleryRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Gallery'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = PersonalizationRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Personalization'}</div>
                <div className='sticky-nav-button' onClick={() => {const elementPosition = NextStepsRef.current.getBoundingClientRect().top;window.scrollTo({top: window.scrollY + elementPosition,behavior: 'smooth',});}}>{'Next steps'}</div>
            </div>
            <ConceptVideoComponent refer={The718ConceptRef} video={Porsche_718_Models_Concept} heading={"For the sport of it."} text={"The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow - and transfer it to the roads of today's world. With one goal: to take the everyday out of every day."} />
            <div className="parallax-container" ref={DesignRef}>
                <Spacer size={50}/>
                <div className={`parallax-background ${stickyDesign ? 'sticky' : ''}`} ref={designBackgroundRef}>
                    <ReactPlayer url={Porsche_718_Models_Design} height={855} width={1520} playing loop muted/>
                </div>
                <Spacer size={50}/>
                <div style={{background:'#f0f',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center'}} ref={designForegroundRef}>
                    <div style={{padding:'10px 108px'}}>
                        <div style={{fontFamily:'PorscheNext SemiBold', fontSize:'48px', color:'#fff'}}>
                            Design.
                        </div>
                        <div style={{fontFamily:'PorscheNext Regular', fontSize:'16px', color:'#fff'}}>
                            Precise, not fanciful. Self-assured, not restrained. Low, wide and sleek. The exterior design of the 718 models is distinguished by sporty edges and clearly defined formal contours.
                        </div>
                    </div>
                    <div style={{width:'fit-content',padding:'10px 108px'}}>
                        <ButtonFilled image={PlusIcon} text={'Discover More'} link={''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const CarsPageData = {
    '718-models': <Porsche718Models />,
    '718-cayman-gt4-rs': <></>,
    '911-models': <></>,
    '911-turbo-models': <></>,
    '911-gt3-models': <></>,
    '911-gt3-rs': <></>,
    '911-st': <></>,
    'taycan-models': <></>,
    'panamera-models': <></>,
    'macan-models': <></>,
    'cayenne-models': <></>,
    'cayenne-coupe-models': <></>
}
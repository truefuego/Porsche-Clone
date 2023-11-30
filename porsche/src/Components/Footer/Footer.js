import React, { useState } from 'react'
import './Footer.css'
import ShareIcon from '../../Assets/Images/Icons/share.png'
import FaceBook from '../../Assets/Images/Icons/facebook.png'
import YouTube from '../../Assets/Images/Icons/youtube.png'
import Pintrest from '../../Assets/Images/Icons/pinterest.png'
import Instagram from '../../Assets/Images/Icons/instagram.png'
import LinkedIn from '../../Assets/Images/Icons/linkedin.png'
import Twitter from '../../Assets/Images/Icons/twitter.png'
import Digg from '../../Assets/Images/Icons/digg.png'

const Locations = [
  {
    region: "North America",
    countries: ["Canada (English)", "Canada (French)", "USA"]
  },
  {
    region: "Latin America",
    countries: ["Mexico", "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Dominican Republic", "Ecuador", "El Salvador", "Guadeloupe", "Guatemala", "Haiti", "Jamaica", "Panama", "Paraguay", "Peru", "Puerto Rico", "Trinidad & Tobago", "Uruguay", "Other countries"]
  },
  {
    region: "Europe",
    countries: ["Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Great Britain", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Lithuania", "Latvia", "Luxemburg", "Macedonia", "Malta", "Moldova", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland (German)", "Switzerland (French)", "Switzerland (Italian)", "Ukraine", "Other countries"]
  },
  {
    region: "Middle East",
    countries: ["Abu Dhabi", "Bahrin", "Dubai", "Fujairah", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Qatar", "Saudi Arabia", "Sharjah", "Middle East (English)", "Middle East (French)"]
  },
  {
    region: "Africa",
    countries: ["Egypt", "Ghana", "La Reunion", "Morocco", "Mauritius", "South Africa", "Tunisia"]
  },
  {
    region: "Asia",
    countries: ["Armenia", "Azerbaijan", "Turkey", "India", "Brunei", "Indonesia", "Malaysia", "Mongolia", "Philippines", "Singapore", "Sri Lanka", "Thailand", "Vietnam", "China Mainland (Chinese)", "China Mainland (English)", "Hong-Kong & Macau", "Japan", "Kazakhstan", "South Korea", "Taiwan (Chinese)" ,"Taiwan (English)" ,"Other countries/regions"]
  },
  {
    region: "Australia/Oceania",
    countries: ["Australia", "French Polynesia", "New Caledonia", "New Zealand", "Other countries"]
  }
]

const Footer = () => {
  const [region,setRegion] = useState('Select a region');
  const [country,setCountry] = useState('Select a country/region');
  const [countries,setCountries] = useState([])

  const handleRegionSelect = (e) => {
    setRegion(e.target.value)
    setCountries(Locations.find(ctr => ctr.region === e.target.value).countries)
  }

  const handleCountrySelect = (e) => {
    setCountry(e.target.value)
  }
  return (
    <div className='footer'>
      <div className='container-center'>
        <div className='footer-upper'>
          <div className='footer-horizontal-line'/>
          <div className='footer-upper-links'>
            <div className='footer-upper-links-area'>
              <p className='footer-upper-links-header'>Build & Find</p>
              <p className='footer-upper-links-link'>Build your Porsche</p>
              <p className='footer-upper-links-link'>Compare Models</p>
              <p className='footer-upper-links-link'>Search Pre-Owned</p>
              <p className='footer-upper-links-link'>Find your Porsche Centre</p>
              <p className='footer-upper-links-link'>Download the model range catalogue</p>
            </div>
            <div className='footer-upper-links-area'>
              <p className='footer-upper-links-header'>Online Services</p>
              <p className='footer-upper-links-link'>Porsche Login</p>
              <p className='footer-upper-links-link'>Sign up for News</p>
            </div>
            <div className='footer-upper-links-area'>
              <p className='footer-upper-links-header'>Behind the Scenes</p>
              <p className='footer-upper-links-link'>Passion Motorsports</p>
              <p className='footer-upper-links-link'>Porsche Experience</p>
              <p className='footer-upper-links-link'>Porsche Classic</p>
              <p className='footer-upper-links-link'>Visit Porsche Museum</p>
            </div>
            <div className='footer-upper-links-area'>
              <p className='footer-upper-links-header'>Porsche Company</p>
              <p className='footer-upper-links-link'>Latest News</p>
              <p className='footer-upper-links-link'>At a Glance</p>
              <p className='footer-upper-links-link'>Jobs & Careers</p>
              <p className='footer-upper-links-link'>Contact & Information</p>
              <p className='footer-upper-links-link'>Christophorus - The Porsche Magazine</p>
              <div className='footer-link-dropdown'>
                <div className='footer-link-button hover-red'>
                    <img className='footer-link-button-image' src={ShareIcon} alt='pointer'/>
                    <p className='footer-link-button-text'>Share Page</p>
                </div>
                <div className='footer-link-dropdown-content'>
                  <div className='social-links-link light-hover-blue'>
                    <img className='social-links-link-image' src={FaceBook} alt='FaceBook'/>
                  </div>
                  <div className='social-links-link light-hover-light-blue'>
                    <img className='social-links-link-image' src={Twitter} alt='Twitter'/>
                  </div>
                  <div className='social-links-link light-hover-black'>
                    <img className='social-links-link-image' src={Digg} alt='Digg'/>
                  </div>
                  <div className='social-links-link light-hover-blue'>
                    <img className='social-links-link-image' src={LinkedIn} alt='LinkedIn'/>
                  </div>
                  <div className='social-links-link light-hover-red'>
                    <img className='social-links-link-image' src={Pintrest} alt='Pintrest'/>
                  </div>
                </div>
              </div>
              <div className='social-links'>
                <p className='social-links-header'>Connect with Porsche</p>
                <div className='social-links-area'>
                  <div className='social-links-link hover-blue'>
                    <img className='social-links-link-image' src={FaceBook} alt='FaceBook'/>
                  </div>
                  <div className='social-links-link hover-red'>
                    <img className='social-links-link-image' src={YouTube} alt='YouTube'/>
                  </div>
                  <div className='social-links-link hover-red'>
                    <img className='social-links-link-image' src={Pintrest} alt='Pintrest'/>
                  </div>
                  <div className='social-links-link hover-blue'>
                    <img className='social-links-link-image' src={Instagram} alt='Instagram'/>
                  </div>
                  <div className='social-links-link hover-blue'>
                    <img className='social-links-link-image' src={LinkedIn} alt='LinkedIn'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-lower'>
        <p className='footer-lower-header'>Change country/region:</p>
        <div className='region-selector-area'>
          <select value={region} onChange={handleRegionSelect} className='region-selector'> 
            <option value={'Select a region'} selected disabled hidden>{'Select a region'}</option>
            {Locations.map((item) => <option className='region-selector-option' value={item.region}>{item.region}</option>)}
          </select> 
            <select value={country} onChange={handleCountrySelect} className='region-selector'>
              <option value={'Select a country/region'} selected disabled hidden>{'Select a country/region'}</option>
              {countries !== undefined && countries.map((item) => <option className='region-selector-option' value={item}>{item}</option>)}
            </select>
        </div>
        <div className='footer-horizontal-line-lower'/>
        <div className='footer-last-line-area'>
          <p className='footer-last-line-text'>© 2023 Porsche India - SKODA AUTO Volkswagen India Private Limited - India.<u className='footer-last-line-underline'>Legal notice.</u><u className='footer-last-line-underline'>Cookie & Privacy Policy.</u><u className='footer-last-line-underline'>Corporate Governance.</u><u className='footer-last-line-underline'>Open Source Software Notice.</u><u className='footer-last-line-underline'>Whistleblower System.</u><u className='footer-last-line-underline'>Business and Human Rights.</u></p>
        </div>
        </div>
    </div>
  )
}

export default Footer
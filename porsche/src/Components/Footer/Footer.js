import React from 'react'
import './Footer.css'
import ShareIcon from '../../Assets/Images/Icons/share.png'
import FaceBook from '../../Assets/Images/Icons/facebook.png'
import YouTube from '../../Assets/Images/Icons/youtube.png'
import Pintrest from '../../Assets/Images/Icons/pinterest.png'
import Instagram from '../../Assets/Images/Icons/instagram.png'
import LinkedIn from '../../Assets/Images/Icons/linkedin.png'
import Twitter from '../../Assets/Images/Icons/twitter.png'
import Digg from '../../Assets/Images/Icons/digg.png'

const Footer = () => {
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

        <div className='footer-horizontal-line-lower'/>
        <div className='footer-last-line-area'>
          <p className='footer-last-line-text'>© 2023 Porsche India - SKODA AUTO Volkswagen India Private Limited - India.<u className='footer-last-line-underline'>Legal notice.</u><u className='footer-last-line-underline'>Cookie & Privacy Policy.</u><u className='footer-last-line-underline'>Corporate Governance.</u><u className='footer-last-line-underline'>Open Source Software Notice.</u><u className='footer-last-line-underline'>Whistleblower System.</u><u className='footer-last-line-underline'>Business and Human Rights.</u></p>
        </div>
        </div>
    </div>
  )
}

export default Footer
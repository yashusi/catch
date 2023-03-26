import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-main">
        <div class="footer-col">
          <div style={{display: 'inline-block', textAlign: 'left'}}>
            <div class="footer-heading">LEARN</div>
            <div class="footer-row">History</div>
            <div class="footer-row">FAQ</div>
            <div class="footer-row">Team</div>
          </div>
        </div>
        <div class="footer-col">
          <div style={{display: 'inline-block', textAlign: 'left'}}>
            <div class="footer-heading">GET INVOLVED</div>
            <div class="footer-row">Tutorials</div>
            <div class="footer-row">Partner Application</div>
          </div>
        </div>
        <div class="footer-col">
          <div style={{display: 'inline-block', textAlign: 'left'}}>
            <div class="footer-heading">SUPPORT</div>
            <div class="footer-row">GoFundMe</div>
            <div class="footer-row">Donate a Toy</div>
          </div>
        </div>
        <div class="footer-col">
          <div style={{display: 'inline-block', textAlign: 'left'}}>
            <div class="footer-heading">CONNECT</div>
            <div class="footer-row">
              <div><FaHome className='inline-icon'/>120 E Cameron Ave</div>
              <div>Chapel Hill, NC 27514</div> 
              <div>Room 19B</div>
            </div>
            <div class="footer-row"><FaEnvelope className='inline-icon'/>catchUNC@gmail.com</div>
          </div>
        </div>
      </div>
      <div class="links">
        <FaInstagram size={20} className='icon'/>
        <FaFacebook size={20} className='icon'/>
        <FaLinkedin size={20} className='icon'/>
      </div>
    </div>
  )
}

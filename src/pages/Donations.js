import React from 'react'
import './Donations.css';
<link href="https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:300,400,500,700|Source+Code+Pro:400,700&display=swap"></link>

export default function Donations() {
  const gofundmeform = "https://gofund.me/9dca4d2f";
  return (
    <>
    <h1><b>Donations</b></h1>
    <iframe src={gofundmeform} id="gfm-form" title="gofundme form" style={{ width: '80%', height: "676px", overflow: "scroll"}}></iframe>
    <h2 style={{paddingTop: "100px"}}><b>Past Donation Sites</b></h2>
    <div class ="sitesection">
    <img src={require('../images/Donations/donation1.jpg')} class="pictures" alt="Donation to Carolina Institute for Developmental Disabilities" style={{maxWidth: "40%", maxHeight: "auto"}}></img>
    <div class="text-box" style={{paddingLeft: "3%"}}>
    <h3><b>Carolina Institute for Developmental Disabilities</b></h3>
    <div class="description">The Carolina Institute for Developmental Disabilities is a comprehensive program for services, research, and training relevant to individuals with developmental disabilities and their families. The Carolina Institute provides a continuum of clinical services from complex, interdisciplinary evaluations on-site to more limited and selected clinical services and training in all 100 counties in North Carolina. The Institute brings together state-of-the-art research and clinical practice to ensure the best possible care for citizens of North Carolina.</div>
    <div><strong>Total Toys Donated: </strong>20</div>
    <div><strong>Total Donation: </strong>2</div>
    </div>
    </div>
    <div class="sitesection">
    <div class="text-box" style={{paddingRight: "3%"}}>
    <h3><b>UNC Center for Rehabilitative Care</b></h3>
    <div class="description">The mission of the UNC Inpatient Rehabilitation Center is to improve, restore and maintain functional abilities and maximize quality of life in patients with disabilities; educate health care professionals in rehabilitation care and services; and advance rehabilitation research. Rehabilitative care provides persons served with the skills and support necessary to function in an environment with as much independence and choice and as little supervision and restriction as possible. The totality of this care spans the rehabilitation continuum to optimize the functionality and quality of life and prevent and or treat conditions of physically disabled persons.</div>
    <div><strong>Total Toys Donated: </strong>14</div>
    <div><strong>Total Donations: </strong>2</div>
    </div>
    <img src={require('../images/Donations/donation2.jpg')} class="pictures" alt="Donation to UNC Center for Rehabilitative Care" style={{maxWidth: "40%", maxHeight: "auto", float: "left"}}></img>
    </div>
    <div class ="sitesection">
    <img src={require('../images/Donations/donation3.jpg')} class="pictures" alt="Donation to Levine Children's Hospital" style={{maxWidth: "40%", maxHeight: "auto"}}></img>
    <div class="text-box" style={{paddingLeft: "3%"}}>
    <h3><b>Atrium Health Levine Children's Hospital</b></h3>
    <div class="description">The Carolina Institute for Developmental Disabilities is a comprehensive program for services, research, and training relevant to individuals with developmental disabilities and their families. The Carolina Institute provides a continuum of clinical services from complex, interdisciplinary evaluations on-site to more limited and selected clinical services and training in all 100 counties in North Carolina. The Institute brings together state-of-the-art research and clinical practice to ensure the best possible care for citizens of North Carolina.</div>
    <div><strong>Total Toys Donated: </strong>16</div>
    <div><strong>Total Donations: </strong>2</div>
    </div>
    </div>
    <div class="sitesection">
    <div class="text-box" style={{paddingRight: "3%"}}>
    <h3><b>Novant Health</b></h3>
    <div><strong>Total Toys Donated: </strong>10</div>
    <div><strong>Total Donations: </strong>1</div>
    </div>
    <img src="" class="pictures" alt="Donation to Novant Health" style={{maxWidth: "40%", maxHeight: "auto", float: "left"}}></img>
    </div>
    <div class="sitesection">
    <div class="text-box" style={{paddingRight: "3%"}}>
    <h3><b>Barton Pond Elementary School</b></h3>
    <div><strong>Total Toys Donated: </strong>10</div>
    <div><strong>Total Donations: </strong>1</div>
    </div>
    <img src="" class="pictures" alt="Donation to Barton Pond Elementary School" style={{maxWidth: "40%", maxHeight: "auto", float: "left"}}></img>
    </div>
    <div class="sitesection">
    <div class="text-box" style={{paddingRight: "3%"}}>
    <h3><b>Aversboro Elementary School</b></h3>
    <div><strong>Total Toys Donated: </strong>10</div>
    <div><strong>Total Donations: </strong>1</div>
    </div>
    <img src="" class="pictures" alt="Donation to Aversboro Elementary School" style={{maxWidth: "40%", maxHeight: "auto", float: "left"}}></img>
    </div>
    <div id="pastpartnersection">
    <h3><b>Past Partners</b></h3>
    <ul>
      <li>Autism Society of North Carolina</li>
      <li>OT for Wake County Public Schools</li>
    </ul>
    <p><em>Donation data collection began in Spring 2021.</em></p>
    </div>
    </>
  )
}


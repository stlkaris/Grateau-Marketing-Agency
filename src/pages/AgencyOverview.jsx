import React from 'react'
import teamPhoto from '../assets/images/teamphoto.jpg';
import { section } from 'motion/react-client';

const AgencyOverview = () => {
  return (
    <section className='agency-overview'>
        <div className='overview-content'>
            <h2>About Our Agency</h2>
            <p>We are a full-service digital marketing agency dedicated to delivering data-driven marketing solutions.
                We help businesses grow by leveraging modern marketing strategies tailored to achieve their unique goals.
             </p>
             <div className='usps'>
                <div className='usp'>
                    <span role='img' arai-label='experience'>💼</span>
                    <p>10+ Years of Experience</p>
                </div>
                <div className='usp'>
                    <span role='img' aria-label='projects'>📈</span>
                    <p>100+ Successful Projects</p>
                </div>
                <div>
                    <span role='img' aria-label='certified'> 🏅</span>
                    <p>Certified Marketing Experts</p>
                </div>
             </div>
        </div>
        <img src={teamPhoto}  alt='Our Team' className='team-photo'/>
    </section>
  )
}

export default AgencyOverview

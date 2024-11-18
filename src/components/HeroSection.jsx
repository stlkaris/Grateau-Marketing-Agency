import React from 'react'
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <motion.div>
      <section className='background-img hero-section'>
        <video 
        autoPlay
        loop
        muted
        playsInline
        >
          <source 
          src='/videos/digitalmarketingvideo.mp4'
          type='video/mp4'
          />
        </video>
       <div className='hero-content'>
            <h1>Growth-Driven Digital Marketing Solutions to Elevate Your Brand.</h1>
            <p>We provide end-to-end digital marketing solutions that drive growth.</p>
            <div>
                <button className='cta-btn-primary'>Get Started Now</button>
                <button className='cta-btn-secondary'>View Our Services</button>
            </div>
        </div>
      </section>
    
    </motion.div>
  )
}

export default HeroSection

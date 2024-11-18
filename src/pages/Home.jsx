import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
     <Navbar />
     <HeroSection /> 
    
               
      
      <ServiceCard />
      {/* <section className='contact-section'>
        <h2>Contact Us</h2>
        <ContactForm />
      </section> */}
      <Footer />  
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='relative bg-gray-50'>
    <Navbar />
    <section className='hero-section mx-auto px-4 text-center'>
    <div className='hero-content'>
          <h1 className='text-4xl font-extrabold text-blue-600 mb-4 mt-4'>Welcome to Grateau Marketing Agency.</h1>
          <p className='text-lg text-gray-700 mb-4'>We specialize in digital marketing solutions to help businesses grow.</p>
        </div> 

      <div className='relative mb-8'>
      <video 
      autoPlay
      loop
      muted
      playsInline
      className='w-full h-auto object-cover rounded-md shadow-lg'
      >
        <source 
        src='/videos/digitalmarketingvideo.mp4'
        type='video/mp4'
        />
      </video>
      </div>
          <div className='flex justify-center gap-6 mb-4'>
              <button className='cta-btn-primary px-8 py-3 bg-purple-400 text-white font-semibold rounded-lg hover:bg-red-400 transition duration-300'>
              <Link to="/contact">Get Started Now</Link>
                </button>
              <button className='cta-btn-secondary px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600  hover:text-white transition duration-300'>
              <Link to="/services">View Our Services</Link>             
               </button>
          </div>
    </section>
    <section>
      <Footer />  
     </section>
     </motion.div>
  )
}

export default Home

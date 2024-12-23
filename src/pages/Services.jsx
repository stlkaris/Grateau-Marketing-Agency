import React from 'react'
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
          title: "SEO Services",
          description:
            "Boost your organic search visibility and rank higher on search engines with our expert SEO strategies.",
          icon: "🔍",
          details:
            "Our SEO services include keyword research, on-page optimization, link building, and analytics reporting to drive sustainable growth.",
        },
        {
          title: "PPC Advertising",
          description: 
            "Drive targeted traffic and increase conversions with our strategic paid ad campaigns.",
          icon: "💰",
          details:
            "We create tailored pay-per-click campaigns for Google Ads, Bing, and social media platforms to maximize ROI.",
        },
        {
          title: "Content Marketing",
          description:
            "Engage your audience with valuable, high-quality content that builds trust and authority.",
          icon: "✍️",
          details:
            "Our services include blog creation, video production, social media content, and more to boost brand visibility.",
        },
      ];

  return (
    <motion.section 
    className='services-offered py-12 bg-gray-100'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
      className='text-4xl font-extrabold text-gray-900 mb-6'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1 }}
      >
        Our services
        </motion.h2>
      <motion.div 
      className='mb-12'
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            >
              <source
                src="/videos/ourservices.mp4"
                type="video/mp4"
              />
                Your browser does not support the video tag.
         </video>
         </motion.div>    
        <div className='services-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div>
               <ServiceCard key={index} 
               className="sevice-card"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.3 }}
               title={service.title} description={service.description} icon={service.icon} />
               </motion.div>
            ))}
        </div>
        <Link
          to="/"
          className="mt-12 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </Link>
        </div>
    
    </motion.section>
  )
}

export default Services

import React from 'react'
import ClientTestimonials from '../components/ClientTestimonials'

const ClientPortal = () => {
  return (
    <div className='client-portal'>
      <h2 className='text-3xl font-extrabold text-center my-4 text-blue-700'>Client Dashboard</h2>
      <p className='text-lg text-center mb-8'>Welcome, Sylvie! Here you can track your ongoing campaigns and their progress.</p>

      <ClientTestimonials />
      <section className='campaign-visualization my-4 text-gray-900 text-xl'>
         <div className="video-container">
         <h3 className='text-2xl font-bold text-center mb-6 text-blue-600'>Campaign Insights</h3>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded shadow-lg"
            >
              <source
                src="/videos/campaigninsights.mp4"
                type="video/mp4"
              />
                Your browser does not support the video tag.
         </video>  
            </div>
         
      
      </section>
     </div>
  )
}

export default ClientPortal

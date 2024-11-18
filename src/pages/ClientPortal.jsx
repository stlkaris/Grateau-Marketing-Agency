import React from 'react'
import ClientTestimonials from '../components/ClientTestimonials'

const ClientPortal = () => {
  return (
    <div className='client-portal'>
      <h2>Client Dashboard</h2>
      <p>Welcome, Sylvie! Here you can track your ongoing campaigns and their progress.</p>

      <ClientTestimonials />
      <section>
        <h3>Campaign Insights</h3>
        <div className='visualization-container max-w-4xl mx-auto'>
            <img 
            src="" 
            alt="Campaign Data Visualization" 
            className='w-full h-auto rounded shadow-lg mb-6'
            />
         <div className="video-container">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded shadow-lg"
            >
              <source
                src="/videos/ourservices.mp4"
                type="video/mp4"
              />
                Your browser does not support the video tag.
         </video>  
            </div>
        </div>
      </section>
     </div>
  )
}

export default ClientPortal

import React from 'react'
import ServiceCard from '../components/ServiceCard'

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
    <section className='services-offered py-12 bg-gray-100"'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className='text-4xl font-extrabold text-gray-900 mb-6'>Our Services</h2>
      <div className='mb-12'>
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
         </div>    
        <div className='services-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
            ))}
        </div>
        </div>
    
    </section>
  )
}

export default Services

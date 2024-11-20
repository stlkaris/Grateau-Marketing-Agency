import React from 'react'

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className='service-card bg-white shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out'>
      <div className='service-icon text-5xl mb-4'>{icon}</div>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    
  )
}

export default ServiceCard;

import React from 'react'
import teamPhoto from '../assets/images/teamphoto.jpg';

const AgencyOverview = () => {
  return (
    <section className='agency-overview bg-gray-50 py-16 px-6 md:px-16'>
        <div className='overview-content flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 '>
           <div className='flex flex-col p-8'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-blue-600'>About Our Agency</h2>
            <p className='text-lg mb-6'>We are a full-service digital marketing agency dedicated to delivering data-driven marketing solutions.
                We help businesses grow by leveraging modern marketing strategies tailored to achieve their unique goals.
             </p>
             <div className='usps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='uspbg-white shadow-md p-4 rounded-lg flex items-center gap-4'>
                    <span className='text-4xl'  role='img' arai-label='experience'>💼</span>
                    <p className='text-lg font-medium'>10+ Years of Experience</p>
                </div>
                <div className='usp bg-white shadow-md p-4 rounded-lg flex items-center gap-4'>
                    <span className='text-4xl' role='img' aria-label='projects'>📈</span>
                    <p className='text-lg font-medium'>100+ Successful Projects</p>
                </div>
                <div  className='usp bg-white shadow-md p-4 rounded-lg flex items-center gap-4'>
                    <span className='text-4xl' role='img' aria-label='certified'> 🏅</span>
                    <p className='text-lg font-medium'>Certified Marketing Experts</p>
                </div>
                </div>
             </div>
        </div>
        <img src={teamPhoto}  alt='Our Team' className='team-photo '/>
    </section>
  )
}

export default AgencyOverview

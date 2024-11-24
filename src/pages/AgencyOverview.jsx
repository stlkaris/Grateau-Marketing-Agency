import React from 'react'
import { motion } from 'framer-motion';
import teamPhoto from '../assets/images/teamphoto.jpg';

const AgencyOverview = () => {
  return (
    <section className='agency-overview bg-gray-50 py-16 px-6 md:px-16'>
        <motion.div 
        className='overview-content flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
           <motion.div 
           className='flex flex-col p-8'
           initial={{ x: -50, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           >
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-blue-600'>About Our Agency</h2>
            <p className='text-lg mb-6'>We are a full-service digital marketing agency dedicated to delivering data-driven marketing solutions.
                We help businesses grow by leveraging modern marketing strategies tailored to achieve their unique goals.
             </p>
            
             <motion.div 
             className="usps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             initial="hidden"
             animate="visible"
             variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
             }}
             >{[ 
                {
                    emoji: '💼',
                    label: 'experience',
                    text: '10+ Years of Experience',
                  },
                  {
                    emoji: '📈',
                    label: 'projects',
                    text: '100+ Successful Projects',
                  },
                  {
                    emoji: '🏅',
                    label: 'certified',
                    text: 'Certified Marketing Experts',
                  },
             ].map(({ emoji, label, text }, index) => (
                <motion.div
                key={index}
                className='uspbg-white shadow-md p-4 rounded-lg flex items-center gap-4'
                shileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{ 
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                 <span className='text-4xl'  role='img' arai-label='experience'>{emoji}</span>
                 <p className='text-lg font-medium'>{text}</p>
                </motion.div>
             ))}
                {/* <div className='uspbg-white shadow-md p-4 rounded-lg flex items-center gap-4'>
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
                </div> */}
                </motion.div>
                </motion.div>
             </motion.div>
         <motion.img 
        src={teamPhoto}  
        alt='Our Team'
         className='team-photo rounded-lg shadow-lg'
         initial={{ x: 50, opacity: 0 }}
         animate={{ x : 0, opacity: 1 }}
         transition={{ duration: 1, delay: 0.3 }}
         />
     
    </section>
  )
}

export default AgencyOverview

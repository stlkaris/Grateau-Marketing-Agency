import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ClientTestimonials from '../components/ClientTestimonials';

const ClientPortal = () => {
  
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [subTextRef, subTextInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [campaignRef, campaignInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="client-portal">
      
      <motion.h2
        ref={headingRef}
        className="text-3xl font-extrabold text-center my-4 text-blue-700"
        initial={{ opacity: 0, y: -50 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Client Dashboard
      </motion.h2>

      
      <motion.p
        ref={subTextRef}
        className="text-lg text-center mb-8"
        initial={{ opacity: 0 }}
        animate={subTextInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome, Sylvie! Here you can track your ongoing campaigns and their progress.
      </motion.p>

      
      <motion.div
        ref={testimonialsRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={testimonialsInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ClientTestimonials />
      </motion.div>

  
      <motion.section
        ref={campaignRef}
        className="campaign-visualization my-4 text-gray-900 text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={campaignInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="video-container">
          <motion.h3
            className="text-2xl font-bold text-center mb-6 text-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={campaignInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Campaign Insights
          </motion.h3>
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={campaignInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <source src="/videos/campaigninsights.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
        <Link
        to="/"
        className="mt-8 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </Link>
      </motion.section>
    </div>
  );
};

export default ClientPortal;

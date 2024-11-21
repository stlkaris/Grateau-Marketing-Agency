// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Contact = () => {
  return (
    <motion.div 
      className="contact-page bg-gray-100 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.section 
        className="contact-header bg-blue-800 text-white text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">Have questions or need help? We’d love to hear from you.</p>
        <ScrollLink 
          to="contact-form-section"
          smooth={true}
          duration={800}
          className="scroll-button bg-white text-blue-800 py-2 px-4 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white hover::before transition duration-300"
        >
          Scroll to Form
        </ScrollLink>
      </motion.section>

      <motion.section 
        id="contact-form-section"
        className="contact-form-section bg-white shadow-md rounded-lg max-w-3xl mx-auto mt-10 p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="form-container">
          <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </motion.section>

      <motion.section 
        className="contact-info bg-gray-200 py-10 mt-10 text-center rounded-lg max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>
        <p className="text-lg mb-4">Email: <a href="mailto:info@agencyname.com" className="text-blue-800 hover:underline">info@agencyname.com</a></p>
        <p className="text-lg mb-4">Phone: <a href="tel:+1234567890" className="text-blue-800 hover:underline">+1 234 567 890</a></p>
        <p className="text-lg">Address: 123 Marketing Street, Suite 456, Cityville, Country</p>
      </motion.section>

      <motion.section 
        className="map-section mt-10 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Agency Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450941!2d144.9537353153186!3d-37.816279279751566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e3b6f012a1!2sMarketing%20Street%2C%20Cityville%2C%20Country!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default Contact;

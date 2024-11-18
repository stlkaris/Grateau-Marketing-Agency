import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section className="contact-page py-12 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-center text-gray-600 mb-12"> Have questions or need assistance? Fill out the form below, and we’ll
        get back to you as soon as possible.</p>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-12">
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
    </div>
    </section>
  )
}

export default Contact

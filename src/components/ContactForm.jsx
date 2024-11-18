import React, { useState } from 'react'
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   
    const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({...formData, [name]: value })
    };

    const handleSubmit = () => {
        e.preventDefault();

        axios.post('/api/contact', formData)
        .then((response) => {
            alert('Message sent successfully')
            setFormData({ name: "", email:"", message: ""})
        })
        .catch((error) => {
            console.error('Error sending message:', error)
        })
    }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
        <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700 font-medium'>
                Name
            </label>
            <input 
            type="text"
            id='name'
            name="name"
            value={formData.name}
            onChange={handleChange}
           className='w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600'
           placeholder='Your Name'
           required
             />
        </div>

        <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 font-medium'>
                Email
            </label>
            <input
             type="email"
             id='email'
             name="email"
             value={formData.email}
             onChange={handleChange}
             className='w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600'
             placeholder='Your Email'
             required
            />
        </div>

        <div mb-4>
            <label htmlFor="message" className='block text-gray-700 font-medium'>
                Message
            </label>
            <textarea 
            name="message"
             id="message"
             value={formData.message}
             onChange={handleChange}
             className='w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline -none focus:ring-2 focus:ring-blue-600'
             placeholder='Your Message'
             rows='5'
             required
             >

            </textarea>
        </div>

        <button
          type="submit"
          className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors'
        >Submit</button>
    </form>
  )
}

export default ContactForm;
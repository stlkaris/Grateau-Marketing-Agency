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
        })
        .catch((error) => {
            console.error('Error sending message:', error)
        })
    }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
        <input type="text" name='name' value={formData.name} placeholder='Your Name' onChange={handleChange} required/>
        <input type="email" name='email'  placeholder='Your Email' onChange={handleChange} required />
        <textarea name="message" id="Your Message"  onChange={handleChange} required></textarea>
        <button type='submit'>Send Message</button>
    </form>
  )
}

export default ContactForm;
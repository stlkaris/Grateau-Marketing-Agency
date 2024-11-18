import React from 'react'


const Footer = () => {
  return (
    <footer>
        <div>
            <div>
                <h3>Grateau Marketing Agency</h3>
                <p>Your trusted partner with digital marketing</p>
            </div>
            <div className='footer-links'>
                <ul>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/casestudies">Case Studies</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                </div>
                <div className='footer-subscription'> 
                    <h4>Subscribe for Updates</h4>
                    <input type="email"  placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
        </div>
    </footer>
  )
}

export default Footer

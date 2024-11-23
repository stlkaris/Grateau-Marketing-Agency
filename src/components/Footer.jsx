import React, { useState, useEffect} from 'react'


const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const handleSubscription = (e) => {
    e.preventDefault();
    console.log('Subscription form submitted')
  }

  useEffect(() => {
     console.log('Footer component mounted')

     return() => {
      console.log("Footer component unmounted")
     };
  }, []);

 useEffect(() => {
  const interval = setInterval(() => {
    setYear(new Date().getFullYear())
  }, 1000 * 60 * 60 * 24)
  return () => clearInterval(interval)
 }, [])
  return (
    <footer className='bg-blue-800 text-white'>
        <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-2xl font-semibold mb-2'>Grateau Marketing Agency</h3>
                <p className='text-gray-200'>Your trusted partner with digital marketing</p>
            </div>

            <div className='footer-links'>
                <h4 className='text-xl font-semibold mb-4'>Quick Links</h4>
                <ul className='space-y-2'>
                    <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                    <li><a href="/casestudies" className="hover:text-gray-300">Case Studies</a></li>
                    <li><a href="/blogpage" className="hover:text-gray-300">Blog Page</a></li>
                    <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
                </ul>
                </div>

                <div className='footer-subscription'> 
                    <h4 className='text-xl font-semibold mb-4'>Subscribe for Updates</h4>
                    <form className='flex flex-col space-y-4' onSubmit={handleSubscription}>
                    <input 
                    type="email" 
                    placeholder='Enter your email'
                    className='w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                    <button 
                    type="submit" 
                    className='w-full p-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition duration-300 '>
                    Subscribe
                    </button>
                    </form>
                </div>
        </div>
        <div className='mt-10 border-t border-gray-400 pt-4 text-center text-gray-400'>
          &copy; {year} Grateau Marketing Agency. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer

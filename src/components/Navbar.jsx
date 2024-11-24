// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import companyLogo from '../assets/images/logo2.jpg';


// const Navbar = () => {
//   return (
//       <motion.nav 
//       className="navbar bg-blue-600 text-white shadow-md"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       >
//         <div className='container mx-auto px-2 pt-4'>
//         <motion.div
//         className="container-logo mb-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//         >   
//         <motion.div
//         >
//         <img src={companyLogo}  alt="Grateau Marketing Logo"
//          className="w-24 h-24 rounded-full mx-auto" />       
        
//         </motion.div>
//           <motion.div 
//             className='logo font-bold text-4xl'
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             >
//             Grateau Marketing Agency
//             </motion.div>
//             </motion.div>
//             <motion.ul
//             className="nav-links flex flex-wrap justify-center py-4 gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { visible: 1, transition: { staggerChildren: 0.2 } },
//             }}
//             >
//               {[
//                   { name: 'Home Page', path: '/' },
//                   { name: 'Agency Overview', path: '/agencyoverview' },
//                   { name: 'Services', path: '/services' },
//                   { name: 'Case Studies', path: '/casestudies' },
//                   { name: 'Blog Page', path: '/blogpage' },
//                   { name: 'Contact', path: '/contact' },
//                   { name: 'Client Portal', path: '/clientportal' },
//                   { name: 'SEO Audit Page', path: '/seoauditpage' },
//                 ].map((link, index) => (
//                 <motion.li
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ durtion: 0.3 }}
//                 >
//                 <NavLink 
//                 to={link.path}
//                 className={({ isActive }) =>
//                 `transition duration-300 ${ 
//                 isActive ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'
//                 }`
//                 }
//                 >
//                 {link.name}
//                 </NavLink>
//                 </motion.li>
                 
//               ))}
               
//             </motion.ul>
//         </div>
//       </motion.nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import companyLogo from '../assets/images/logo2.jpg'

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 pt-4">
        <motion.div
          className="container-logo flex flex-col items-center mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >

          <img src={companyLogo}  alt="Grateau Marketing Logo"
            className="w-24 h-24 rounded-full mx-auto" />   
          <MotionLink
            to="/"
            className="logo font-bold text-3xl text-center mt-2 text-white"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Grateau Marketing Agency
          </MotionLink>
        </motion.div>

        <ul className="nav-links flex flex-wrap justify-center py-4 gap-4">
          <li>
            <Link to="/" className="hover:text-purple-400 transition duration-300">Home Page</Link></li>
          <li>
            <Link to="/agencyoverview" className="hover:text-purple-400 transition duration-300">Agency Overview</Link></li>
          <li>
            <Link to="/services" className="hover:text-purple-400 transition duration-300">Services</Link></li>
          <li>
            <Link to="/casestudies" className="hover:text-purple-400 transition duration-300">Case Studies</Link></li>
          <li>
            <Link to="/blogpage" className="hover:text-purple-400 transition duration-300">Blog Page</Link></li>
          <li>
            <Link to="/contact" className="hover:text-purple-400 transition duration-300">Contact</Link></li>
          <li>
            <Link to="/clientportal" className="hover:text-purple-400 transition duration-300">Client Portal</Link></li>
          <li>
            <Link to="/seoauditpage" className="hover:text-purple-400 transition duration-300">SEO Audit Page</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

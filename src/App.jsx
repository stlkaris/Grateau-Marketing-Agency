import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AgencyOverview from './pages/AgencyOverview';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import ClientPortal from './pages/ClientPortal';
import BlogPage from './pages/BlogPage';
import SEOAuditPage from './pages/SEOAuditPage';
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/agencyoverview' element={<AgencyOverview />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/casestudies' element={<CaseStudies />}></Route>
          <Route path='/blogpage' element={<BlogPage />}></Route> 
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/clientPortal' element={<ClientPortal />}></Route>  
          <Route path="/seoauditPage" element={<SEOAuditPage />}></Route> 

      </Routes>
    </Router>
  )
}

export default App;

import React, { useState } from 'react'
import { motion } from 'framer-motion'


const SEOAuditTool = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [auditResult, setAuditResult] = useState(null)
    const [error, setError] =useState(null)

    const performAudit = async () => {
        if (!url) {
            setError("Please enter a valid URL")
            return;
        }

        setLoading(true)
        setError(null)
        setAuditResult(null)
    
     
    try {
         const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`)
         const html = await response.text()
         const parser = new DOMParser()
         const doc = parser.parseFromString(html, text/html)
         const title = doc.querySelector('title')?.innerText || "No title found"
         const metaDescription = doc.querySelector('meta[name="description"]').content || 'No metadescription found'
         const h1 = doc.querySelector('h1').innerText || 'NoH1 tag found'

         setAuditResult({ title, metaDescription, h1})

    } catch (err) {
        setError("Failed to fetch or analyze the URL. Please try again")
    } finally {
        setLoading(false)
    }
}
  return (
    <motion.div 
    className='max-w-4xl mx-auto p-6 bg-white shaodow-lg rounded-lg' 
    initial={{ opacity: 0, y: 50 }}
    animation={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.h2 
       className='text-3xl font-bold text-center text-blue-600 mb-4'
       initial={{ scale: 0.9, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 0.4 }}
       >
        SEO Audit Tool
        </motion.h2>
      <motion.p 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1}} 
      trasition={{ duration: 0.6, delay: 0.3 }} 
      className='text-lg text-gray-700 text-center mb-6'>Enter a URL to perform a basic SEO audit</motion.p>

      <motion.div 
      className='mb-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      >
        <input type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='https://example.com'
        className='w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </motion.div>
      <motion.button
        onClick={performAudit}
        className="w-full p-3 border-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
            {loading ? 'Auditing...' : 'Perform Audit'}
      </motion.button>

      {error && <p className='text-red-500 mt-4'>{error}</p>}
      {auditResult && (
        <motion.div 
        className='mt-2 bg-gray-50 p-4 rounded-lg shadow-md'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h3 className='text-xl font-semibold text-blue-600 mb-2'>Audit Results</h3>
                <ul className='space-y-4 text-gray-700'>
                    <li><strong>Title:</strong>{auditResult.title}</li>
                    <li><strong>Meta Description:</strong>{auditResult.metaDescription}</li>
                    <li><strong>H1 Tag:</strong>{auditResult.h1}</li>
                </ul>
        </motion.div>
      )}
    </motion.div>
  )
}

export default SEOAuditTool

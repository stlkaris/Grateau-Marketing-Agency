import { div, p } from 'motion/react-client'
import React, { useState } from 'react'

const SEOAuditTool = () => {
    const [URL, setUrl] = useState('')
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

         const parser = new DOMparser()
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
    <div>
      <h2>SEO Audit Tool</h2>
      <p>Enter a URL to perform a basic SEO audit</p>

      <div>
        <input type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='https://example.com'
        className=''
        />
      </div>
      <button
        onClick={performAudit}
        className=""
        disabled={loading}>
            {loading ? 'Auditing...' : 'Perform Audit'}
      </button>

      {error && <p className='text-red-500 mt-4'>{error}</p>}
      {auditResult && (
        <div>
            <h3>Audit Results</h3>
                <ul>
                    <li><strong>Title:</strong>{auditResult.title}</li>
                    <li><strong>Meta Description:</strong>{auditResult.metaDescription}</li>
                    <li><strong>H1 Tag:</strong>{auditResult.h1}</li>
                </ul>
        </div>
      )}
    </div>
  )
}

export default SEOAuditTool

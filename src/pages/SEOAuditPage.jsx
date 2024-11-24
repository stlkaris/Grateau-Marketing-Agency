
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOAuditTool from '../components/SEOAuditTool';

const SEOAuditPage = () => {
  return (
    <motion.div
      className="seo-audit-page bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <motion.h1
        className="text-4xl font-extrabold text-blue-600 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        SEO Audit Tool
      </motion.h1>

      <motion.div
        className="seo-audit-tool-container w-full max-w-4xl bg-white shadow-lg rounded-lg p-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SEOAuditTool />
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          to="/"
          className="inline-block bg-blue-601 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SEOAuditPage;

import React from 'react'

const BlogCard = ({ title, description, author, date, image}) => {
  
  return (
    <div className='blog-card shadow-lg border border-lg overflow-hidden'>
     <img src={image} alt={title} className='w-full h-68 object-cover blog-image' />
     <div className='p-4'>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <p className='text-gray-700 mb-4'>{description}</p>
      <div className='text-sm text-gray-600'>
        <p>By: {author}</p>
        <p>Published on: {date}</p>
      </div>
     </div>
    </div>
  
 );
  
}

export default BlogCard

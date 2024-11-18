import React from 'react'

const BlogCard = ({ title, description, author, date, image}) => {
  
  return (
    <div className='blog-card'>
     <img src={image} alt={title} />
     <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <p>By: {author}</p>
        <p>Published on: {date}</p>
      </div>
     </div>
    </div>
  )
}

export default BlogCard

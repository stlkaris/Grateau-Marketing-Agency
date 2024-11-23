import React from 'react'
import BlogCard from '../components/BlogCard'
import seoImage from '../assets/images/seo1.jpg';
import socialMediaImage from '../assets/images/socialmedia1.jpg';
import ppcImage from '../assets/images/ppc.jpg';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer'

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Boost Your SEO in 2024",
      description: "Learn the latest strategies to improve your search rankings.",
      author: "Stella Kariuki",
      date: "November 15, 2024",
      image: seoImage,
    },
    {
      id: 2,
      title: "The Power of Social Media Marketing",
      description:
        "Discover how social media can transform your digital marketing efforts.",
      author: "Sylvie Doe",
      date: "November 12, 2024",
      image: socialMediaImage,
    },
    {
      id: 3,
      title: "Understanding PPC Campaigns",
      description:
        "A beginner-friendly guide to setting up and managing PPC campaigns.",
      author: "Julien Smith",
      date: "November 10, 2024",
      image: ppcImage,
    },
   


  ]
  return (
    <div className='blog-page'>
      <motion.header 
      className='header text-center bg-blue-800 text-white py-4'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
        <h1 className='text-2xl font-bold'>Our Blog</h1>
        <p className='text-lg mt-2'>Stay updated with the latest tips and trends in digital marketing.</p>
      </motion.header>
    <div className='blog-container max-w-6xl mx-auto py-8 px-4 grid gap-8 sm:grip-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {blogs.map((blog) => (
     <InView key={blog.id} triggerOnce>
      {({ inView, ref }) => (
        <motion.div
        ref={ref}
        className='blog-card hover:scale-105 transition-transform duration-300'
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0} : {}}
        transition={{ duration: 0.8 }}
        >
        <BlogCard 
         key={blog.id}
         title={blog.title}
         description={blog.description}
         author={blog.author}
         date={blog.date}
         image={blog.image}
        />
        </motion.div>
      )}
        </InView>
      ))}
    </div>
    </div>
  )
}

export default BlogPage;

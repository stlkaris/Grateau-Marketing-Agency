import React from 'react'
import BlogCard from '../components/BlogCard'

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Boost Your SEO in 2024",
      description: "Learn the latest strategies to improve your search rankings.",
      author: "Stella Kariuki",
      date: "November 15, 2024",
      image: "/images/seo-tips.jpg",
    },
    {
      id: 2,
      title: "The Power of Social Media Marketing",
      description:
        "Discover how social media can transform your digital marketing efforts.",
      author: "Jane Doe",
      date: "November 12, 2024",
      image: "/images/social-media-marketing.jpg",
    },
    {
      id: 3,
      title: "Understanding PPC Campaigns",
      description:
        "A beginner-friendly guide to setting up and managing PPC campaigns.",
      author: "John Smith",
      date: "November 10, 2024",
      image: "/images/ppc-guide.jpg",
    },

  ]
  return (
    <div>
      <header>
        <h1>Our Blog</h1>
        <p>Stay updated with the latest tips and trends in digital marketing.</p>
      </header>
    <div>
      {blogs.map((blog) => (
        <BlogCard 
         key={blog.id}
         title={blog.title}
         description={blog.description}
         author={blog.author}
         date={blog.date}
         image={blog.image}
        />
      ))}
    </div>
    </div>
  )
}

export default BlogPage;

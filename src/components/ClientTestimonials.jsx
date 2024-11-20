import React from 'react'

const ClientTestimonials = () => {
    const testimonials = [
      {
        name: "Julien Doe",
        message: "This marketing agency helped our business grow by 200%. Excellent service!",
        company: "BrandCrafters",
      },
      {
        name: "Sylvie Smith",
        message: "The team is incredibly responsive and results-driven. Highly recommend them!",
        company: "CloudConnect",
      },
      {
        name: "Alice Johnson",
        message: "Our online presence has increased dramatically thanks to their expertise. Thank you!",
        company: "NextWave",
      },
    ]
  return (
    <section className='testimonial-container py-8 bg-gray-100'>
        <h2 className='text-2xl font-bold text-center mb-6'>What Our Clients Say</h2>
        <div className='testmonial-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='testimonial-card p-4 bg-white shadow rounded-lg'>
                    <h4 className='text-4xl font-bold text-gray-900'>{testimonial.name}</h4>
                    <span className='text-2xl text-gray-600 font-semibold'>{testimonial.company}</span>
                    <blockquote className='text-gray-800 italic mb-4'>{testimonial.message}</blockquote>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ClientTestimonials

import React from 'react'

const ClientTestimonials = () => {
    const testimonials = [
        {
            quote: "Agency Glateau helped us grow our online presence significantly.",
            client: "Sylvie Doe",
            company: "DoeTech"
          },
          {
            quote: "Working with Agency Glateau transformed our marketing strategy.",
            client: "Julien Smith",
            company: "SmithEnterprises"
          }
    ]
  return (
    <section>
        <h2>What Our Clients Say</h2>
        <div className='testmonial-container'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='testimonial-card'>
                    <blockquote>{testimonial.quote}</blockquote>
                    <h4>{testimonial.client}</h4>
                    <span>{testimonial.company}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ClientTestimonials

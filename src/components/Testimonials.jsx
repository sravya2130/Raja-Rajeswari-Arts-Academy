import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sravya',
      text: 'The regular Kuchipudi classes helped me learn with patience, discipline, and true love for the art.'
    },
    {
      name: 'Sreshta',
      text: 'I aced my Kuchipudi certificate exam thanks to the amazing guidance and practice here - this is the place to learn and shine!'
    },
    {
      name: 'Sai',
      text: 'I completed my Kuchipudi diploma with confidence and top results, all because of the dedicated training and support I got here!'
    }
  ];

  return (
    <section className='testimonials'>
      <span className='section-tag'>Student Stories</span>

      <h2>
        What Our <span>Students Say</span>
      </h2>

      <div className='testimonial-grid'>
        {testimonials.map((item, index) => (
          <div className='testimonial-card' key={index}>
            <p>“{item.text}”</p>
            <h4>{item.name}</h4>
          </div>
           ))}
      </div>
    </section>
  );
};

export default Testimonials;
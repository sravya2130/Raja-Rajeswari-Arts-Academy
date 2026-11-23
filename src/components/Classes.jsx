import { Link } from "react-router-dom";
import React from 'react';
import western from '../assets/western.jpg';
import classical from '../assets/classical.jpg';
import karate from '../assets/karate.jpg';

const Classes = () => {
  const classes = [
    {
      image: western,
      title: 'Regular Kuchipudi Classes'
    },
    {
      image: classical,
      title: 'Kuchipudi Certificate Course'
    },
    {
      image: karate,
      title: 'Kuchipudi Diploma Course'
    }
  ];

  return (
    <section className='classes'>
      <span className='section-tag'>Our Classes</span>

      <h2>
        Take your life in experiencing learning <span> Kuchipudi Art Form </span> with us 
      </h2>

      <div className='class-grid'>
        {classes.map((item, index) => (
          <div className='class-card' key={index}>
            <img src={item.image} alt='' />

            <div className='class-content'>
              <h3>{item.title}</h3>

              <p>
                We teach Kuchipudi with care and dedication at every level of learning.
              </p>

              <Link to="/services">

  <button>
    Learn More
  </button>

</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
      );
};

export default Classes;
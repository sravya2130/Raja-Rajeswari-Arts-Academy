import { Link } from "react-router-dom";
import React from 'react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className='hero'
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className='overlay'></div>

      <div className='hero-content'>
        <span className='badge'>Est. 2025 • RR Arts Academy</span>

        <h1>
          Raja Rajeswari <span>Arts Academy</span>
        </h1>

        <p>
          Where passion meets performance. Express yourself through
          the art of dance with expert guidance.
        </p>

        <div className='hero-buttons'>
          <a href="/services">

  <Link to="/services">

  <button className="primary-btn">
    Explore Classes
  </button>

</Link>
</a>
         <a href="tel:+919848426892">

  <button className="secondary-btn">
    Call Us Now
  </button>

</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
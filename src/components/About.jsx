import { Link } from "react-router-dom";
import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className='about-text'>
        <span className='section-tag'>About Dance Academy</span>

        <h2>
          Your Journey to <span>Classical Dance </span>
           Starts Here
        </h2>

        <p>
          At Raja Rajeswari Arts Academy classes will be taken by the well trained and experienced GURU Dr.S.Usha Rani, M.A,Ph.D,International Artist, D.D,"A" Grade Artist
        </p>

        <ul>
          <li>Expert choreographers</li>
          <li>Flexible timings</li>
          <li>Performance opportunities</li>
          <li>Online and offline classes</li>
        </ul>

        <Link to="/about">

  <button className="primary-btn">
    Learn More
  </button>

</Link>
      </div>

      <div className='about-image'>
        <img src={about} alt='about' />
        </div>
    </section>
  );
};

export default About;
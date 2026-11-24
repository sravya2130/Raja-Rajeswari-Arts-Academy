import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Classes from '../components/Classes';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Classes />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
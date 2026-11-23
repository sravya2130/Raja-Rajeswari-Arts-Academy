import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className='logo'>RR Arts Academy</div>

      <ul className='nav-links'>

        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/services'>Services</Link>
        </li>

        <li>
          <Link to='/about'>About Us</Link>
        </li>

      </ul>

      <a
  href="https://forms.gle/EMAypcR9k8og2P8t9"
  target="_blank"
  rel="noreferrer"
>

  <button className="register-btn">
    Register Now
  </button>

</a>
      <a href="tel:+919848426892">

  <button className="join-btn">
    Join Now
  </button>

</a>

    </nav>
  );
};

export default Navbar;
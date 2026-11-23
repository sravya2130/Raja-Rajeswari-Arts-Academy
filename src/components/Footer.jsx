import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-grid">

        {/* LEFT */}

        <div className="footer-box">

          <h2>
            RR Arts Academy
          </h2>

          <p>
            Where passion meets performance.
            Join us to discover the joy of dance
            and express yourself through movement.
          </p>

          <div className="social-icons">

            <a
              href="https://www.instagram.com/rr.arts_academy?igsh=Y293Y3VxanZ1MGY5"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@usharani-vi9zh?si=7cjBNgH-FUadHGS8"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* CONTACT */}

        <div className="footer-box">

          <h3>
            Contact Us
          </h3>

          <p className="branch-title">
            Branch 1:
          </p>

          <p>
            Opposite Bharat Petrol Bunk, 
            <br />
           Beside Ayam Cafe,
            <br />
           West Vidyanagar,
            <br />
            Tirupati Andhra Pradesh - 517502
          </p>

          <br />
          <div className="map-links">

  <a
    href="https://share.google/O6ul0tbbESQAW5btr"
    target="_blank"
    rel="noreferrer"
  >

    <FaMapMarkerAlt />

    <span>
      View Branch 1 on Google Maps
    </span>

  </a>

</div>
          <p className="branch-title">
            Branch 2:
          </p>

          <p>
           D. No. 18-1-505c, Mosque road,
            <br />
            Near Krishna scanning centre
            <br />
            VV Mahal road, Tirupati, Andhra Pradesh - 517502
          </p>
          <a
    href="PASTE_BRANCH2_GOOGLE_MAP_LINK"
    target="_blank"
    rel="noreferrer"
  >

    <FaMapMarkerAlt />

    <span>
      View Branch 2 on Google Maps
    </span>

  </a>
          <div className="footer-numbers">

            <a href="tel:+919848426892">
              9848426892
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-box">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link to="/home">
                Home
              </Link>
            </li>

            <li>
              <Link to="/services">
                Our Classes
              </Link>
            </li>

            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>

              <a
                href="https://wa.me/919848426892"
                target="_blank"
                rel="noreferrer"
              >
                Online Classes Available
              </a>

            </li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2025 RR Arts Academy.
          All rights reserved. | Est. 2025
        </p>

      </div>

    </footer>

  );

};

export default Footer;
import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* 1 - ABOUT */}
        <div className="footer-box">
          <h2>RR Arts Academy</h2>
          <p>
            Where passion meets performance. Join us to discover the joy of dance and express yourself through movement.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/rr.arts_academy?igsh=Y293Y3VxanZ1MGY5" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@usharani-vi9zh?si=7cjBNgH-FUadHGS8" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* 2 - BRANCH 1 */}
        <div className="footer-box">
          <h3>Branch 1</h3>
          <p>
            Opp. Bharat Petrol Bunk, Beside Ayam Cafe, West Vidyanagar, Tirupati, Andhra Pradesh - 517502
          </p>
          <a href="https://share.google/O6ul0tbbESQAW5btr" target="_blank" rel="noreferrer" className="map-link">
            <FaMapMarkerAlt />
            <span>View on Google Maps</span>
          </a>
        </div>

        {/* 3 - BRANCH 2 */}
        <div className="footer-box">
          <h3>Branch 2</h3>
          <p>
            D.No. 18-1-505c, Mosque Road, Near Krishna Scanning Centre, VV Mahal Road, Tirupati, Andhra Pradesh - 517502
          </p>
          <a href="PASTE_BRANCH2_GOOGLE_MAP_LINK" target="_blank" rel="noreferrer" className="map-link">
            <FaMapMarkerAlt />
            <span>View on Google Maps</span>
          </a>
        </div>

        {/* 4 - QUICK LINKS + CONTACT */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Classes</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>
              <a href="https://wa.me/919848426892" target="_blank" rel="noreferrer">
                Online Classes Available
              </a>
            </li>
          </ul>
          <a href="tel:+919848426892" className="footer-phone">
            <FaPhoneAlt /> 98484 26892
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 RR Arts Academy. All rights reserved. | Est. 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
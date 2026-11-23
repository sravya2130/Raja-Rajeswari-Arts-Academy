import "./Services.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

import westernImg from "./westeren.jpg";
import classicalImg from "./classical.jpg";
import couplesImg from "./couples.jpg";
import MUSIC from "./music.jpg";
import lang from "./language.jpg";
import studioImg from "./studio.jpg";

function Services() {

  return (

    <div className="services-page">

      {/* HERO */}

      <section className="services-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <span className="hero-badge">
            Our Services
          </span>
          
          <h1>
            Discover Your <span>Perfect Class</span>
          </h1>

          <p>
            Choose from our classes and decide which suits you best
            for all ages and skill levels.
          </p>

        </div>

      </section>

      {/* REGULAR CLASSES */}

      <section className="service-layout">

        <div className="service-text">

          <span className="small-badge">
            Kuchipudi Regular Classes
          </span>

          <h2>
            Kuchipudi Regular Classes
          </h2>

          <div className="info-card">

            <div>

              <h3>Kuchipudi Tots</h3>

              <p>
                Fun introduction to movement and rhythm
                (males below 10 years age)
              </p>

            </div>

            <span>3-9 years</span>

          </div>

          <div className="info-card">

            <div>

              <h3>Kuchipudi Kids</h3>

              <p>
                Building technique and confidence
                (only females)
              </p>

            </div>

            <span>10-13 years</span>

          </div>

          <div className="info-card">

            <div>

              <h3>Kuchipudi Adults</h3>

              <p>
                Advanced choreography and performance skills
              </p>

            </div>

            <span>Females no age limit</span>

          </div>

          <div className="button-group">

            <a
              href="https://wa.me/919848426892"
              target="_blank"
              rel="noreferrer"
            >

              <button>
                WhatsApp
              </button>

            </a>

            <a href="tel:+919848426892">

              <button className="call-btn">
                Call Now
              </button>

            </a>

          </div>

        </div>

        <div className="service-image">

          <img src={westernImg} alt="" />

        </div>

      </section>

      {/* CERTIFICATE */}

      <section className="service-layout reverse">

        <div className="service-image">

          <img src={classicalImg} alt="" />

        </div>

        <div className="service-text">

          <span className="small-badge">
            Kuchipudi Certificate Course
          </span>

          <h2>
            Kuchipudi Certificate Course
          </h2>

          <div className="info-card">

            <div>

              <h3>Classical Foundation</h3>

              <p>
                Traditional dance forms with cultural heritage
              </p>

            </div>

            <span>14+ years</span>

          </div>

          <div className="button-group">

            <a
              href="https://wa.me/919848426892"
              target="_blank"
              rel="noreferrer"
            >

              <button>
                WhatsApp
              </button>

            </a>

            <a href="tel:+919848426892">

              <button className="call-btn">
                Call Now
              </button>

            </a>

          </div>

        </div>

      </section>

      {/* DIPLOMA */}

      <section className="service-layout">

        <div className="service-text">

          <span className="small-badge">
            Kuchipudi Diploma Course
          </span>

          <h2>
            Kuchipudi Diploma Course
          </h2>

          <div className="info-card">

            <div>

              <h3>Diploma Classes</h3>

              <p>
                Dance together, achieve together
              </p>

            </div>

            <span>16+ Age</span>

          </div>

          <div className="button-group">

            <a
              href="https://wa.me/919848426892"
              target="_blank"
              rel="noreferrer"
            >

              <button>
                WhatsApp
              </button>

            </a>

            <a href="tel:+919848426892">

              <button className="call-btn">
                Call Now
              </button>

            </a>

          </div>

        </div>

        <div className="service-image">

          <img src={couplesImg} alt="" />

        </div>

      </section>

      {/* CARNATIC MUSIC */}

      <section className="service-layout">

        <div className="service-text">

          <span className="small-badge">
            Carnatic Music
          </span>

          <h2>
            Carnatic Music
          </h2>

          <div className="info-card">

            <div>

              <h3>Music Classes</h3>

              <p>
                Explore and master instruments through Vocal Music
              </p>

            </div>

            <span>3+ Age</span>

          </div>

          <div className="button-group">

            <a
              href="https://wa.me/919848426892"
              target="_blank"
              rel="noreferrer"
            >

              <button>
                WhatsApp
              </button>

            </a>

            <a href="tel:+919848426892">

              <button className="call-btn">
                Call Now
              </button>

            </a>

          </div>

        </div>

        <div className="service-image">

          <img src={MUSIC} alt="" />

        </div>

      </section>

      {/* LANGUAGE CLASSES */}

      <section className="service-layout">

        <div className="service-text">

          <span className="small-badge">
            Language Classes
          </span>

          <h2>
            Tamil and Telugu Language Classes
            (Online Classes)
          </h2>

          <div className="info-card">

            <div>

              <h3>Language Classes</h3>

              <p>
                Get detailed knowledge about our Indian Languages
              </p>

            </div>

          </div>

          <div className="button-group">

            <a
              href="https://wa.me/919848426892"
              target="_blank"
              rel="noreferrer"
            >

              <button>
                WhatsApp
              </button>

            </a>

            <a href="tel:+919848426892">

              <button className="call-btn">
                Call Now
              </button>

            </a>

          </div>

        </div>

        <div className="service-image">

          <img src={lang} alt="" />

        </div>

      </section>

      {/* ONLINE */}

      <section className="online-section">

        <div className="online-left">

          <span className="small-badge">
            Online Learning
          </span>

          <h2>
            Learn From <span>Anywhere</span>
          </h2>

          <p>
            Can't make it to our Academy? No problem!
            We offer comprehensive online classes.
          </p>

          <ul>

            <li>Live interactive sessions</li>
            <li>Recorded classes for practice</li>
            <li>Personal feedback from instructors</li>
            <li>Flexible scheduling options</li>

          </ul>

          <div className="button-group">

            <a
              href="https://wa.me/919848426892"
              target="_blank"
              rel="noreferrer"
            >

              <button>
                Join on WhatsApp
              </button>

            </a>

            <a href="tel:+919848426892">

              <button className="call-btn">
                Call Now
              </button>

            </a>

          </div>

        </div>

        <div className="online-right">

          <img src={studioImg} alt="" />

        </div>

      </section>

      {/* FOOTER */}

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

                <i className="fab fa-instagram"></i>

              </a>

              <a
                href="https://youtube.com/@usharani-vi9zh?si=7cjBNgH-FUadHGS8"
                target="_blank"
                rel="noreferrer"
              >

                <i className="fab fa-youtube"></i>

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
              Tirupati, Andhra Pradesh - 517502
            </p>

            <a
              href="https://share.google/O6ul0tbbESQAW5btr"
              target="_blank"
              rel="noreferrer"
              className="map-link"
            >

              <FaMapMarkerAlt />

              <span>
                View Branch 1 on Google Maps
              </span>

            </a>

            <br />

            <p className="branch-title">
              Branch 2:
            </p>

            <p>
              D. No. 18-1-505c, Mosque Road,
              <br />
              Near Krishna Scanning Centre,
              <br />
              VV Mahal Road,
              <br />
              Tirupati, Andhra Pradesh - 517502
            </p>

            <a
              href="PASTE_BRANCH2_GOOGLE_MAP_LINK"
              target="_blank"
              rel="noreferrer"
              className="map-link"
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

                <Link to="/">
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

    </div>

  );
}

export default Services;
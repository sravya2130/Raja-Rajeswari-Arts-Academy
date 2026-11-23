import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import "./AboutPage.css";

import {
  FaHeart,
  FaUsers,
  FaBullseye,
  FaAward,
  FaCheckCircle,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import IMG from "./assets/gallery1.jpg";
import founderImg from "./assets/founder.jpg";
import gallery1 from "./assets/gallery2.jpg";
import gallery2 from "./assets/gallery3.jpg";
import gallery3 from "./assets/gallery4.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-content">

          <span className="hero-badge">
            About RR Arts Academy 
          </span>

          <h1>
            Our <span> Mission </span>
          </h1>

          <p>
            Since 2025, we’ve been igniting a love for dance and helping students grow stronger with every step.
          </p>

        </div>

      </section>

      {/* MISSION */}
      <section className="mission-section">

        <div className="mission-left">

          <span className="section-tag">
            Our Mission
          </span>

          <h2>
            More Than Just <span>Dance Steps</span>
          </h2>

          <p>
            At RR Arts Academy, the mission is to inspire creativity and lifelong learning through engaging, hands-on hobby experiences. 
            The company believes hobbies enhance well-being, foster community, and ignite personal growth. The classes are designed to 
            cater to various interests and skill levels, all while creating a nurturing environment that promotes creativity and self-expression.
          </p>

          <p>
            We offer Kuchipudi Regular Classes, Kuchipudi Certificate Course Classes,Kuchipudi Diploma Classes
          </p>

          <p>
            Beyond technique, we focus on discipline, teamwork,
            creativity, and stage confidence.
          </p>

        </div>

        <div className="mission-right">

          <img src={IMG} alt="Studio" />

          <div className="experience-card">

            <h3>Est. 2025</h3>

            <p>1+ Years</p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="values-section">

        <span className="section-tag">
          Our Values
        </span>

        <h2>
          What We <span>Stand For</span>
        </h2>

        <p className="section-subtitle">
          These core values guide everything we do.
        </p>

        <div className="values-grid">

          <div className="value-card">

            <div className="icon-circle">
              <FaHeart />
            </div>

            <h3>Passion for Dance</h3>

            <p>
              Dance is self-expression and joy.
            </p>

          </div>

          <div className="value-card">

            <div className="icon-circle">
              <FaUsers />
            </div>

            <h3>Inclusive Community</h3>

            <p>
              A supportive environment for all dancers.
            </p>

          </div>

          <div className="value-card">

            <div className="icon-circle">
              <FaBullseye />
            </div>

            <h3>Excellence in Teaching</h3>

            <p>
              Experienced instructors helping students grow.
            </p>

          </div>

          <div className="value-card">

            <div className="icon-circle">
              <FaAward />
            </div>

            <h3>Holistic Development</h3>

            <p>
              Building confidence and creativity.
            </p>

          </div>

        </div>

      </section>

      {/* FOUNDER */}
      <section className="founder-section">

        <div className="founder-image">

          <img src={founderImg} alt="Founder" />

        </div>

        <div className="founder-content">

          <span className="section-tag">
            Meet Our Founder
          </span>

          <h2>
          Kalaratna Dr. S. <span>Usha Rani </span>Hamsa Awardee
          </h2>

          <p>
            Dr. S. Usharani is a Kuchipudi dancer, academician, and Acharya with over 35+ years of experience. Daughter of Sri Srinivasan and Smt. Rajyalakshmi, she trained under Late Dr. Uma Rama Rao, Sri Bhagavathula Sethuram, Dr. Pasumarthi Seshu Babu,Late Sri Chinta Adinarayana Sarma, Sri Vedantham Radheshyam, Pasumarthi Ramalinga Sasthri, and vocal Sita Mahalakshmi. She holds B.Com, B.A, M.A. in kuchipudi dance and M.A in Telugu from P.S. Telugu University and Dravidian University, and a Ph.D. in Kuchipudi for her thesis on _Kankundi Kuppam Veedhi Natakalu_ kuchipudi yakshaganam comparitive study. She has taught for 14 years at Bharatiya Vidya Bhavan, Hyderabad, and for 20 years at Sri Venkateswara College of Music and Dance, Tirupati.<br></br>

She has choreographed and performed numerous Kuchipudi ballets including _Mahishasura Mardhini, Girija Kalyanam, Shodasalingalu, Panchabhuthalu, Ashtalakshmi Vaibhavam, Ruthu Sandhesam, Kaalaratri, Annamayya Ballet, Brahmotsavam Ballet, Sabari Ballet, Andal Tiruppavai, Jayadeva Ashtapadi_ for Doordarshan, and more. Her _Sri Kanta Stanuvu_ dance drama earned her the title “Sabari Usha.” For T.T.D., she created _Dhyanotsavalu, Nritya Sankeerthana, Brahmotsava Vahana Seva,_ and annual Brahmotsavam performances. She has presented at national and international conferences, Amaravathi Foundation Day, Prapancha Maha Sabalu, Maha Kumbh Mela 2025, and conducted classes and shows in the USA for PAMONA Temple, TAMA Festival, and across New York, California, Atlanta, Pennsylvania, and other cities.<br></br>

Her honors include ‘A’ Grade Doordarshan artist, National Scholarship from Ministry of Culture, Nandi Award, Hamsa Award 2025, Natya Mayuri, Kala Prapoorna, Natyachudamani, Natyaveda Visharadha, Abhinayanethri, and Nrithyachudamani. She has guided around 2500+ students to Visaradha, Praveena, certificates, diplomas, and degrees, trained physically and mentally challenged students, and taught 80 students in the USA and 50 NRI students in Hyderabad. An author of _Srimad Bhagavad Geetha Nrithya reethi, Yakshaganamu – Veedhi Bhagavatham,_ and an “All-in-one” guide for BA/MA students, she has also written articles, given AIR talks, judged competitions, and performed 2000+ shows across India and abroad. Her characters include Krishna, Venkateswara, Meerabai, Radha, Seetha, Annamayya, Sabari, Ravanasura,Kabhir Das, Kala Purushudu,  Kali, Durgadevi, Ardhanadhishvara and more. Dance is her life, and she works to preserve Indian culture through teaching, performing, and innovation.<br></br>
          </p>

          <div className="quote-box">
            “Every student grows with confidence!”
          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievement-section">

        <span className="section-tag">
          Our Achievements
        </span>

        <h2>
          Three decades of <span>Excellence</span>
        </h2>

        <p className="section-subtitle">
          Here's what we've accomplished together.
        </p>

        <div className="achievement-grid">

          <div className="achievement-card">
            <FaCheckCircle />
            <span>2500+ students trained</span>
          </div>

          <div className="achievement-card">
            <FaCheckCircle />
            <span>Online & offline learning</span>
          </div>

          <div className="achievement-card">
            <FaCheckCircle />
            <span>Performance opportunities</span>
          </div>

        </div>

      </section>

      {/* GALLERY */}
<section className="gallery-section">

  <span className="section-tag">
    Our Performances
  </span>

  <h2>
    Where <span>Magic Seen</span>
  </h2>

  <p className="section-subtitle">
    Step into our world-class Performances to inspire and nurture your classical journey.
  </p>

  <div className="gallery-preview-grid">

    {/* IMAGE 1 */}

    <div className="gallery-preview-card">

      <img src={gallery1} alt="Gallery" />

    </div>

    {/* IMAGE 2 */}

    <div className="gallery-preview-card">

      <img src={gallery2} alt="Gallery" />

    </div>

    {/* IMAGE 3 */}

    <div className="gallery-preview-card third-card">

      <img src={gallery3} alt="Gallery" />

      <Link to="/gallery">

        <button className="view-more-btn">
          View More
        </button>

      </Link>

    </div>

  </div>

</section>



       {/* CTA SECTION */}
<section className="cta-section">

  <div className="cta-card">

    <span className="section-tag light-tag">
      Join Our Academy
    </span>

    <h2>
      Ready to Begin Your
      <span> Dance Journey?</span>
    </h2>

    <p>
      Whether you're a beginner or an experienced dancer,
      RR Arts Academy has the perfect class for you.
    </p>

    <div className="cta-buttons">

      <a href="tel:+919848426892">

        <button className="cta-primary-btn">
          <FaPhoneAlt />
          Call Now
        </button>

      </a>

      <a
        href="https://wa.me/919848426892"
        target="_blank"
        rel="noreferrer"
      >

        <button className="cta-secondary-btn">
          WhatsApp Us
        </button>

      </a>

    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-grid">

          {/* LEFT */}
          <div className="footer-box">

            <h2>
              Studio 5 Dance Academy
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
};

export default AboutPage;
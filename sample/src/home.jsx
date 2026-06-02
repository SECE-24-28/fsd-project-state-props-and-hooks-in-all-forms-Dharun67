import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Assets/Css/style.css';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const localLogin = localStorage.getItem('bec_loggedin');
    const sessionLogin = sessionStorage.getItem('bec_loggedin');
    if (localLogin || sessionLogin) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('bec_loggedin');
    sessionStorage.removeItem('bec_loggedin');
    setLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
    <Navbar />

  <section className="hero">
    <div className="hero-left">
      <p className="hero-small">Welcome to BEC</p>
      <h2>Shape Your Future<br />with <span className="highlight">Engineering</span></h2>
      <p className="hero-desc">Best Engineering College offers world-class technical education since 2016. Join thousands of students who built their careers here.</p>
      <div className="hero-actions">
        <a href="/" className="btn-gold">Apply Now</a>
        <a href="/" className="btn-border">Explore Programs</a>
      </div>
      <div className="hero-stats">
        <div className="hstat">
          <h3>9+</h3>
          <p>Years</p>
        </div>
        <div className="hstat-divider"></div>
        <div className="hstat">
          <h3>5000+</h3>
          <p>Students</p>
        </div>
        <div className="hstat-divider"></div>
        <div className="hstat">
          <h3>95%</h3>
          <p>Placements</p>
        </div>
        <div className="hstat-divider"></div>
        <div className="hstat">
          <h3>200+</h3>
          <p>Faculty</p>
        </div>
      </div>
    </div>
    <div className="hero-right">
      <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80" alt="Campus" className="hero-img" />
      <div className="hero-badge">
        <div className="badge-line"></div>
        <div>
          <h4>NAAC A Grade</h4>
          <p>Accredited College</p>
        </div>
      </div>
    </div>
  </section>

  <div className="ticker-wrap">
    <span className="ticker-label">Notice</span>
    <div className="ticker-text">
      Admissions Open 2025-26 &nbsp;&nbsp;|&nbsp;&nbsp; TECHFEST 2025 - June 10 &nbsp;&nbsp;|&nbsp;&nbsp; Campus Placement Drive - TCS, Infosys, Wipro &nbsp;&nbsp;|&nbsp;&nbsp; Semester Exam Timetable Published &nbsp;&nbsp;|&nbsp;&nbsp; Annual Sports Day - June 20
    </div>
  </div>

  <section className="about-section">
    <div className="about-img">
      <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80" alt="About" />
    </div>
    <div className="about-text">
      <p className="section-tag">Who We Are</p>
      <h2>About Best Engineering College</h2>
      <p>Best Engineering College is a premier technical institution committed to providing quality education in engineering and technology. Established in 2016, the college has grown into a center of academic excellence.</p>
      <p>We offer undergraduate, postgraduate, and doctoral programs across various engineering disciplines. Our focus is on holistic development of every student.</p>
      <div className="about-tags">
        <span>NAAC A Grade</span>
        <span>NBA Accredited</span>
        <span>Anna University</span>
        <span>ISO Certified</span>
      </div>
      <a href="/" className="btn-gold">Read More</a>
    </div>
  </section>

  <section className="dept-section">
    <p className="section-tag center">Academics</p>
    <h2 className="sec-title">Our Departments</h2>
    <p className="sec-sub">Choose from a wide range of engineering programs</p>
    <div className="dept-row">

      <div className="dept-box">
        <div className="dept-top">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" alt="CSE" />
        </div>
        <div className="dept-info">
          <h3>Computer Science</h3>
          <p>AI, Machine Learning, Data Science</p>
          <a href="/">View More</a>
        </div>
      </div>

      <div className="dept-box">
        <div className="dept-top">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" alt="ECE" />
        </div>
        <div className="dept-info">
          <h3>Electronics &amp; Communication</h3>
          <p>VLSI, Embedded Systems, Signal Processing</p>
          <a href="/">View More</a>
        </div>
      </div>

      <div className="dept-box">
        <div className="dept-top">
          <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&q=80" alt="Mech" />
        </div>
        <div className="dept-info">
          <h3>Mechanical Engineering</h3>
          <p>Design, Manufacturing, Thermal</p>
          <a href="/">View More</a>
        </div>
      </div>

      <div className="dept-box">
        <div className="dept-top">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" alt="Civil" />
        </div>
        <div className="dept-info">
          <h3>Civil Engineering</h3>
          <p>Structural, Environmental, Transport</p>
          <a href="/">View More</a>
        </div>
      </div>

      <div className="dept-box">
        <div className="dept-top">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80" alt="IT" />
        </div>
        <div className="dept-info">
          <h3>Information Technology</h3>
          <p>Web, Cloud, Cybersecurity</p>
          <a href="/">View More</a>
        </div>
      </div>

      <div className="dept-box">
        <div className="dept-top">
          <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80" alt="Bio" />
        </div>
        <div className="dept-info">
          <h3>Biotechnology</h3>
          <p>Genetic Engineering, Bioinformatics</p>
          <a href="/">View More</a>
        </div>
      </div>

    </div>
  </section>

  <section className="ne-section">
    <div className="ne-left">
      <p className="section-tag">Latest</p>
      <h2>Announcements</h2>
      <ul className="news-list">
        <li>
          <span className="tag-new">New</span>
          <p>Admissions open for 2025-26 academic year. Apply before July 31.</p>
        </li>
        <li>
          <span className="tag-event">Event</span>
          <p>National Level Technical Symposium TECHFEST 2025 on June 10.</p>
        </li>
        <li>
          <span className="tag-notice">Notice</span>
          <p>Semester exam timetable published. Check student portal now.</p>
        </li>
        <li>
          <span className="tag-new">New</span>
          <p>Campus recruitment drive by TCS, Infosys and Wipro on June 15.</p>
        </li>
        <li>
          <span className="tag-notice">Notice</span>
          <p>Anti-ragging committee meeting scheduled for 10th June 2025.</p>
        </li>
        <li>
          <span className="tag-event">Event</span>
          <p>Annual Sports Day on June 20 at the college ground.</p>
        </li>
      </ul>
    </div>
    <div className="ne-right">
      <p className="section-tag">Schedule</p>
      <h2>Upcoming Events</h2>
      <div className="ev-card">
        <div className="ev-date"><span>10</span>Jun</div>
        <div className="ev-detail">
          <h4>TECHFEST 2025</h4>
          <p>National Level Technical Symposium</p>
        </div>
      </div>
      <div className="ev-card">
        <div className="ev-date"><span>15</span>Jun</div>
        <div className="ev-detail">
          <h4>Campus Placement Drive</h4>
          <p>TCS, Infosys, Wipro - Main Auditorium</p>
        </div>
      </div>
      <div className="ev-card">
        <div className="ev-date"><span>20</span>Jun</div>
        <div className="ev-detail">
          <h4>Annual Sports Day</h4>
          <p>College Ground - All students welcome</p>
        </div>
      </div>
      <div className="ev-card">
        <div className="ev-date"><span>25</span>Jun</div>
        <div className="ev-detail">
          <h4>Alumni Meet 2025</h4>
          <p>Seminar Hall - Batch 2016-2020</p>
        </div>
      </div>
    </div>
  </section>

  <section className="fac-section">
    <p className="section-tag center">Campus Life</p>
    <h2 className="sec-title">Our Facilities</h2>
    <p className="sec-sub">Everything you need for a great college experience</p>
    <div className="fac-row">
      <div className="fac-box">
        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&q=80" alt="Library" />
        <div className="fac-info">
          <h3>Central Library</h3>
          <p>50,000+ books, journals and digital resources available 24/7</p>
        </div>
      </div>
      <div className="fac-box">
        <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80" alt="Sports" />
        <div className="fac-info">
          <h3>Sports Complex</h3>
          <p>Cricket, Football, Basketball and Badminton courts</p>
        </div>
      </div>
      <div className="fac-box">
        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&q=80" alt="Hostel" />
        <div className="fac-info">
          <h3>Hostel</h3>
          <p>Separate hostels for boys and girls with all amenities</p>
        </div>
      </div>
      <div className="fac-box">
        <img src="https://images.unsplash.com/photo-1532094349884-543559059a6b?w=500&q=80" alt="Lab" />
        <div className="fac-info">
          <h3>Research Labs</h3>
          <p>Advanced labs equipped for cutting-edge research</p>
        </div>
      </div>
    </div>
  </section>

  <section className="why-section">
    <p className="section-tag center">Why BEC</p>
    <h2 className="sec-title">Why Choose Best Engineering College</h2>
    <p className="sec-sub">We are committed to shaping the engineers of tomorrow</p>
    <div className="why-row">

      <div className="why-box">
        <div className="why-icon">&#127891;</div>
        <h3>Expert Faculty</h3>
        <p>Our professors hold PhDs from top universities and bring real industry experience into the classroom.</p>
      </div>

      <div className="why-box">
        <div className="why-icon">&#127970;</div>
        <h3>Modern Infrastructure</h3>
        <p>State-of-the-art labs, smart classrooms, high-speed internet and a fully equipped campus.</p>
      </div>

      <div className="why-box">
        <div className="why-icon">&#128188;</div>
        <h3>Strong Placements</h3>
        <p>95% placement rate with top MNCs visiting campus every year for recruitment drives.</p>
      </div>

      <div className="why-box">
        <div className="why-icon">&#127758;</div>
        <h3>Industry Tie-ups</h3>
        <p>MoUs with leading companies like TCS, Infosys and Bosch for internships and live projects.</p>
      </div>

      <div className="why-box">
        <div className="why-icon">&#128218;</div>
        <h3>Research Focus</h3>
        <p>Students are encouraged to publish papers and participate in national and international conferences.</p>
      </div>

      <div className="why-box">
        <div className="why-icon">&#127942;</div>
        <h3>Sports &amp; Culture</h3>
        <p>Active sports teams, cultural clubs, NSS and NCC units for all-round student development.</p>
      </div>

    </div>
  </section>

  <section className="testi-section">
    <p className="section-tag center">Student Voice</p>
    <h2 className="sec-title">What Our Students Say</h2>
    <p className="sec-sub">Hear from the students who studied and succeeded here</p>
    <div className="testi-row">

      <div className="testi-box">
        <div className="testi-top">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Arjun" />
          <div>
            <h4>Arjun Kumar</h4>
            <span>B.E. CSE, Batch 2022</span>
          </div>
        </div>
        <p>"The faculty here are very supportive and always ready to help. I got placed in TCS through the campus drive. BEC gave me the foundation I needed."</p>
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>

      <div className="testi-box">
        <div className="testi-top">
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80" alt="Priya" />
          <div>
            <h4>Priya Lakshmi</h4>
            <span>B.E. ECE, Batch 2023</span>
          </div>
        </div>
        <p>"The labs and equipment are excellent. I completed my final year project on embedded systems with full support from the department. Highly recommend BEC."</p>
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>

      <div className="testi-box">
        <div className="testi-top">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Rahul" />
          <div>
            <h4>Rahul Sharma</h4>
            <span>B.E. Mech, Batch 2021</span>
          </div>
        </div>
        <p>"Sports facilities and hostel life at BEC are great. I was part of the cricket team and also secured a job at L&amp;T. A complete college experience."</p>
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>

    </div>
  </section>

  <section className="links-section">
    <p className="section-tag center">Quick Access</p>
    <h2 className="sec-title">Important Links</h2>
    <p className="sec-sub">Access key portals and resources in one click</p>
    <div className="links-grid">

      <div className="link-card">
        <span className="link-label">Student</span>
        <h3>Student Portal</h3>
        <p>Check attendance, marks, timetable and fee details</p>
        <a href="/" className="link-btn">Login</a>
      </div>

      <div className="link-card">
        <span className="link-label">Exam</span>
        <h3>Hall Ticket</h3>
        <p>Download your semester examination hall ticket here</p>
        <a href="/" className="link-btn">Download</a>
      </div>

      <div className="link-card">
        <span className="link-label">Results</span>
        <h3>Exam Results</h3>
        <p>View your semester results published by Anna University</p>
        <a href="/" className="link-btn">View Results</a>
      </div>

      <div className="link-card">
        <span className="link-label">Fee</span>
        <h3>Fee Payment</h3>
        <p>Pay your tuition and hostel fees online securely</p>
        <a href="/" className="link-btn">Pay Now</a>
      </div>

      <div className="link-card">
        <span className="link-label">Library</span>
        <h3>e-Library</h3>
        <p>Access digital books, journals and research papers</p>
        <a href="/" className="link-btn">Open</a>
      </div>

      <div className="link-card">
        <span className="link-label">Grievance</span>
        <h3>Grievance Cell</h3>
        <p>Submit complaints or concerns to the college committee</p>
        <a href="/" className="link-btn">Submit</a>
      </div>

    </div>
  </section>

  <section className="recruit-section">
    <p className="section-tag center">Placements</p>
    <h2 className="sec-title">Our Top Recruiters</h2>
    <p className="sec-sub">Leading companies that hire our graduates every year</p>
    <div className="recruit-row">

      <div className="recruit-box">
        <img src="https://www.tcs.com/favicon.ico" alt="TCS" />
        <span>TCS</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.infosys.com/favicon.ico" alt="Infosys" />
        <span>Infosys</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.wipro.com/favicon.ico" alt="Wipro" />
        <span>Wipro</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.cognizant.com/favicon.ico" alt="Cognizant" />
        <span>Cognizant</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.hcltech.com/favicon.ico" alt="HCL" />
        <span>HCL</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.accenture.com/favicon.ico" alt="Accenture" />
        <span>Accenture</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.capgemini.com/favicon.ico" alt="Capgemini" />
        <span>Capgemini</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.ibm.com/favicon.ico" alt="IBM" />
        <span>IBM</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.techmahindra.com/favicon.ico" alt="Tech Mahindra" />
        <span>Tech Mahindra</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.larsentoubro.com/favicon.ico" alt="L&amp;T" />
        <span>L&amp;T</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.amazon.in/favicon.ico" alt="Amazon" />
        <span>Amazon</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.zoho.com/favicon.ico" alt="Zoho" />
        <span>Zoho</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.freshworks.com/favicon.ico" alt="Freshworks" />
        <span>Freshworks</span>
      </div>

      <div className="recruit-box">
        <img src="https://byjus.com/favicon.ico" alt="BYJU'S" />
        <span>BYJU'S</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.hexaware.com/favicon.ico" alt="Hexaware" />
        <span>Hexaware</span>
      </div>

      <div className="recruit-box">
        <img src="https://www.mphasis.com/favicon.ico" alt="Mphasis" />
        <span>Mphasis</span>
      </div>

    </div>
    <div className="recruit-stats">
      <div className="rs-box">
        <h3>1200+</h3>
        <p>Students Placed</p>
      </div>
      <div className="rs-box">
        <h3>95%</h3>
        <p>Placement Rate</p>
      </div>
      <div className="rs-box">
        <h3>8.5 LPA</h3>
        <p>Highest Package</p>
      </div>
      <div className="rs-box">
        <h3>150+</h3>
        <p>Recruiting Companies</p>
      </div>
    </div>
  </section>

  <section className="faq-section">
    <p className="section-tag center">FAQ</p>
    <h2 className="sec-title">Frequently Asked Questions</h2>
    <p className="sec-sub">Everything you need to know about Best Engineering College</p>
    <div className="faq-list">

      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>What programs does Best Engineering College offer?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>We offer B.E. and B.Tech programs in Computer Science, Electronics, Mechanical, Civil, Information Technology, and Biotechnology. We also offer M.E. and Ph.D programs in select disciplines.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>Is Best Engineering College affiliated to Anna University?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>Yes, Best Engineering College is an autonomous institution affiliated to Anna University, Chennai. All degrees are awarded by Anna University.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>When was the college established?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>Best Engineering College was established in 2016 and has since grown into a premier technical institution with excellent infrastructure and experienced faculty.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>What is the placement record of the college?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>We maintain a 95% placement rate. Top recruiters include TCS, Infosys, Wipro, Cognizant, HCL, and many more. Our dedicated placement cell works year-round to connect students with top companies.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>Does the college provide hostel facilities?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>Yes, we have separate hostel facilities for boys and girls with all modern amenities including Wi-Fi, mess, laundry, and 24/7 security.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>How can I apply for admission?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>Admissions are based on TNEA counselling for B.E. programs. You can also visit our admissions office or apply online through our student portal. Contact us at admissions@bec.edu.in for more details.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>Is the college NAAC accredited?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>Yes, Best Engineering College is NAAC accredited with an A Grade. We are also NBA accredited and ISO certified, ensuring the highest standards of education.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" onClick={(e) => e.currentTarget.parentElement.classList.toggle('open')}>
          <span>Are scholarships available for students?</span>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-a">
          <p>Yes, we offer various scholarships including government scholarships, merit-based scholarships, and sports scholarships. Visit the student services section or contact our scholarship cell for more information.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="admission-section">
    <p className="section-tag center">Admissions</p>
    <h2 className="sec-title">How to Apply</h2>
    <p className="sec-sub">Simple steps to join Best Engineering College</p>
    <div className="admission-row">
      <div className="admission-box">
        <div className="adm-number">01</div>
        <h3>Register Online</h3>
        <p>Fill the online application form with your basic details and academic records.</p>
      </div>
      <div className="adm-arrow">&#8594;</div>
      <div className="admission-box">
        <div className="adm-number">02</div>
        <h3>Submit Documents</h3>
        <p>Upload your 10th, 12th marksheets, transfer certificate and community certificate.</p>
      </div>
      <div className="adm-arrow">&#8594;</div>
      <div className="admission-box">
        <div className="adm-number">03</div>
        <h3>TNEA Counselling</h3>
        <p>Attend TNEA counselling by Anna University and select Best Engineering College.</p>
      </div>
      <div className="adm-arrow">&#8594;</div>
      <div className="admission-box">
        <div className="adm-number">04</div>
        <h3>Pay Fees</h3>
        <p>Complete the fee payment online or at the college office to confirm your seat.</p>
      </div>
      <div className="adm-arrow">&#8594;</div>
      <div className="admission-box">
        <div className="adm-number">05</div>
        <h3>Join Classes</h3>
        <p>Collect your ID card, attend orientation and begin your journey at BEC.</p>
      </div>
    </div>
    <div className="adm-bottom">
      <p>Admissions open for 2025-26 &nbsp;|&nbsp; Last date : <strong>July 31, 2025</strong></p>
      <a href="/" className="btn-gold">Apply Now</a>
    </div>
  </section>
  <section className="gallery-section">
    <p className="section-tag center">Gallery</p>
    <h2 className="sec-title">Campus Gallery</h2>
    <p className="sec-sub">A glimpse of life at Best Engineering College</p>
    <div className="gallery-grid">
      <div className="gallery-item gallery-big">
        <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80" alt="Campus" />
        <div className="gallery-label">Main Campus</div>
      </div>
      <div className="gallery-item">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" alt="Computer Lab" />
        <div className="gallery-label">Computer Lab</div>
      </div>
      <div className="gallery-item">
        <img src="https://images.unsplash.com/photo-1532094349884-543559059a6b?w=400&q=80" alt="Research Lab" />
        <div className="gallery-label">Research Lab</div>
      </div>
      <div className="gallery-item">
        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80" alt="Library" />
        <div className="gallery-label">Central Library</div>
      </div>
      <div className="gallery-item">
        <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80" alt="Sports" />
        <div className="gallery-label">Sports Ground</div>
      </div>
      <div className="gallery-item">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" alt="Civil Block" />
        <div className="gallery-label">Civil Block</div>
      </div>
    </div>
  </section>
  <section className="contact-strip">
    <div className="contact-strip-inner">
      <div className="contact-item">
        <div className="contact-icon">&#128205;</div>
        <div>
          <h4>Address</h4>
          <p>NH-48, Pennalur Village, Sriperumbudur Taluk,<br />Kanchipuram - 602 117, Tamil Nadu</p>
        </div>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-item">
        <div className="contact-icon">&#128222;</div>
        <div>
          <h4>Phone</h4>
          <p>+91 44 2716 3000</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-item">
        <div className="contact-icon">&#128140;</div>
        <div>
          <h4>Email</h4>
          <p>admissions@bec.edu.in</p>
          <p>info@bec.edu.in</p>
        </div>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-item">
        <div className="contact-icon">&#128336;</div>
        <div>
          <h4>Working Hours</h4>
          <p>Monday-Saturday</p>
          <p>9:00 AM-5:00 PM</p>
        </div>
      </div>
    </div>
  </section>

    <Footer />
    </>
  );
}

export default Home;

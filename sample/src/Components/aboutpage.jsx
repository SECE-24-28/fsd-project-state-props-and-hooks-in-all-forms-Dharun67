import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/Css/style.css';
import '../Assets/Css/aboutpage.css';

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="page-banner">
        <div className="banner-content">
          <p className="section-tag">About Us</p>
          <h2>Building Engineers,<br />Shaping <span className="highlight">Futures</span></h2>
          <p>Established in 2016, Best Engineering College has grown into one of Tamil Nadu's most respected technical institutions, committed to academic excellence and student success.</p>
        </div>
        <div className="banner-img">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80" alt="College" />
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card"><h3>9+</h3><p>Years of Excellence</p></div>
        <div className="stat-card"><h3>5000+</h3><p>Students Enrolled</p></div>
        <div className="stat-card"><h3>200+</h3><p>Expert Faculty</p></div>
        <div className="stat-card"><h3>95%</h3><p>Placement Rate</p></div>
        <div className="stat-card"><h3>150+</h3><p>Recruiting Companies</p></div>
        <div className="stat-card"><h3>6</h3><p>Departments</p></div>
      </section>

      <section className="vm-section">
        <div className="vm-box">
          <div className="vm-icon"><div className="icon-vision"></div></div>
          <h3>Our Vision</h3>
          <p>To be a globally recognized institution that produces technically skilled, ethically grounded and socially responsible engineers who contribute meaningfully to society and industry.</p>
        </div>
        <div className="vm-box">
          <div className="vm-icon"><div className="icon-mission"></div></div>
          <h3>Our Mission</h3>
          <p>To provide quality technical education through experienced faculty, modern infrastructure and strong industry partnerships, enabling students to achieve their full potential in their careers.</p>
        </div>
        <div className="vm-box">
          <div className="vm-icon"><div className="icon-values"></div></div>
          <h3>Our Values</h3>
          <p>Integrity, Innovation, Inclusiveness and Excellence are the four pillars that guide every decision we make — from curriculum design to student welfare and campus development.</p>
        </div>
      </section>

      <section className="history-section">
        <div className="history-text">
          <p className="section-tag">Our Story</p>
          <h2>A Decade of Academic Excellence</h2>
          <p>Best Engineering College was founded in 2016 with a single vision — to provide affordable, quality engineering education to students from all backgrounds. Starting with just two departments and 300 students, the college has grown rapidly into a full-fledged technical institution.</p>
          <p>Over the years, we have earned NAAC A Grade accreditation, NBA accreditation for multiple departments, and ISO certification — all testaments to our unwavering commitment to quality. Today, we are home to over 5000 students and 200 faculty members across six departments.</p>
          <p>Our alumni are working in top companies across India and abroad, and many have gone on to pursue higher studies at prestigious universities. We are proud of every student who has walked through our gates and carried the BEC name forward.</p>
          <div className="history-tags">
            <span>Founded 2016</span><span>NAAC A Grade</span><span>NBA Accredited</span><span>ISO Certified</span><span>Anna University Affiliated</span>
          </div>
        </div>
        <div className="history-img">
          <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=700&q=80" alt="Campus" />
        </div>
      </section>

      <section className="milestone-section">
        <p className="section-tag center">Journey</p>
        <h2 className="sec-title">Our Milestones</h2>
        <p className="sec-sub">Key achievements in our growth story</p>
        <div className="milestone-list">
          {[
            { year: '2016', title: 'College Founded', desc: 'Best Engineering College established with CSE and ECE departments. First batch of 300 students admitted.' },
            { year: '2018', title: 'New Departments Added', desc: 'Mechanical, Civil, IT and Biotechnology departments launched. Student strength crossed 1500.' },
            { year: '2019', title: 'ISO Certification', desc: 'Received ISO 9001:2015 certification for quality management systems in education and administration.' },
            { year: '2021', title: 'NAAC A Grade', desc: 'Accredited with NAAC A Grade — a recognition of our academic quality, infrastructure and student outcomes.' },
            { year: '2022', title: 'NBA Accreditation', desc: 'CSE, ECE and Mechanical departments received NBA accreditation from the National Board of Accreditation.' },
            { year: '2024', title: '5000+ Students', desc: 'Student enrollment crossed 5000. Placement rate reached an all-time high of 95% with 150+ recruiting companies.' },
          ].map(m => (
            <div className="milestone-item" key={m.year}>
              <div className="ms-year">{m.year}</div>
              <div className="ms-line"></div>
              <div className="ms-content"><h4>{m.title}</h4><p>{m.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="leadership-section">
        <p className="section-tag center">Leadership</p>
        <h2 className="sec-title">Our Management</h2>
        <p className="sec-sub">The people who guide Best Engineering College</p>
        <div className="leader-row">
          {[
            { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80', name: 'Dr. R. Subramaniam', role: 'Chairman', desc: 'A visionary leader with 30+ years in education management. Founded BEC with the goal of making quality engineering education accessible to all.' },
            { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80', name: 'Dr. S. Meenakshi', role: 'Principal', desc: 'PhD from IIT Madras with 25 years of academic experience. Leads the college with a focus on research, innovation and student welfare.' },
            { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', name: 'Dr. K. Rajendran', role: 'Dean - Academics', desc: 'Oversees curriculum development, faculty training and academic quality. Has published 40+ research papers in international journals.' },
            { img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80', name: 'Mrs. P. Kavitha', role: 'Placement Officer', desc: 'Manages industry relations and campus recruitment. Built strong ties with 150+ companies ensuring consistent placement success.' },
          ].map(l => (
            <div className="leader-card" key={l.name}>
              <div className="leader-img-wrap"><img src={l.img} alt={l.role} /></div>
              <h3>{l.name}</h3>
              <span>{l.role}</span>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="accred-section">
        <p className="section-tag center">Recognition</p>
        <h2 className="sec-title">Accreditations &amp; Certifications</h2>
        <p className="sec-sub">Our quality is recognised by leading bodies in India</p>
        <div className="accred-row">
          {[
            { logo: 'https://www.naac.gov.in/favicon.ico', name: 'NAAC', desc: 'National Assessment and Accreditation Council — A Grade' },
            { logo: 'https://www.nbaind.org/favicon.ico', name: 'NBA', desc: 'National Board of Accreditation — CSE, ECE, Mech' },
            { logo: 'https://www.annauniv.edu/favicon.ico', name: 'Anna University', desc: 'Affiliated to Anna University, Chennai — Autonomous Status' },
            { logo: 'https://www.iso.org/favicon.ico', name: 'ISO 9001:2015', desc: 'Certified for Quality Management Systems in Education' },
            { logo: 'https://www.ugc.ac.in/favicon.ico', name: 'UGC Recognised', desc: 'Recognised by the University Grants Commission of India' },
            { logo: 'https://www.aicte-india.org/favicon.ico', name: 'AICTE Approved', desc: 'Approved by All India Council for Technical Education' },
          ].map(a => (
            <div className="accred-box" key={a.name}>
              <img src={a.logo} alt={a.name} className="accred-logo" />
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="satisfaction-section">
        <div className="satisfaction-left">
          <p className="section-tag">Student Feedback</p>
          <h2>What Our Students &amp; Parents Say</h2>
          <p>We take pride in the trust our students and their families place in us. Here is what they have to say about their experience at Best Engineering College.</p>
          <div className="satisfaction-stats">
            <div className="sat-stat"><h3>98%</h3><p>Student Satisfaction Rate</p></div>
            <div className="sat-stat"><h3>96%</h3><p>Parent Satisfaction Rate</p></div>
            <div className="sat-stat"><h3>4.8/5</h3><p>Average Rating</p></div>
          </div>
        </div>
      </section>

      <section className="infra-section">
        <p className="section-tag center">Infrastructure</p>
        <h2 className="sec-title">World-Class Infrastructure</h2>
        <p className="sec-sub">Built to support learning, research and student life</p>
        <div className="infra-row">
          {[
            { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80', title: '30+ Laboratories', desc: 'Fully equipped labs for every department with the latest hardware and software tools.' },
            { img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&q=80', title: 'Central Library', desc: '50,000+ books, e-journals, NPTEL access and a dedicated reading hall open 7 days a week.' },
            { img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80', title: 'Sports Complex', desc: 'Cricket ground, football field, basketball and badminton courts with a fully equipped gym.' },
            { img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&q=80', title: 'Hostel Facilities', desc: 'Separate hostels for boys and girls with Wi-Fi, mess, laundry and 24/7 security.' },
          ].map(i => (
            <div className="infra-box" key={i.title}>
              <img src={i.img} alt={i.title} />
              <div className="infra-info"><h3>{i.title}</h3><p>{i.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;

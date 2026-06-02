import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assets/Css/style.css';

function PortalPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', margin: '20px', padding: '40px 30px', textAlign: 'center', border: '2px solid #c9a84c' }}>
        <p style={{ color: '#c9a84c', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>ONLINE ACCESS</p>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', margin: '10px 0' }}>College Portals</h2>
        <p style={{ fontSize: '14px', color: '#666' }}>Select your role to continue</p>
      </div>

      <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {[
          { title: 'Student Portal', desc: 'Access attendance, marks, timetable, assignments and fee payment', link: '/student-login' },
          { title: 'Faculty Portal', desc: 'Manage attendance, enter marks and upload assignments', link: '/faculty-login' },
          { title: 'Admin Portal', desc: 'Manage students, faculty, admissions and fees', link: '/admin-login' },
        ].map(p => (
          <div key={p.title} style={{ background: '#fff', border: '2px solid #ddd', padding: '30px 25px', width: '300px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>{p.title}</h3>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>{p.desc}</p>
            <Link to={p.link} style={{ display: 'inline-block', background: '#c9a84c', color: '#fff', fontSize: '14px', fontWeight: 'bold', padding: '10px 30px', textDecoration: 'none' }}>Login</Link>
          </div>
        ))}
      </div>

      <div style={{ background: '#f9f9f9', padding: '30px 20px', margin: '20px', border: '1px solid #ddd' }}>
        <h3 style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Portal Information</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[['Secure Access'], ['Mobile Friendly'], ['24/7 Available'], ['Support Available']].map(([title]) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #ddd', padding: '15px 20px', textAlign: 'center', minWidth: '150px' }}>
              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>{title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PortalPage;

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assets/Css/style.css';

function PlacementsPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', margin: '0 20px 20px', borderRadius: '35px', padding: '60px 50px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #ebebeb' }}>
        <span className="section-tag">Career Success</span>
        <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#1a1a1a', margin: '12px 0 14px' }}>Placements at BEC</h2>
        <p style={{ fontSize: '15px', fontWeight: '300', color: '#666', maxWidth: '600px', margin: '0 auto 30px' }}>Our dedicated placement cell works year-round to connect students with top companies globally.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center' }}>
          {[['95%', 'Placement Rate'], ['1200+', 'Students Placed'], ['8.5 LPA', 'Highest Package'], ['4.2 LPA', 'Average Package'], ['150+', 'Recruiters']].map(([val, label]) => (
            <div key={label} style={{ background: '#1a1a1a', color: '#c9a84c', borderRadius: '22px', padding: '20px 32px', textAlign: 'center', minWidth: '120px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', fontFamily: "'Playfair Display',serif", lineHeight: '1', marginBottom: '4px' }}>{val}</h3>
              <p style={{ fontSize: '11px', color: '#888' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', margin: '0 20px 20px', borderRadius: '35px', padding: '50px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #ebebeb' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1a1a', marginBottom: '22px', paddingBottom: '12px', borderBottom: '2px solid #c9a84c' }}>Top Placed Students — 2024–25</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {[['https://www.tcs.com/favicon.ico', 'Arjun Ramesh', 'TCS', 'B.E. CSE | 6.5 LPA'],
            ['https://www.infosys.com/favicon.ico', 'Priya Lakshmi', 'Infosys', 'B.E. ECE | 5.0 LPA'],
            ['https://www.wipro.com/favicon.ico', 'Rahul Sharma', 'Wipro', 'B.E. Mech | 4.5 LPA'],
            ['https://www.cognizant.com/favicon.ico', 'Sneha Patel', 'Cognizant', 'B.E. IT | 5.5 LPA'],
            ['https://www.zoho.com/favicon.ico', 'Karthik Raj', 'Zoho', 'B.E. CSE | 8.5 LPA'],
            ['https://www.hcltech.com/favicon.ico', 'Divya Menon', 'HCL Tech', 'B.E. IT | 4.8 LPA'],
          ].map(([logo, name, company, info]) => (
            <div key={name} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '22px', padding: '20px', textAlign: 'center', minWidth: '160px', flex: '1' }}>
              <img src={logo} alt={company} style={{ width: '50px', height: '50px', objectFit: 'contain', margin: '0 auto 10px', borderRadius: '10px', display: 'block' }} />
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a', marginBottom: '3px' }}>{name}</h4>
              <p style={{ fontSize: '11px', color: '#c9a84c', fontWeight: '600' }}>{company}</p>
              <span style={{ fontSize: '11px', color: '#888' }}>{info}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', margin: '0 20px 20px', borderRadius: '35px', padding: '50px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #ebebeb' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1a1a', marginBottom: '22px', paddingBottom: '12px', borderBottom: '2px solid #c9a84c' }}>Our Top Recruiters</h2>
        <div className="recruit-row">
          {['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Accenture', 'Zoho', 'Amazon'].map(c => (
            <div key={c} className="recruit-box">
              <img src={`https://www.${c.toLowerCase()}.com/favicon.ico`} alt={c} />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', margin: '0 20px 20px', borderRadius: '35px', padding: '50px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #ebebeb' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a1a1a', marginBottom: '22px', paddingBottom: '12px', borderBottom: '2px solid #c9a84c' }}>Placement Process</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', justifyContent: 'center', alignItems: 'center' }}>
          {[['01', 'Registration', 'Students register with the placement cell'], ['02', 'Training', 'Aptitude, technical & soft skills training'], ['03', 'Company Visit', 'Companies visit campus for recruitment'], ['04', 'Interview', 'Written test, GD and HR interviews'], ['05', 'Offer Letter', 'Selected students receive offer letters']].map(([num, title, desc], i, arr) => (
            <React.Fragment key={num}>
              <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '22px', padding: '24px 20px', textAlign: 'center', width: '160px', transition: 'all 0.2s' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#c9a84c', fontFamily: "'Playfair Display',serif", marginBottom: '8px' }}>{num}</div>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a', marginBottom: '5px' }}>{title}</h4>
                <p style={{ fontSize: '11.5px', color: '#888', lineHeight: '1.6' }}>{desc}</p>
              </div>
              {i < arr.length - 1 && <span style={{ fontSize: '22px', color: '#c9a84c', padding: '0 10px', flexShrink: '0' }}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlacementsPage;

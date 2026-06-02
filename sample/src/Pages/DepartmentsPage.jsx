import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assets/Css/style.css';

const depts = [
  { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', name: 'Computer Science & Engineering', desc: 'The Department of CSE offers programs in AI, Machine Learning, Data Science, Cloud Computing and Cybersecurity. Our graduates are placed in top MNCs worldwide.', tags: ['AI & ML', 'Data Science', 'Cloud', 'Cybersecurity', 'Web Dev'], faculty: '60+', students: '1200', courses: '8', placement: '98%' },
  { img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', name: 'Electronics & Communication Engineering', desc: 'ECE department focuses on VLSI Design, Embedded Systems, Signal Processing and Communication. Students work on real-world projects with industry partners.', tags: ['VLSI', 'Embedded', 'Signal Processing', 'IoT'], faculty: '45+', students: '980', courses: '7', placement: '95%' },
  { img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80', name: 'Mechanical Engineering', desc: 'The Mechanical department covers Design, Manufacturing, Thermal Engineering and Robotics. Equipped with modern CAD/CAM labs and workshops.', tags: ['Design', 'Manufacturing', 'Thermal', 'Robotics', 'CAD/CAM'], faculty: '40+', students: '850', courses: '6', placement: '92%' },
  { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80', name: 'Civil Engineering', desc: 'Civil Engineering department offers programs in Structural, Environmental and Transportation Engineering with state-of-the-art survey and material testing labs.', tags: ['Structural', 'Environmental', 'Transport', 'Surveying'], faculty: '35+', students: '720', courses: '6', placement: '90%' },
  { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', name: 'Information Technology', desc: 'IT department specializes in Web Technologies, Cloud Computing, Cybersecurity and Mobile App Development. Industry-oriented curriculum with live project exposure.', tags: ['Web Tech', 'Cloud', 'Mobile Apps', 'Security'], faculty: '30+', students: '650', courses: '6', placement: '96%' },
  { img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', name: 'Biotechnology', desc: 'Biotechnology department focuses on Genetic Engineering, Bioinformatics and Pharmaceutical Biotechnology. Well-equipped research labs for cutting-edge experiments.', tags: ['Genetic Engg.', 'Bioinformatics', 'Pharma', 'Research'], faculty: '25+', students: '420', courses: '5', placement: '88%' },
];

function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', margin: '0 20px 20px', borderRadius: '35px', padding: '60px 50px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #ebebeb' }}>
        <span className="section-tag">Academics</span>
        <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#1a1a1a', margin: '12px 0 14px' }}>Our Departments</h2>
        <p style={{ fontSize: '15px', fontWeight: '300', color: '#666', maxWidth: '600px', margin: '0 auto' }}>Explore our six engineering departments offering world-class undergraduate and postgraduate programs.</p>
      </div>

      <div style={{ margin: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {depts.map(d => (
          <div key={d.name} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '35px', padding: '40px 44px', display: 'flex', flexWrap: 'wrap', gap: '36px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ flex: '1', minWidth: '260px', maxWidth: '380px' }}>
              <img src={d.img} alt={d.name} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '22px', display: 'block' }} />
            </div>
            <div style={{ flex: '2', minWidth: '260px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>{d.name}</h3>
              <p style={{ fontSize: '13.5px', color: '#666', lineHeight: '1.85', marginBottom: '14px', fontWeight: '300' }}>{d.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {d.tags.map(t => <span key={t} style={{ background: '#f5f5f5', color: '#333', fontSize: '11px', fontWeight: '600', padding: '5px 14px', borderRadius: '35px', border: '1px solid #ddd' }}>{t}</span>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
                {[['Faculty', d.faculty], ['Students', d.students], ['Courses', d.courses], ['Placement', d.placement]].map(([label, val]) => (
                  <div key={label} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '16px', padding: '12px 18px', textAlign: 'center', minWidth: '90px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#c9a84c', lineHeight: '1' }}>{val}</h4>
                    <p style={{ fontSize: '11px', color: '#888', marginTop: '3px' }}>{label}</p>
                  </div>
                ))}
              </div>
              <a href="#" style={{ display: 'inline-block', background: '#1a1a1a', color: '#c9a84c', padding: '10px 28px', borderRadius: '35px', fontSize: '13px', fontWeight: '700' }}>Learn More →</a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default DepartmentsPage;

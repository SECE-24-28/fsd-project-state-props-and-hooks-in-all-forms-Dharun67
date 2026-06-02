import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assets/Css/style.css';

function ContactPage() {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', subject: '', msg: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.first || !form.last || !form.email || !form.subject || !form.msg) { alert('Please fill all required fields.'); return; }
    setSent(true);
    setForm({ first: '', last: '', email: '', phone: '', subject: '', msg: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inp = { border: '1.5px solid #e0e0e0', borderRadius: '35px', padding: '11px 18px', fontSize: '13px', fontFamily: "'Poppins',sans-serif", outline: 'none', background: '#fafafa', width: '100%', boxSizing: 'border-box' };

  return (
    <>
      <Navbar />
      <div style={{ background: '#fff', margin: '0 20px 20px', borderRadius: '35px', padding: '60px 50px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #ebebeb' }}>
        <span className="section-tag">Get In Touch</span>
        <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#1a1a1a', margin: '12px 0 14px' }}>Contact Us</h2>
        <p style={{ fontSize: '15px', fontWeight: '300', color: '#666' }}>We'd love to hear from you. Reach out to us for admissions, academics or any general enquiry.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '22px', margin: '0 20px 20px' }}>
        <div style={{ flex: '2', minWidth: '280px', background: '#fff', border: '1px solid #eee', borderRadius: '35px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '22px' }}>Send us a Message</h3>
          {sent && <div style={{ background: 'rgba(201,168,76,0.1)', color: '#7a6020', border: '1px solid rgba(201,168,76,0.35)', padding: '11px 18px', borderRadius: '35px', fontSize: '13px', fontWeight: '500', marginBottom: '16px' }}>✅ Your message has been sent! We'll get back to you within 24 hours.</div>}
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '180px' }}><label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#555', marginBottom: '6px' }}>First Name *</label><input style={inp} value={form.first} onChange={e => setForm({ ...form, first: e.target.value })} placeholder="First name" /></div>
              <div style={{ flex: '1', minWidth: '180px' }}><label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#555', marginBottom: '6px' }}>Last Name *</label><input style={inp} value={form.last} onChange={e => setForm({ ...form, last: e.target.value })} placeholder="Last name" /></div>
            </div>
            <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#555', marginBottom: '6px' }}>Email Address *</label><input style={inp} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" /></div>
            <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#555', marginBottom: '6px' }}>Phone Number</label><input style={inp} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" /></div>
            <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#555', marginBottom: '6px' }}>Subject *</label>
              <select style={inp} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                <option value="">Select a subject</option>
                <option>Admission Enquiry</option><option>Fee Related</option><option>Academic Query</option><option>Placement Information</option><option>Hostel & Facilities</option><option>Other</option>
              </select>
            </div>
            <div style={{ marginBottom: '16px' }}><label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#555', marginBottom: '6px' }}>Message *</label><textarea style={{ ...inp, borderRadius: '18px', resize: 'vertical' }} rows="5" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Type your message here..."></textarea></div>
            <button type="submit" style={{ background: '#c9a84c', color: '#fff', border: 'none', padding: '13px 36px', borderRadius: '35px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: "'Poppins',sans-serif" }}>📨 Send Message</button>
          </form>
        </div>
        <div style={{ flex: '1', minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[['📍', 'Address', 'NH-48, Pennalur Village, Sriperumbudur Taluk, Kanchipuram – 602 117, Tamil Nadu, India'],
            ['📞', 'Phone', '+91 44 2716 3000\n+91 98765 43210'],
            ['📧', 'Email', 'info@bec.edu.in\nadmissions@bec.edu.in'],
            ['🕐', 'Working Hours', 'Monday – Saturday\n9:00 AM – 5:00 PM'],
            ['🎓', 'Admissions Office', 'admissions@bec.edu.in\n+91 98765 43211']
          ].map(([icon, title, text]) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '22px', padding: '22px', boxShadow: '0 3px 14px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ fontSize: '26px', flexShrink: '0' }}>{icon}</span>
              <div><h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a', marginBottom: '5px' }}>{title}</h4><p style={{ fontSize: '12.5px', color: '#777', lineHeight: '1.75', fontWeight: '300', whiteSpace: 'pre-line' }}>{text}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: '0 20px 20px', borderRadius: '35px', overflow: 'hidden', height: '360px', border: '1px solid #eee', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d79.9!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 'none', display: 'block' }} allowFullScreen="" loading="lazy" title="map"></iframe>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

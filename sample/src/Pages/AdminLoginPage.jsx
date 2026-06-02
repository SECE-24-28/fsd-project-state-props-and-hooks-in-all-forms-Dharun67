import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import clgLogo from '../Assets/Images/CLGLOGO.png';
import '../Assets/Css/style.css';
import '../Assets/Css/login.css';
import '../Assets/Css/portal-login.css';

function AdminLoginPage() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState({ id: '', pass: '', gen: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = { id: '', pass: '', gen: '' };
    const trimmedId = id.trim();
    const trimmedPass = pass.trim();
    if (!trimmedId) { e2.id = 'Please enter your Admin ID or Email.'; setErr(e2); return; }
    if (!trimmedPass) { e2.pass = 'Please enter your password.'; setErr(e2); return; }
    if (trimmedId === 'admin' && trimmedPass === 'admin123') {
      localStorage.setItem('bec_admin_logged', '1');
      navigate('/admin-portal');
    } else {
      e2.gen = 'Invalid credentials. Use demo: admin / admin123';
      setErr(e2);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card portal-login-card">
          <div className="portal-login-badge admin-badge">🛡️ Admin Portal</div>
          <div className="login-logo">
            <img src={clgLogo} alt="BEC Logo" />
            <h2>Admin Login</h2>
            <p>Enter your credentials to access the admin portal</p>
          </div>
          <form onSubmit={handleSubmit}>
            {err.gen && <div className="error-msg">{err.gen}</div>}
            <div className="form-group">
              <label>Admin ID / Email</label>
              <input style={{ width: '100%', padding: '11px 18px', border: '1.5px solid #e0e0e0', borderRadius: '35px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box' }} value={id} onChange={e => setId(e.target.value)} placeholder="e.g. admin or admin@bec.edu.in" />
              {err.id && <span className="field-error">{err.id}</span>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" style={{ width: '100%', padding: '11px 18px', border: '1.5px solid #e0e0e0', borderRadius: '35px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box' }} value={pass} onChange={e => setPass(e.target.value)} placeholder="Enter your password" />
              {err.pass && <span className="field-error">{err.pass}</span>}
            </div>
            <div className="form-row">
              <label className="check-label"><input type="checkbox" /> Remember me</label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
            <button type="submit" className="submit-btn">Login to Admin Portal</button>
            <p className="switch-text">Not an admin? <Link to="/portal" style={{ color: '#c9a84c', fontWeight: '600' }}>Back to Portal</Link></p>
          </form>
          <div className="demo-creds"><p>Demo: ID <strong>admin</strong> | Password <strong>admin123</strong></p></div>
        </div>
      </div>
      <div className="login-footer">
        <p>&copy; 2025 Best Engineering College. All Rights Reserved.</p>
        <p><Link to="/privacy">Privacy Policy</Link> &nbsp;|&nbsp; <Link to="/terms">Terms of Use</Link></p>
      </div>
    </>
  );
}

export default AdminLoginPage;

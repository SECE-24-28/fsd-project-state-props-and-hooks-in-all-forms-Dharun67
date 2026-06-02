import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import clgLogo from '../Assets/Images/CLGLOGO.png';
import '../Assets/Css/style.css';
import '../Assets/Css/login.css';
import '../Assets/Css/portal-login.css';

function StudentLoginPage() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState({ id: '', pass: '', gen: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = { id: '', pass: '', gen: '' };
    const trimmedId = id.trim();
    const trimmedPass = pass.trim();
    if (!trimmedId) { e2.id = 'Please enter your Student ID or Email.'; setErr(e2); return; }
    if (!trimmedPass) { e2.pass = 'Please enter your password.'; setErr(e2); return; }
    
    const students = localStorage.getItem('bec_students');
    const studentList = students ? JSON.parse(students) : [];
    const student = studentList.find(s => (s.roll === trimmedId || s.email === trimmedId) && s.password === trimmedPass);
    
    if (student) {
      localStorage.setItem('bec_student_logged', JSON.stringify(student));
      navigate('/student-portal');
    } else if (trimmedId === 'student' && trimmedPass === 'student123') {
      localStorage.setItem('bec_student_logged', JSON.stringify({ roll: 'DEMO001', name: 'Demo Student' }));
      navigate('/student-portal');
    } else {
      e2.gen = 'Invalid credentials. Use demo: student / student123';
      setErr(e2);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card portal-login-card">
          <div className="portal-login-badge student-badge">Student Portal</div>
          <div className="login-logo">
            <img src={clgLogo} alt="BEC Logo" />
            <h2>Student Login</h2>
            <p>Enter your credentials to access the student portal</p>
          </div>
          <form onSubmit={handleSubmit}>
            {err.gen && <div className="error-msg">{err.gen}</div>}
            <div className="form-group">
              <label>Student ID / Email</label>
              <input style={{ width: '100%', padding: '11px 18px', border: '1.5px solid #e0e0e0', borderRadius: '35px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box' }} value={id} onChange={e => setId(e.target.value)} placeholder="e.g. 21CS001 or student@bec.edu.in" />
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
            <button type="submit" className="submit-btn">Login to Student Portal</button>
            <p className="switch-text">Not a student? <Link to="/portal" style={{ color: '#c9a84c', fontWeight: '600' }}>Back to Portal</Link></p>
          </form>
          <div className="demo-creds"><p>Demo: ID <strong>student</strong> | Password <strong>student123</strong></p></div>
        </div>
      </div>
      <div className="login-footer">
        <p>&copy; 2025 Best Engineering College. All Rights Reserved.</p>
        <p><Link to="/privacy">Privacy Policy</Link> &nbsp;|&nbsp; <Link to="/terms">Terms of Use</Link></p>
      </div>
    </>
  );
}

export default StudentLoginPage;

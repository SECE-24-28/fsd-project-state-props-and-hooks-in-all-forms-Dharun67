import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import clgLogo from '../Assets/Images/CLGLOGO.png';
import '../Assets/Css/style.css';
import '../Assets/Css/login.css';

function LoginPage() {
  const [tab, setTab] = useState('signin');
  const [si, setSi] = useState({ email: '', password: '', remember: false });
  const [su, setSu] = useState({ first: '', last: '', email: '', phone: '', password: '', confirm: '', agree: false });
  const [siErr, setSiErr] = useState({});
  const [suErr, setSuErr] = useState({});
  const [siMsg, setSiMsg] = useState({ type: '', text: '' });
  const [suMsg, setSuMsg] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  const emailRx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  const phoneRx = /^[0-9]{10}$/;
  const nameRx = /^[a-zA-Z ]{2,}$/;

  const handleSignIn = (e) => {
    e.preventDefault();
    const err = {};
    if (!si.email) err.email = 'Please enter your email.';
    else if (!emailRx.test(si.email)) err.email = 'Please enter a valid email address.';
    if (!si.password) err.password = 'Please enter your password.';
    else if (si.password.length < 6) err.password = 'Password must be at least 6 characters.';
    setSiErr(err);
    if (Object.keys(err).length > 0) return;

    const users = JSON.parse(localStorage.getItem('bec_users') || '[]');
    const match = users.find(u => u.email === si.email && u.password === si.password);
    if (!match) { setSiMsg({ type: 'error', text: 'Incorrect email or password. Please try again.' }); return; }

    localStorage.setItem('bec_loggedin', JSON.stringify(match));
    setSiMsg({ type: 'success', text: `Login successful! Welcome ${match.first}. Redirecting...` });
    setTimeout(() => navigate('/'), 1800);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const err = {};
    if (!su.first) err.first = 'Please enter your first name.';
    else if (!nameRx.test(su.first)) err.first = 'First name must contain only letters.';
    if (!su.last) err.last = 'Please enter your last name.';
    else if (!nameRx.test(su.last)) err.last = 'Last name must contain only letters.';
    if (!su.email) err.email = 'Please enter your email.';
    else if (!emailRx.test(su.email)) err.email = 'Please enter a valid email address.';
    if (!su.phone) err.phone = 'Please enter your phone number.';
    else if (!phoneRx.test(su.phone)) err.phone = 'Phone number must be exactly 10 digits.';
    if (!su.password) err.password = 'Please enter a password.';
    else if (su.password.length < 6) err.password = 'Password must be at least 6 characters.';
    if (!su.confirm) err.confirm = 'Please confirm your password.';
    else if (su.confirm !== su.password) err.confirm = 'Passwords do not match.';
    if (!su.agree) err.agree = 'Please agree to the Terms and Conditions.';
    setSuErr(err);
    if (Object.keys(err).length > 0) return;

    const users = JSON.parse(localStorage.getItem('bec_users') || '[]');
    if (users.find(u => u.email === su.email)) { setSuMsg({ type: 'error', text: 'This email is already registered. Please sign in.' }); return; }

    users.push({ first: su.first, last: su.last, email: su.email, phone: su.phone, password: su.password });
    localStorage.setItem('bec_users', JSON.stringify(users));
    setSuMsg({ type: 'success', text: 'Account created successfully! Please sign in.' });
    setTimeout(() => { setSu({ first: '', last: '', email: '', phone: '', password: '', confirm: '', agree: false }); setTab('signin'); setSi(s => ({ ...s, email: su.email })); }, 1800);
  };

  const E = ({ field, errs }) => errs[field] ? <span className="field-error">{errs[field]}</span> : null;
  const inp = (field, val, setter, type = 'text', ph = '') => <input type={type} className="form-group-input" style={{ width: '100%', padding: '11px 18px', border: '1.5px solid #e0e0e0', borderRadius: '35px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box' }} value={val} onChange={e => setter(s => ({ ...s, [field]: e.target.value }))} placeholder={ph} />;

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-logo">
            <img src={clgLogo} alt="BEC Logo" />
            <h2>Best Engineering College</h2>
            <p>Autonomous | Affiliated to Anna University</p>
          </div>

          <div className="auth-tabs">
            <button type="button" className="tab-btn" onClick={() => setTab('signin')} style={{ background: tab === 'signin' ? '#1a1a1a' : 'transparent', color: tab === 'signin' ? '#c9a84c' : '#888' }}>Sign In</button>
            <button type="button" className="tab-btn" onClick={() => setTab('signup')} style={{ background: tab === 'signup' ? '#1a1a1a' : 'transparent', color: tab === 'signup' ? '#c9a84c' : '#888' }}>Sign Up</button>
          </div>

          {tab === 'signin' && (
            <form onSubmit={handleSignIn}>
              {siMsg.text && <div className={siMsg.type === 'error' ? 'error-msg' : 'success-msg'}>{siMsg.text}</div>}
              <div className="form-group">
                <label>Email Address</label>
                {inp('email', si.email, setSi, 'text', 'Enter your email')}
                <E field="email" errs={siErr} />
              </div>
              <div className="form-group">
                <label>Password</label>
                {inp('password', si.password, setSi, 'password', 'Enter your password')}
                <E field="password" errs={siErr} />
              </div>
              <div className="form-row">
                <label className="check-label"><input type="checkbox" checked={si.remember} onChange={e => setSi(s => ({ ...s, remember: e.target.checked }))} /> Remember me</label>
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              <button type="submit" className="submit-btn">Sign In</button>
              <p className="switch-text">Don't have an account? <span className="switch-link" onClick={() => setTab('signup')}>Sign Up</span></p>
            </form>
          )}

          {tab === 'signup' && (
            <form onSubmit={handleSignUp}>
              {suMsg.text && <div className={suMsg.type === 'error' ? 'error-msg' : 'success-msg'}>{suMsg.text}</div>}
              <div className="form-row-two">
                <div className="form-group"><label>First Name</label>{inp('first', su.first, setSu, 'text', 'First name')}<E field="first" errs={suErr} /></div>
                <div className="form-group"><label>Last Name</label>{inp('last', su.last, setSu, 'text', 'Last name')}<E field="last" errs={suErr} /></div>
              </div>
              <div className="form-group"><label>Email Address</label>{inp('email', su.email, setSu, 'text', 'Enter your email')}<E field="email" errs={suErr} /></div>
              <div className="form-group"><label>Phone Number</label>{inp('phone', su.phone, setSu, 'text', 'Enter your phone number')}<E field="phone" errs={suErr} /></div>
              <div className="form-group"><label>Password</label>{inp('password', su.password, setSu, 'password', 'Create a password')}<E field="password" errs={suErr} /></div>
              <div className="form-group"><label>Confirm Password</label>{inp('confirm', su.confirm, setSu, 'password', 'Confirm your password')}<E field="confirm" errs={suErr} /></div>
              <div className="form-group">
                <label className="check-label"><input type="checkbox" checked={su.agree} onChange={e => setSu(s => ({ ...s, agree: e.target.checked }))} style={{ accentColor: '#c9a84c' }} /> I agree to the <a href="#">Terms &amp; Conditions</a></label>
                <E field="agree" errs={suErr} />
              </div>
              <button type="submit" className="submit-btn">Create Account</button>
              <p className="switch-text">Already have an account? <span className="switch-link" onClick={() => setTab('signin')}>Sign In</span></p>
            </form>
          )}
        </div>
      </div>
      <div className="login-footer">
        <p>&copy; 2025 Best Engineering College. All Rights Reserved.</p>
        <p><Link to="/privacy">Privacy Policy</Link> &nbsp;|&nbsp; <Link to="/terms">Terms of Use</Link></p>
      </div>
    </>
  );
}

export default LoginPage;

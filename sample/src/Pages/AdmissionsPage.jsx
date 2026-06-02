import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Assets/Css/style.css';

function AdmissionsPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '', gender: '', community: '', address: '', mobile: '', email: '', parentName: '', parentMobile: '', schoolName: '', tenthPercent: '', collegeName: '', twelfthPercent: '', yearPassing: '', department: '', admissionType: '', declare: false });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const emailRx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  const phoneRx = /^[0-9]{10}$/;

  const validate = () => {
    const e = {};
    if (!form.firstName) e.firstName = 'Please enter your first name.';
    if (!form.lastName) e.lastName = 'Please enter your last name.';
    if (!form.dob) e.dob = 'Please select your date of birth.';
    if (!form.gender) e.gender = 'Please select your gender.';
    if (!form.community) e.community = 'Please select your community.';
    if (!form.address) e.address = 'Please enter your address.';
    if (!form.mobile) e.mobile = 'Please enter your mobile number.';
    else if (!phoneRx.test(form.mobile)) e.mobile = 'Mobile number must be exactly 10 digits.';
    if (!form.email) e.email = 'Please enter your email address.';
    else if (!emailRx.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.parentName) e.parentName = 'Please enter parent name.';
    if (!form.parentMobile) e.parentMobile = 'Please enter parent mobile number.';
    else if (!phoneRx.test(form.parentMobile)) e.parentMobile = 'Parent mobile must be exactly 10 digits.';
    if (!form.schoolName) e.schoolName = 'Please enter your 10th school name.';
    if (!form.tenthPercent) e.tenthPercent = 'Please enter your 10th percentage.';
    if (!form.collegeName) e.collegeName = 'Please enter your 12th college name.';
    if (!form.twelfthPercent) e.twelfthPercent = 'Please enter your 12th percentage.';
    if (!form.yearPassing) e.yearPassing = 'Please select year of passing.';
    if (!form.department) e.department = 'Please select a department.';
    if (!form.admissionType) e.admissionType = 'Please select admission type.';
    if (!form.declare) e.declare = 'Please agree to the declaration.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setForm({ firstName: '', lastName: '', dob: '', gender: '', community: '', address: '', mobile: '', email: '', parentName: '', parentMobile: '', schoolName: '', tenthPercent: '', collegeName: '', twelfthPercent: '', yearPassing: '', department: '', admissionType: '', declare: false });
      window.scrollTo(0, 0);
    }
  };

  const f = (field) => ({ value: form[field], onChange: e => setForm({ ...form, [field]: e.target.value }), style: { width: '100%', padding: '10px 18px', border: `1.5px solid ${errors[field] ? '#c0392b' : '#e0e0e0'}`, borderRadius: '35px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box' } });
  const sel = (field) => ({ value: form[field], onChange: e => setForm({ ...form, [field]: e.target.value }), style: { width: '100%', padding: '10px 18px', border: `1.5px solid ${errors[field] ? '#c0392b' : '#e0e0e0'}`, borderRadius: '35px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box' } });
  const err = (field) => errors[field] ? <span style={{ display: 'block', fontSize: '11.5px', color: '#c0392b', fontWeight: '500', marginTop: '5px', paddingLeft: '10px' }}>{errors[field]}</span> : null;

  const module = (title, children) => (
    <div style={{ background: '#fff', borderRadius: '28px', padding: '30px 35px', marginBottom: '20px', border: '1px solid #e8e8e8', boxShadow: '0 3px 16px rgba(0,0,0,0.06)' }}>
      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '17px', fontWeight: '700', color: '#1a1a1a', borderBottom: '2px solid #c9a84c', paddingBottom: '10px', marginBottom: '22px' }}>{title}</p>
      {children}
    </div>
  );

  const row = (children) => <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>{children}</div>;
  const col = (children) => <div style={{ flex: '1', minWidth: '200px' }}>{children}</div>;
  const label = (text) => <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '5px' }}>{text}</label>;

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '780px', margin: '30px auto 40px', padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: '28px', padding: '28px 35px', marginBottom: '20px', border: '1px solid #e8e8e8', boxShadow: '0 3px 16px rgba(0,0,0,0.06)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '26px', fontWeight: '800', color: '#1a1a1a', marginBottom: '6px' }}>Admission Application Form</h2>
          <p style={{ fontSize: '13px', color: '#888', fontWeight: '300' }}>Fill in the details below to apply for admission at Best Engineering College 2025-26</p>
        </div>

        {success && <div style={{ background: 'rgba(201,168,76,0.1)', color: '#7a6020', border: '1px solid rgba(201,168,76,0.35)', borderRadius: '25px', padding: '14px 20px', fontSize: '14px', fontWeight: '500', textAlign: 'center', marginBottom: '16px' }}>Your application has been submitted successfully! We will contact you soon.</div>}

        <form onSubmit={handleSubmit}>
          {module('Personal Details', <>
            {row(<>{col(<>{label('First Name')}<input {...f('firstName')} placeholder="Enter first name" />{err('firstName')}</>)}{col(<>{label('Last Name')}<input {...f('lastName')} placeholder="Enter last name" />{err('lastName')}</>)}</>)}
            {row(<>{col(<>{label('Date of Birth')}<input type="date" {...f('dob')} />{err('dob')}</>)}{col(<>{label('Gender')}<select {...sel('gender')}><option value="">Select gender</option><option>Male</option><option>Female</option><option>Other</option></select>{err('gender')}</>)}</>)}
            {row(<>{col(<>{label('Religion')}<input {...f('religion')} placeholder="Enter religion" /></>)}{col(<>{label('Community')}<select {...sel('community')}><option value="">Select community</option><option value="oc">OC</option><option value="bc">BC</option><option value="mbc">MBC</option><option value="sc">SC</option><option value="st">ST</option></select>{err('community')}</>)}</>)}
            {label('Address')}
            <textarea {...f('address')} rows="3" placeholder="Enter your full address" style={{ width: '100%', padding: '10px 18px', border: `1.5px solid ${errors.address ? '#c0392b' : '#e0e0e0'}`, borderRadius: '18px', fontSize: '13.5px', fontFamily: "'Poppins',sans-serif", background: '#fafafa', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
            {err('address')}
          </>)}

          {module('Contact Details', <>
            {row(<>{col(<>{label('Mobile Number')}<input {...f('mobile')} placeholder="Enter mobile number" />{err('mobile')}</>)}{col(<>{label('Email Address')}<input {...f('email')} placeholder="Enter email address" />{err('email')}</>)}</>)}
            {row(<>{col(<>{label('Parent / Guardian Name')}<input {...f('parentName')} placeholder="Enter parent name" />{err('parentName')}</>)}{col(<>{label('Parent Mobile Number')}<input {...f('parentMobile')} placeholder="Enter parent mobile" />{err('parentMobile')}</>)}</>)}
          </>)}

          {module('Academic Details', <>
            {row(<>{col(<>{label('10th School Name')}<input {...f('schoolName')} placeholder="Enter school name" />{err('schoolName')}</>)}{col(<>{label('10th Percentage')}<input {...f('tenthPercent')} placeholder="e.g. 85" />{err('tenthPercent')}</>)}</>)}
            {row(<>{col(<>{label('12th College Name')}<input {...f('collegeName')} placeholder="Enter college name" />{err('collegeName')}</>)}{col(<>{label('12th Percentage')}<input {...f('twelfthPercent')} placeholder="e.g. 88" />{err('twelfthPercent')}</>)}</>)}
            {row(<>{col(<>{label('Year of Passing (12th)')}<select {...sel('yearPassing')}><option value="">Select year</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option></select>{err('yearPassing')}</>)}{col(<>{label('TNEA Application Number')}<input {...f('tneaNo')} placeholder="Enter TNEA number" /></>)}</>)}
          </>)}

          {module('Course Selection', <>
            {row(<>{col(<>{label('Preferred Department')}<select {...sel('department')}><option value="">Select department</option><option value="cse">B.E. Computer Science Engineering</option><option value="ece">B.E. Electronics &amp; Communication</option><option value="mech">B.E. Mechanical Engineering</option><option value="civil">B.E. Civil Engineering</option><option value="it">B.E. Information Technology</option><option value="bio">B.E. Biotechnology</option></select>{err('department')}</>)}{col(<>{label('Type of Admission')}<select {...sel('admissionType')}><option value="">Select type</option><option value="tnea">TNEA Counselling</option><option value="management">Management Quota</option><option value="nri">NRI Quota</option></select>{err('admissionType')}</>)}</>)}
          </>)}

          {module('Declaration', <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" id="declare" checked={form.declare} onChange={e => setForm({ ...form, declare: e.target.checked })} style={{ width: '15px', height: '15px', accentColor: '#c9a84c' }} />
              <label htmlFor="declare" style={{ fontSize: '13px', color: '#555' }}>I hereby declare that all the information provided above is true and correct to the best of my knowledge.</label>
            </div>
            {err('declare')}
          </>)}

          <button type="submit" style={{ background: '#c9a84c', color: '#fff', border: 'none', borderRadius: '35px', padding: '13px 40px', fontSize: '15px', fontWeight: '700', fontFamily: "'Poppins',sans-serif", width: '100%', cursor: 'pointer' }}>Submit Application</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AdmissionsPage;

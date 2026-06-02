import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clgLogo from '../Assets/Images/CLGLOGO.png';
import '../Assets/Css/admin-portal.css';

const navLinks = [
  ['dashboard', '🏠 Dashboard'], ['students', '🎓 Student Management'], ['faculty', '👨🏫 Faculty Management'],
  ['admissions', '📋 Admission Management'], ['departments', '🏫 Department Management'],
  ['courses', '📚 Course Management'], ['fees', '💳 Fee Management'], ['reports', '📊 Reports'], ['settings', '⚙️ Settings'],
];
const titles = { dashboard: 'Dashboard', students: 'Student Management', faculty: 'Faculty Management', admissions: 'Admission Management', departments: 'Department Management', courses: 'Course Management', fees: 'Fee Management', reports: 'Reports', settings: 'Settings' };

const getFacultyData = () => {
  const stored = localStorage.getItem('bec_faculty');
  return stored ? JSON.parse(stored) : [
    { id: 1, empId: 'FAC-CSE-001', name: 'Dr. Ramesh Kumar', dept: 'CSE', designation: 'Assoc. Professor', email: 'ramesh@bec.edu.in', status: 'Active', password: 'faculty123' },
    { id: 2, empId: 'FAC-CSE-002', name: 'Dr. Priya Nair', dept: 'CSE', designation: 'Asst. Professor', email: 'priya.f@bec.edu.in', status: 'Active', password: 'faculty123' },
    { id: 3, empId: 'FAC-ECE-001', name: 'Dr. Anand Rajan', dept: 'ECE', designation: 'Professor', email: 'anand@bec.edu.in', status: 'Active', password: 'faculty123' },
    { id: 4, empId: 'FAC-ME-001', name: 'Prof. Kumar S.', dept: 'Mech', designation: 'Assoc. Professor', email: 'kumar@bec.edu.in', status: 'Active', password: 'faculty123' },
    { id: 5, empId: 'FAC-CV-001', name: 'Dr. Meena T.', dept: 'Civil', designation: 'Asst. Professor', email: 'meena@bec.edu.in', status: 'On Leave', password: 'faculty123' },
  ];
};
  const stored = localStorage.getItem('bec_students');
  return stored ? JSON.parse(stored) : [
    { id: 1, roll: '21CS001', name: 'Arjun Ramesh', dept: 'CSE', sem: 5, email: 'arjun@bec.edu.in', status: 'Active', password: 'pass123' },
    { id: 2, roll: '21CS002', name: 'Priya Lakshmi', dept: 'CSE', sem: 5, email: 'priya@bec.edu.in', status: 'Active', password: 'pass123' },
    { id: 3, roll: '21EC001', name: 'Rahul Sharma', dept: 'ECE', sem: 5, email: 'rahul@bec.edu.in', status: 'Active', password: 'pass123' },
    { id: 4, roll: '21ME001', name: 'Sneha Patel', dept: 'Mech', sem: 5, email: 'sneha@bec.edu.in', status: 'Active', password: 'pass123' },
    { id: 5, roll: '21CV001', name: 'Karthik Raj', dept: 'Civil', sem: 3, email: 'karthik@bec.edu.in', status: 'On Leave', password: 'pass123' },
    { id: 6, roll: '21IT001', name: 'Divya Menon', dept: 'IT', sem: 3, email: 'divya@bec.edu.in', status: 'Active', password: 'pass123' },
  ];
};

function AdminPortalPage() {
  const [page, setPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stuSearch, setStuSearch] = useState('');
  const [modal, setModal] = useState({ open: false, type: '' });
  const [stuData, setStuData] = useState(getStudentData());
  const [facultyData, setFacultyData] = useState(getFacultyData());
  const [newStudent, setNewStudent] = useState({ name: '', roll: '', dept: 'CSE', email: '', password: '', sem: 1 });
  const [newFaculty, setNewFaculty] = useState({ name: '', empId: '', dept: 'CSE', designation: 'Asst. Professor', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('bec_admin_logged')) {
      navigate('/admin-login');
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem('bec_students', JSON.stringify(stuData));
  }, [stuData]);

  useEffect(() => {
    localStorage.setItem('bec_faculty', JSON.stringify(facultyData));
  }, [facultyData]);

  const filteredStudents = stuData.filter(s => {
    const q = stuSearch.toLowerCase();
    return !q || s.name.toLowerCase().includes(q) || s.roll.toLowerCase().includes(q) || s.dept.toLowerCase().includes(q);
  });

  const handleLogout = () => {
    localStorage.removeItem('bec_admin_logged');
    navigate('/portal');
  };

  const inp = { padding: '10px 16px', border: '1.5px solid #e0e0e0', borderRadius: '35px', fontSize: '13px', fontFamily: "'Poppins',sans-serif", outline: 'none', background: '#fafafa', width: '100%', boxSizing: 'border-box' };

  return (
    <div className="ap-layout">
      <div className={`ap-sidebar${sidebarOpen ? '' : ' closed'}`}>
        <div className="ap-logo">
          <img src={clgLogo} alt="BEC" />
          <div><h3>BEC Portal</h3><span>Admin</span></div>
        </div>
        <nav className="ap-nav">
          {navLinks.map(([key, label]) => (
            <span key={key} className={`ap-link${page === key ? ' active' : ''}`} onClick={() => setPage(key)}>{label}</span>
          ))}
        </nav>
        <span className="ap-logout" onClick={handleLogout}>🚪 Logout</span>
      </div>

      <div className={`ap-main${sidebarOpen ? '' : ' full'}`}>
        <div className="ap-topbar">
          <button className="ap-menu-btn" onClick={() => setSidebarOpen(o => !o)}>☰</button>
          <div className="ap-topbar-title">{titles[page]}</div>
          <div className="ap-topbar-right">
            <div className="ap-user"><div className="ap-avatar">AD</div><span>Admin</span></div>
          </div>
        </div>

        {/* DASHBOARD */}
        {page === 'dashboard' && (
          <div className="ap-page active">
            <div className="ap-welcome">
              <div><h2>Admin Dashboard 🛡️</h2><p>Full system overview — Best Engineering College</p></div>
              <span className="ap-badge">Academic Year 2025–26</span>
            </div>
            <div className="ap-stats">
              {[['🎓', '5,240', 'Total Students'], ['👨🏫', '210', 'Total Faculty'], ['📋', '320', 'Admissions 2025'], ['💳', '₹42L', 'Fee Collected'], ['🏫', '6', 'Departments'], ['📚', '24', 'Courses']].map(([icon, val, label]) => (
                <div className="ap-stat" key={label}><div className="ap-si">{icon}</div><div><h3>{val}</h3><p>{label}</p></div></div>
              ))}
            </div>
            <div className="ap-dash-row">
              <div className="ap-dash-box">
                <h4>Recent Admissions</h4>
                <div className="ap-table-wrap" style={{ borderRadius: '14px', marginTop: '0' }}>
                  <table className="ap-table">
                    <thead><tr><th>Name</th><th>Course</th><th>Date</th><th>Status</th></tr></thead>
                    <tbody>
                      {[['Arun Kumar', 'B.E. CSE', 'Jun 1', 'Approved'], ['Meena Raj', 'B.E. ECE', 'Jun 2', 'Pending'], ['Vijay S.', 'B.E. Mech', 'Jun 3', 'Approved'], ['Lakshmi P.', 'B.E. Civil', 'Jun 3', 'Pending']].map(([n, c, d, s]) => (
                        <tr key={n}><td>{n}</td><td>{c}</td><td>{d}</td><td><span className={s === 'Approved' ? 'badge-ok' : 'badge-warn'}>{s}</span></td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="ap-dash-box">
                <h4>Fee Collection Overview</h4>
                <div className="ap-fee-bars">
                  {[['CSE', 85], ['ECE', 72], ['Mech', 90], ['Civil', 65], ['IT', 78]].map(([dept, pct]) => (
                    <div className="ap-fee-bar-item" key={dept}>
                      <span>{dept}</span>
                      <div className="ap-bar-wrap"><div className="ap-bar" style={{ width: `${pct}%` }}></div></div>
                      <span>{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STUDENTS */}
        {page === 'students' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Student Management</h2>
            <div className="ap-controls">
              <input placeholder="🔍 Search students..." value={stuSearch} onChange={e => setStuSearch(e.target.value)} />
              <select onChange={e => setStuSearch(e.target.value === '' ? '' : e.target.value)}><option value="">All Departments</option><option>CSE</option><option>ECE</option><option>Mech</option><option>Civil</option><option>IT</option></select>
              <button className="ap-btn" onClick={() => setModal({ open: true, type: 'student' })}>+ Add Student</button>
            </div>
            <div className="ap-table-wrap">
              <table className="ap-table">
                <thead><tr><th>#</th><th>Roll No.</th><th>Name</th><th>Dept.</th><th>Semester</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {filteredStudents.map(s => (
                    <tr key={s.id}><td>{s.id}</td><td>{s.roll}</td><td>{s.name}</td><td>{s.dept}</td><td>{s.sem}</td><td>{s.email}</td>
                      <td><span className={s.status === 'Active' ? 'badge-ok' : 'badge-warn'}>{s.status}</span></td>
                      <td><button className="ap-act-btn" onClick={() => alert(`Edit: ${s.name}\nRoll: ${s.roll}\nPassword: ${s.password}`)}>View</button><button className="ap-act-btn red" onClick={() => { if(window.confirm(`Delete ${s.name}?`)) setStuData(stuData.filter(st => st.id !== s.id)); }}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FACULTY */}
        {page === 'faculty' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Faculty Management</h2>
            <div className="ap-controls">
              <input placeholder="🔍 Search faculty..." />
              <button className="ap-btn" onClick={() => setModal({ open: true, type: 'faculty' })}>+ Add Faculty</button>
            </div>
            <div className="ap-table-wrap">
              <table className="ap-table">
                <thead><tr><th>#</th><th>ID</th><th>Name</th><th>Dept.</th><th>Designation</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {facultyData.map((f, i) => (
                    <tr key={f.empId}><td>{i + 1}</td><td>{f.empId}</td><td>{f.name}</td><td>{f.dept}</td><td>{f.designation}</td><td>{f.email}</td>
                      <td><span className={f.status === 'Active' ? 'badge-ok' : 'badge-warn'}>{f.status}</span></td>
                      <td><button className="ap-act-btn" onClick={() => alert(`View: ${f.name}\nEmp ID: ${f.empId}\nPassword: ${f.password}`)}>View</button><button className="ap-act-btn red" onClick={() => { if(window.confirm(`Delete ${f.name}?`)) setFacultyData(facultyData.filter(fc => fc.id !== f.id)); }}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ADMISSIONS */}
        {page === 'admissions' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Admission Management</h2>
            <div className="ap-adm-stats">
              <div className="ap-adm-card"><h4>320</h4><p>Total Applications</p></div>
              <div className="ap-adm-card green"><h4>210</h4><p>Approved</p></div>
              <div className="ap-adm-card yellow"><h4>85</h4><p>Pending</p></div>
              <div className="ap-adm-card red"><h4>25</h4><p>Rejected</p></div>
            </div>
            <div className="ap-controls"><input placeholder="🔍 Search applications..." /><select><option>All Status</option><option>Pending</option><option>Approved</option><option>Rejected</option></select></div>
            <div className="ap-table-wrap">
              <table className="ap-table">
                <thead><tr><th>#</th><th>App. ID</th><th>Name</th><th>Course</th><th>Date</th><th>Score</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {[['APP-001', 'Arun Kumar', 'B.E. CSE', 'Jun 1', '185/200', 'Approved'],
                    ['APP-002', 'Meena Raj', 'B.E. ECE', 'Jun 2', '172/200', 'Pending'],
                    ['APP-003', 'Vijay S.', 'B.E. Mech', 'Jun 3', '168/200', 'Approved'],
                    ['APP-004', 'Lakshmi P.', 'B.E. Civil', 'Jun 3', '145/200', 'Pending'],
                    ['APP-005', 'Suresh M.', 'B.E. IT', 'Jun 4', '120/200', 'Rejected'],
                  ].map(([id, name, course, date, score, status], i) => (
                    <tr key={id}><td>{i + 1}</td><td>{id}</td><td>{name}</td><td>{course}</td><td>{date}</td><td>{score}</td>
                      <td><span className={status === 'Approved' ? 'badge-ok' : status === 'Pending' ? 'badge-warn' : 'badge-low'}>{status}</span></td>
                      <td><button className="ap-act-btn">{status === 'Pending' ? 'Review' : 'View'}</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DEPARTMENTS */}
        {page === 'departments' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Department Management</h2>
            <div className="ap-dept-grid">
              {[['💻', 'Computer Science', 'Dr. Ramesh Kumar', '60 Faculty', '1200 Students', '8 Courses'],
                ['📡', 'Electronics & Comm.', 'Dr. Anand Rajan', '45 Faculty', '980 Students', '7 Courses'],
                ['⚙️', 'Mechanical Engg.', 'Prof. Kumar S.', '40 Faculty', '850 Students', '6 Courses'],
                ['🏗️', 'Civil Engineering', 'Dr. Meena T.', '35 Faculty', '720 Students', '6 Courses'],
                ['🌐', 'Information Technology', 'Dr. Priya Nair', '30 Faculty', '650 Students', '6 Courses'],
                ['🧬', 'Biotechnology', 'Dr. Lakshmi V.', '25 Faculty', '420 Students', '5 Courses'],
              ].map(([icon, name, hod, f, s, c]) => (
                <div className="ap-dept-card" key={name}>
                  <div className="ap-dept-icon">{icon}</div>
                  <h4>{name}</h4>
                  <p>HOD: {hod}</p>
                  <div className="ap-dept-meta"><span>{f}</span><span>{s}</span><span>{c}</span></div>
                  <button className="ap-act-btn">Manage</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COURSES */}
        {page === 'courses' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Course Management</h2>
            <div className="ap-controls"><input placeholder="🔍 Search courses..." /><button className="ap-btn" onClick={() => alert('Add Course form coming soon.')}>+ Add Course</button></div>
            <div className="ap-table-wrap">
              <table className="ap-table">
                <thead><tr><th>#</th><th>Code</th><th>Course Name</th><th>Dept.</th><th>Credits</th><th>Semester</th><th>Faculty</th><th>Action</th></tr></thead>
                <tbody>
                  {[['CS501', 'Data Structures', 'CSE', 4, 5, 'Dr. Ramesh'],
                    ['CS502', 'Operating Systems', 'CSE', 4, 5, 'Dr. Anand'],
                    ['CS503', 'DBMS', 'CSE', 4, 5, 'Dr. Priya'],
                    ['CS504', 'Computer Networks', 'CSE', 3, 5, 'Dr. Kumar'],
                    ['EC501', 'VLSI Design', 'ECE', 4, 5, 'Dr. Rajan'],
                    ['ME501', 'Thermal Engineering', 'Mech', 4, 5, 'Prof. Kumar'],
                  ].map(([code, name, dept, credits, sem, faculty], i) => (
                    <tr key={code}><td>{i + 1}</td><td>{code}</td><td>{name}</td><td>{dept}</td><td>{credits}</td><td>{sem}</td><td>{faculty}</td>
                      <td><button className="ap-act-btn">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FEES */}
        {page === 'fees' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Fee Management</h2>
            <div className="ap-adm-stats">
              <div className="ap-adm-card green"><h4>₹42,00,000</h4><p>Total Collected</p></div>
              <div className="ap-adm-card yellow"><h4>₹8,50,000</h4><p>Pending</p></div>
              <div className="ap-adm-card"><h4>₹50,50,000</h4><p>Total Expected</p></div>
              <div className="ap-adm-card red"><h4>128</h4><p>Defaulters</p></div>
            </div>
            <div className="ap-controls"><input placeholder="🔍 Search by student name or roll no..." /><select><option>All Departments</option><option>CSE</option><option>ECE</option><option>Mech</option></select><select><option>All Status</option><option>Paid</option><option>Pending</option><option>Partial</option></select></div>
            <div className="ap-table-wrap">
              <table className="ap-table">
                <thead><tr><th>#</th><th>Roll No.</th><th>Name</th><th>Dept.</th><th>Total Fee</th><th>Paid</th><th>Due</th><th>Status</th></tr></thead>
                <tbody>
                  {[['21CS001', 'Arjun Ramesh', 'CSE', '₹57,500', '₹45,000', '₹12,500', 'Partial'],
                    ['21CS002', 'Priya Lakshmi', 'CSE', '₹57,500', '₹57,500', '₹0', 'Paid'],
                    ['21EC001', 'Rahul Sharma', 'ECE', '₹57,500', '₹57,500', '₹0', 'Paid'],
                    ['21ME001', 'Sneha Patel', 'Mech', '₹57,500', '₹25,000', '₹32,500', 'Pending'],
                    ['21CV001', 'Karthik Raj', 'Civil', '₹57,500', '₹57,500', '₹0', 'Paid'],
                  ].map(([roll, name, dept, total, paid, due, status], i) => (
                    <tr key={roll}><td>{i + 1}</td><td>{roll}</td><td>{name}</td><td>{dept}</td><td>{total}</td><td>{paid}</td><td>{due}</td>
                      <td><span className={status === 'Paid' ? 'badge-ok' : status === 'Partial' ? 'badge-warn' : 'badge-low'}>{status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REPORTS */}
        {page === 'reports' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Reports</h2>
            <div className="ap-report-grid">
              {[['📋', 'Attendance Report', 'Department-wise and student-wise attendance summary'],
                ['📊', 'Marks Report', 'Internal assessment and semester results summary'],
                ['💳', 'Fee Collection Report', 'Fee payment status and defaulters list'],
                ['📝', 'Admission Report', 'Applications received, approved and rejected summary'],
                ['🏢', 'Placement Report', 'Campus recruitment and placement statistics'],
                ['👨🏫', 'Faculty Report', 'Faculty performance and workload summary'],
              ].map(([icon, title, desc]) => (
                <div className="ap-report-card" key={title} onClick={() => alert(`${title} generated successfully!\n\n(In production, this would download a PDF/Excel report.)`)}>
                  <div className="ap-ri">{icon}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <button className="ap-btn">Generate</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {page === 'settings' && (
          <div className="ap-page active">
            <h2 className="ap-page-title">Settings</h2>
            <div className="ap-settings-grid">
              <div className="ap-settings-box">
                <h4>College Information</h4>
                {[['College Name', 'text', 'Best Engineering College'], ['Affiliation', 'text', 'Anna University, Chennai'], ['NAAC Grade', 'text', 'A Grade'], ['Contact Email', 'text', 'info@bec.edu.in'], ['Phone', 'text', '+91 98765 43210']].map(([label, type, val]) => (
                  <div className="ap-form-group" key={label}><label>{label}</label><input type={type} defaultValue={val} style={inp} /></div>
                ))}
                <button className="ap-btn" onClick={() => alert('Settings saved!')}>💾 Save Changes</button>
              </div>
              <div className="ap-settings-box">
                <h4>Academic Settings</h4>
                <div className="ap-form-group"><label>Current Academic Year</label><input type="text" defaultValue="2025–2026" style={inp} /></div>
                <div className="ap-form-group"><label>Current Semester</label><select style={inp}><option>Odd Semester</option><option>Even Semester</option></select></div>
                <div className="ap-form-group"><label>Semester Start Date</label><input type="date" defaultValue="2025-07-01" style={inp} /></div>
                <div className="ap-form-group"><label>Semester End Date</label><input type="date" defaultValue="2025-11-30" style={inp} /></div>
                <div className="ap-form-group"><label>Min. Attendance %</label><input type="number" defaultValue={75} style={inp} /></div>
                <button className="ap-btn" onClick={() => alert('Academic settings saved!')}>💾 Save Changes</button>
              </div>
              <div className="ap-settings-box">
                <h4>Change Admin Password</h4>
                {[['Current Password', 'password', 'Enter current password'], ['New Password', 'password', 'Enter new password'], ['Confirm Password', 'password', 'Confirm new password']].map(([label, type, ph]) => (
                  <div className="ap-form-group" key={label}><label>{label}</label><input type={type} placeholder={ph} style={inp} /></div>
                ))}
                <button className="ap-btn" onClick={() => alert('Password updated!')}>🔒 Update Password</button>
              </div>
              <div className="ap-settings-box">
                <h4>System Preferences</h4>
                {[['Email Notifications', true], ['SMS Alerts', false], ['Maintenance Mode', false], ['Auto Fee Reminders', true], ['Show Notifications', true]].map(([label, checked]) => (
                  <div className="ap-toggle-row" key={label}>
                    <span>{label}</span>
                    <label className="ap-toggle"><input type="checkbox" defaultChecked={checked} /><span className="ap-slider"></span></label>
                  </div>
                ))}
                <button className="ap-btn" style={{ marginTop: '16px' }} onClick={() => alert('Preferences saved!')}>💾 Save Preferences</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ADD MODAL */}
      {modal.open && (
        <div className="ap-modal open" onClick={e => e.target.className.includes('ap-modal open') && setModal({ open: false, type: '' })}>
          <div className="ap-modal-box">
            <div className="ap-modal-head">
              <h4>{modal.type === 'student' ? 'Add New Student' : 'Add New Faculty'}</h4>
              <button onClick={() => setModal({ open: false, type: '' })}>✕</button>
            </div>
            <div>
              {modal.type === 'student' ? (
                <>
                  <div className="ap-form-group"><label>Full Name</label><input type="text" placeholder="Student name" style={inp} value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} /></div>
                  <div className="ap-form-group"><label>Roll Number</label><input type="text" placeholder="e.g. 21CS007" style={inp} value={newStudent.roll} onChange={e => setNewStudent({...newStudent, roll: e.target.value})} /></div>
                  <div className="ap-form-group"><label>Department</label><select style={inp} value={newStudent.dept} onChange={e => setNewStudent({...newStudent, dept: e.target.value})}><option>CSE</option><option>ECE</option><option>Mech</option><option>Civil</option><option>IT</option></select></div>
                  <div className="ap-form-group"><label>Semester</label><input type="number" placeholder="1-8" style={inp} value={newStudent.sem} onChange={e => setNewStudent({...newStudent, sem: parseInt(e.target.value)})} /></div>
                  <div className="ap-form-group"><label>Email</label><input type="text" placeholder="student@bec.edu.in" style={inp} value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} /></div>
                  <div className="ap-form-group"><label>Password (for login)</label><input type="text" placeholder="Create password" style={inp} value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} /></div>
                </>
              ) : (
                <>
                  <div className="ap-form-group"><label>Full Name</label><input type="text" placeholder="Faculty name" style={inp} value={newFaculty.name} onChange={e => setNewFaculty({...newFaculty, name: e.target.value})} /></div>
                  <div className="ap-form-group"><label>Employee ID</label><input type="text" placeholder="FAC-CSE-00X" style={inp} value={newFaculty.empId} onChange={e => setNewFaculty({...newFaculty, empId: e.target.value})} /></div>
                  <div className="ap-form-group"><label>Department</label><select style={inp} value={newFaculty.dept} onChange={e => setNewFaculty({...newFaculty, dept: e.target.value})}><option>CSE</option><option>ECE</option><option>Mech</option><option>Civil</option><option>IT</option></select></div>
                  <div className="ap-form-group"><label>Designation</label><select style={inp} value={newFaculty.designation} onChange={e => setNewFaculty({...newFaculty, designation: e.target.value})}><option>Professor</option><option>Assoc. Professor</option><option>Asst. Professor</option></select></div>
                  <div className="ap-form-group"><label>Email</label><input type="text" placeholder="faculty@bec.edu.in" style={inp} value={newFaculty.email} onChange={e => setNewFaculty({...newFaculty, email: e.target.value})} /></div>
                  <div className="ap-form-group"><label>Password (for login)</label><input type="text" placeholder="Create password" style={inp} value={newFaculty.password} onChange={e => setNewFaculty({...newFaculty, password: e.target.value})} /></div>
                </>
              )}
              <button className="ap-btn" style={{ width: '100%', marginTop: '6px' }} onClick={() => {
                if (modal.type === 'student') {
                  if (!newStudent.name || !newStudent.roll || !newStudent.email || !newStudent.password) {
                    alert('Please fill all fields!');
                    return;
                  }
                  const newStu = { id: stuData.length + 1, ...newStudent, status: 'Active' };
                  setStuData([...stuData, newStu]);
                  setNewStudent({ name: '', roll: '', dept: 'CSE', email: '', password: '', sem: 1 });
                  alert('Student added successfully!');
                } else {
                  if (!newFaculty.name || !newFaculty.empId || !newFaculty.email || !newFaculty.password) {
                    alert('Please fill all fields!');
                    return;
                  }
                  const newFac = { id: facultyData.length + 1, ...newFaculty, status: 'Active' };
                  setFacultyData([...facultyData, newFac]);
                  setNewFaculty({ name: '', empId: '', dept: 'CSE', designation: 'Asst. Professor', email: '', password: '' });
                  alert('Faculty added successfully!');
                }
                setModal({ open: false, type: '' });
              }}>+ Add {modal.type === 'student' ? 'Student' : 'Faculty'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPortalPage;

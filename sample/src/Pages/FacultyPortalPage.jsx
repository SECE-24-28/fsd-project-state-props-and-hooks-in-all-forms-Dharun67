import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clgLogo from '../Assets/Images/CLGLOGO.png';
import '../Assets/Css/faculty-portal.css';

const students = [
  { roll: '21CS001', name: 'Arjun Ramesh', cls: '21CS-A', att: '87%', ia: '22/25', status: 'Active' },
  { roll: '21CS002', name: 'Priya Lakshmi', cls: '21CS-A', att: '92%', ia: '20/25', status: 'Active' },
  { roll: '21CS003', name: 'Rahul Sharma', cls: '21CS-A', att: '74%', ia: '18/25', status: 'Low Att.' },
  { roll: '21CS004', name: 'Sneha Patel', cls: '21CS-B', att: '95%', ia: '23/25', status: 'Active' },
  { roll: '21CS005', name: 'Karthik Raj', cls: '21CS-B', att: '68%', ia: '15/25', status: 'At Risk' },
  { roll: '21CS006', name: 'Divya Menon', cls: '21CS-B', att: '88%', ia: '19/25', status: 'Active' },
];

const marks = [
  { roll: '21CS001', name: 'Arjun Ramesh', marks: 22 },
  { roll: '21CS002', name: 'Priya Lakshmi', marks: 20 },
  { roll: '21CS003', name: 'Rahul Sharma', marks: 18 },
  { roll: '21CS004', name: 'Sneha Patel', marks: 23 },
  { roll: '21CS005', name: 'Karthik Raj', marks: 15 },
  { roll: '21CS006', name: 'Divya Menon', marks: 19 },
];

const navLinks = [
  ['dashboard', '🏠 Dashboard'], ['profile', '👤 My Profile'], ['attendance', '📋 Attendance Mgmt'],
  ['marks', '📊 Marks Entry'], ['students', '👥 Student List'], ['assignments', '📝 Assignment Upload'],
  ['courses', '📚 My Courses'], ['communicate', '💬 Communication'],
];

const titles = { dashboard: 'Dashboard', profile: 'My Profile', attendance: 'Attendance Management', marks: 'Marks Entry', students: 'Student List', assignments: 'Assignment Upload', courses: 'My Courses', communicate: 'Student Communication' };

function getGrade(val, max = 25) {
  const p = (val / max) * 100;
  return p >= 90 ? 'A+' : p >= 80 ? 'A' : p >= 70 ? 'B+' : p >= 60 ? 'B' : p >= 50 ? 'C' : 'F';
}

function FacultyPortalPage() {
  const [page, setPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [marksData, setMarksData] = useState(marks);
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [facultyData, setFacultyData] = useState(null);
  const [assignments, setAssignments] = useState([
    { title: 'Binary Tree Implementation', course: 'Data Structures — 21CS-A', due: 'June 10', status: 'Active' },
    { title: 'Sorting Algorithm Analysis', course: 'Data Structures — 21CS-B', due: 'June 8', status: 'Active' },
    { title: 'Linked List Lab Program', course: 'DS Lab — 21CS-A', due: 'May 30', status: 'Closed' },
  ]);
  const [assignForm, setAssignForm] = useState({ title: '', course: 'Data Structures — 21CS-A', desc: '', due: '', max: 10 });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedFaculty = localStorage.getItem('bec_faculty_logged');
    if (!loggedFaculty) {
      navigate('/faculty-login');
    } else {
      setFacultyData(JSON.parse(loggedFaculty));
    }
  }, [navigate]);

  const filteredStudents = students.filter(s => {
    const q = search.toLowerCase();
    return (!q || s.name.toLowerCase().includes(q) || s.roll.toLowerCase().includes(q)) && (!classFilter || s.cls === classFilter);
  });

  const handleUpload = (e) => {
    e.preventDefault();
    if (!assignForm.title || !assignForm.due) { alert('Please fill title and due date.'); return; }
    setAssignments(prev => [{ title: assignForm.title, course: assignForm.course, due: assignForm.due, status: 'Active' }, ...prev]);
    setAssignForm({ title: '', course: 'Data Structures — 21CS-A', desc: '', due: '', max: 10 });
  };

  const handleLogout = () => {
    localStorage.removeItem('bec_faculty_logged');
    navigate('/portal');
  };

  if (!facultyData) return null;

  const facultyName = facultyData.name || 'Dr. Faculty';
  const facultyEmpId = facultyData.empId || 'FAC-001';
  const facultyDept = facultyData.dept || 'CSE';
  const facultyDesignation = facultyData.designation || 'Professor';
  const facultyEmail = facultyData.email || 'faculty@bec.edu.in';
  const initials = facultyName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  const inp = { padding: '10px 16px', border: '1.5px solid #e0e0e0', borderRadius: '35px', fontSize: '13px', fontFamily: "'Poppins',sans-serif", outline: 'none', background: '#fafafa', width: '100%', boxSizing: 'border-box' };

  return (
    <div className="fp-layout">
      <div className={`fp-sidebar${sidebarOpen ? '' : ' closed'}`}>
        <div className="fp-logo">
          <img src={clgLogo} alt="BEC" />
          <div><h3>BEC Portal</h3><span>Faculty</span></div>
        </div>
        <nav className="fp-nav">
          {navLinks.map(([key, label]) => (
            <span key={key} className={`fp-link${page === key ? ' active' : ''}`} onClick={() => setPage(key)}>{label}</span>
          ))}
        </nav>
        <span className="fp-logout" onClick={handleLogout}>🚪 Logout</span>
      </div>

      <div className={`fp-main${sidebarOpen ? '' : ' full'}`}>
        <div className="fp-topbar">
          <button className="fp-menu-btn" onClick={() => setSidebarOpen(o => !o)}>☰</button>
          <div className="fp-topbar-title">{titles[page]}</div>
          <div className="fp-topbar-right">
            <span className="fp-notif">🔔</span>
            <div className="fp-user"><div className="fp-avatar">{initials}</div><span>{facultyName.split(' ')[0]}</span></div>
          </div>
        </div>

        {/* DASHBOARD */}
        {page === 'dashboard' && (
          <div className="fp-page active">
            <div className="fp-welcome">
              <div><h2>Good Morning, {facultyName.split(' ').slice(0, 2).join(' ')}! 👋</h2><p>Here's your teaching overview for this semester.</p></div>
              <span className="fp-sem-badge">Semester 5 | {facultyDept} Dept.</span>
            </div>
            <div className="fp-stats">
              {[['👥', '120', 'Total Students'], ['📚', '3', 'Courses Assigned'], ['📋', '18', 'Classes This Week'], ['📝', '5', 'Pending Evaluations']].map(([icon, val, label]) => (
                <div className="fp-stat-card" key={label}><div className="fp-stat-icon">{icon}</div><div><h3>{val}</h3><p>{label}</p></div></div>
              ))}
            </div>
            <div className="fp-dash-row">
              <div className="fp-dash-box">
                <h4>Today's Schedule</h4>
                {[['9:00 AM', 'Data Structures — 21CS-A', 'Room 301'], ['11:00 AM', 'Data Structures — 21CS-B', 'Room 204'], ['2:00 PM', 'DS Lab — 21CS-A', 'Lab 101'], ['4:00 PM', 'Staff Meeting', 'Conf. Room']].map(([t, s, r]) => (
                  <div className="fp-today-item" key={t}><span className="fp-time">{t}</span><span className="fp-subj">{s}</span><span className="fp-room">{r}</span></div>
                ))}
              </div>
              <div className="fp-dash-box">
                <h4>Quick Actions</h4>
                <div className="fp-quick-actions">
                  {[['attendance', '📋 Mark Attendance'], ['marks', '📊 Enter Marks'], ['assignments', '📝 Upload Assignment'], ['students', '👥 View Students']].map(([key, label]) => (
                    <button key={key} className="fp-qa-btn" onClick={() => setPage(key)}>{label}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {page === 'profile' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">My Profile</h2>
            <div className="fp-profile-card">
              <div className="fp-profile-left">
                <div className="fp-profile-avatar">{initials}</div>
                <h3>{facultyName}</h3>
                <span>{facultyEmpId}</span>
                <span className="fp-dept-tag">{facultyDept === 'CSE' ? 'Computer Science & Engg.' : facultyDept === 'ECE' ? 'Electronics & Comm.' : facultyDept === 'Mech' ? 'Mechanical Engg.' : facultyDept === 'Civil' ? 'Civil Engg.' : 'Information Technology'}</span>
              </div>
              <div className="fp-profile-right">
                <div className="fp-profile-grid">
                  {[['Full Name', facultyName], ['Employee ID', facultyEmpId], ['Department', facultyDept === 'CSE' ? 'Computer Science & Engineering' : facultyDept], ['Designation', facultyDesignation], ['Qualification', 'Ph.D'], ['Experience', '12 Years'], ['Email', facultyEmail], ['Phone', '+91 98765 11111'], ['Specialization', 'Algorithms & Data Structures'], ['Joining Date', 'June 1, 2013']].map(([l, v]) => (
                    <div className="fp-pfield" key={l}><label>{l}</label><p>{v}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATTENDANCE */}
        {page === 'attendance' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">Attendance Management</h2>
            <div className="fp-att-controls">
              <div className="fp-form-group"><label>Select Course</label><select style={inp}><option>Data Structures — 21CS-A</option><option>Data Structures — 21CS-B</option><option>DS Lab — 21CS-A</option></select></div>
              <div className="fp-form-group"><label>Date</label><input type="date" style={inp} defaultValue={new Date().toISOString().split('T')[0]} /></div>
              <button className="fp-btn-green" onClick={() => alert('Attendance saved successfully!')}>💾 Save Attendance</button>
            </div>
            <div className="fp-table-wrap">
              <table className="fp-table">
                <thead><tr><th>#</th><th>Roll No.</th><th>Student Name</th><th>Present</th><th>Absent</th></tr></thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={s.roll}>
                      <td>{i + 1}</td><td>{s.roll}</td><td>{s.name}</td>
                      <td><label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}><input type="radio" name={`att${i}`} defaultChecked style={{ accentColor: '#4caf7d' }} /> Present</label></td>
                      <td><label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}><input type="radio" name={`att${i}`} style={{ accentColor: '#c62828' }} /> Absent</label></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MARKS */}
        {page === 'marks' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">Marks Entry</h2>
            <div className="fp-att-controls">
              <div className="fp-form-group"><label>Select Course</label><select style={inp}><option>Data Structures — 21CS-A</option><option>Data Structures — 21CS-B</option></select></div>
              <div className="fp-form-group"><label>Assessment</label><select style={inp}><option>Internal Assessment 1</option><option>Internal Assessment 2</option><option>Assignment</option></select></div>
              <div className="fp-form-group"><label>Max Marks</label><input type="number" style={inp} defaultValue={25} /></div>
              <button className="fp-btn-green" onClick={() => alert('Marks saved successfully!')}>💾 Save Marks</button>
            </div>
            <div className="fp-table-wrap">
              <table className="fp-table">
                <thead><tr><th>#</th><th>Roll No.</th><th>Student Name</th><th>Marks Obtained</th><th>Grade</th></tr></thead>
                <tbody>
                  {marksData.map((s, i) => (
                    <tr key={s.roll}>
                      <td>{i + 1}</td><td>{s.roll}</td><td>{s.name}</td>
                      <td><input className="fp-marks-input" type="number" value={s.marks} min={0} max={25} onChange={e => setMarksData(prev => prev.map((m, j) => j === i ? { ...m, marks: parseInt(e.target.value) || 0 } : m))} /></td>
                      <td><span className="badge-ok">{getGrade(s.marks)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* STUDENTS */}
        {page === 'students' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">Student List</h2>
            <div className="fp-student-controls">
              <input placeholder="🔍 Search by name or roll no..." value={search} onChange={e => setSearch(e.target.value)} />
              <select value={classFilter} onChange={e => setClassFilter(e.target.value)}>
                <option value="">All Classes</option><option value="21CS-A">21CS-A</option><option value="21CS-B">21CS-B</option>
              </select>
            </div>
            <div className="fp-table-wrap">
              <table className="fp-table">
                <thead><tr><th>#</th><th>Roll No.</th><th>Name</th><th>Class</th><th>Attendance %</th><th>IA Avg</th><th>Status</th></tr></thead>
                <tbody>
                  {filteredStudents.map((s, i) => (
                    <tr key={s.roll}><td>{i + 1}</td><td>{s.roll}</td><td>{s.name}</td><td>{s.cls}</td><td>{s.att}</td><td>{s.ia}</td>
                      <td><span className={s.status === 'Active' ? 'badge-ok' : s.status === 'Low Att.' ? 'badge-warn' : 'badge-low'}>{s.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ASSIGNMENTS */}
        {page === 'assignments' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">Assignment Upload</h2>
            <div className="fp-assign-wrap">
              <div className="fp-assign-form-box">
                <h4>Upload New Assignment</h4>
                <form onSubmit={handleUpload}>
                  <div className="fp-form-group" style={{ marginBottom: '14px' }}><label>Title</label><input style={inp} value={assignForm.title} onChange={e => setAssignForm(f => ({ ...f, title: e.target.value }))} placeholder="Assignment title" /></div>
                  <div className="fp-form-group" style={{ marginBottom: '14px' }}><label>Course</label><select style={inp} value={assignForm.course} onChange={e => setAssignForm(f => ({ ...f, course: e.target.value }))}><option>Data Structures — 21CS-A</option><option>Data Structures — 21CS-B</option><option>DS Lab — 21CS-A</option></select></div>
                  <div className="fp-form-group" style={{ marginBottom: '14px' }}><label>Description</label><textarea style={{ ...inp, borderRadius: '16px', resize: 'vertical' }} rows={3} value={assignForm.desc} onChange={e => setAssignForm(f => ({ ...f, desc: e.target.value }))} placeholder="Describe the assignment..." /></div>
                  <div className="fp-form-row" style={{ marginBottom: '14px' }}>
                    <div className="fp-form-group"><label>Due Date</label><input type="date" style={inp} value={assignForm.due} onChange={e => setAssignForm(f => ({ ...f, due: e.target.value }))} /></div>
                    <div className="fp-form-group"><label>Max Marks</label><input type="number" style={inp} value={assignForm.max} onChange={e => setAssignForm(f => ({ ...f, max: e.target.value }))} /></div>
                  </div>
                  <button type="submit" className="fp-btn-green">📤 Upload Assignment</button>
                </form>
              </div>
              <div className="fp-assign-list-box">
                <h4>Uploaded Assignments</h4>
                {assignments.map((a, i) => (
                  <div className="fp-assign-item" key={i}>
                    <div><strong>{a.title}</strong><p>{a.course} &nbsp;|&nbsp; Due: {a.due}</p></div>
                    <span className={a.status === 'Active' ? 'badge-ok' : 'badge-warn'}>{a.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COURSES */}
        {page === 'courses' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">My Courses</h2>
            <div className="fp-courses-grid">
              {[{ icon: '📘', name: 'Data Structures', cls: '21CS-A | Semester 5', students: 60, credits: 4, classes: 24, pct: 75 },
                { icon: '📗', name: 'Data Structures', cls: '21CS-B | Semester 5', students: 60, credits: 4, classes: 22, pct: 68 },
                { icon: '🔬', name: 'DS Lab', cls: '21CS-A | Semester 5', students: 60, credits: 2, classes: 10, pct: 90 }].map(c => (
                <div className="fp-course-card" key={c.cls}>
                  <div className="fp-course-icon">{c.icon}</div>
                  <h4>{c.name}</h4>
                  <p>{c.cls}</p>
                  <div className="fp-course-meta"><span>{c.students} Students</span><span>{c.credits} Credits</span><span>{c.classes} Classes</span></div>
                  <div className="fp-course-progress"><div className="fp-prog-bar" style={{ width: `${c.pct}%` }}></div></div>
                  <small>{c.pct}% syllabus completed</small>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMMUNICATION */}
        {page === 'communicate' && (
          <div className="fp-page active">
            <h2 className="fp-page-title">Student Communication</h2>
            <div className="fp-comm-wrap">
              <div className="fp-comm-form">
                <h4>Send Announcement</h4>
                <div className="fp-form-group" style={{ marginBottom: '14px' }}><label>To</label><select style={inp}><option>All Students — 21CS-A</option><option>All Students — 21CS-B</option><option>All My Students</option></select></div>
                <div className="fp-form-group" style={{ marginBottom: '14px' }}><label>Subject</label><input style={inp} placeholder="Message subject" /></div>
                <div className="fp-form-group" style={{ marginBottom: '14px' }}><label>Message</label><textarea style={{ ...inp, borderRadius: '16px', resize: 'vertical' }} rows={5} placeholder="Type your message..."></textarea></div>
                <button className="fp-btn-green" onClick={() => alert('Message sent successfully!')}>📨 Send Message</button>
              </div>
              <div className="fp-comm-history">
                <h4>Sent Messages</h4>
                <div className="fp-msg-list">
                  {[['IA 2 Reminder', 'Sent to: 21CS-A | June 1, 2025'], ['Assignment 3 Uploaded', 'Sent to: All My Students | May 28, 2025'], ['Low Attendance Warning', 'Sent to: 21CS-B | May 20, 2025']].map(([title, info]) => (
                    <div className="fp-msg-item" key={title}><strong>{title}</strong><p>{info}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FacultyPortalPage;

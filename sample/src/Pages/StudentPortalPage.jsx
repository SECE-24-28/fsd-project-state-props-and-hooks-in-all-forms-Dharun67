import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clgLogo from '../Assets/Images/CLGLOGO.png';
import '../Assets/Css/student-portal.css';

function StudentPortalPage() {
  const [page, setPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [resultTab, setResultTab] = useState('r3');
  const [studentData, setStudentData] = useState(null);
  const [leaveList, setLeaveList] = useState([
    { type: 'Medical Leave', from: 'May 10', to: 'May 12, 2025', reason: 'Fever and cold', status: 'Approved' },
    { type: 'Personal Leave', from: 'Apr 5', to: 'Apr 5, 2025', reason: 'Family function', status: 'Pending' },
  ]);
  const [leaveForm, setLeaveForm] = useState({ type: 'Medical Leave', from: '', to: '', reason: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedStudent = localStorage.getItem('bec_student_logged');
    if (!loggedStudent) {
      navigate('/student-login');
    } else {
      setStudentData(JSON.parse(loggedStudent));
    }
  }, [navigate]);

  const titles = { dashboard: 'Dashboard', profile: 'My Profile', attendance: 'Attendance', marks: 'Internal Marks', results: 'Semester Results', timetable: 'Timetable', assignments: 'Assignments', fee: 'Fee Payment', leave: 'Leave Application', notifications: 'Notifications' };

  const navLinks = [
    ['dashboard', '🏠 Dashboard'], ['profile', '👤 Profile'], ['attendance', '📋 Attendance'],
    ['marks', '📊 Internal Marks'], ['results', '🎓 Results'], ['timetable', '🕐 Timetable'],
    ['assignments', '📝 Assignments'], ['fee', '💳 Fee Payment'], ['leave', '📩 Leave Application'],
    ['notifications', '🔔 Notifications'],
  ];

  const submitLeave = (e) => {
    e.preventDefault();
    if (!leaveForm.from || !leaveForm.to || !leaveForm.reason) { alert('Please fill all fields.'); return; }
    setLeaveList(prev => [{ type: leaveForm.type, from: leaveForm.from, to: leaveForm.to, reason: leaveForm.reason, status: 'Pending' }, ...prev]);
    setLeaveForm({ type: 'Medical Leave', from: '', to: '', reason: '' });
  };

  const handleLogout = () => {
    localStorage.removeItem('bec_student_logged');
    navigate('/portal');
  };

  if (!studentData) return null;

  const studentName = studentData.name || 'Student';
  const studentRoll = studentData.roll || 'N/A';
  const studentDept = studentData.dept || 'CSE';
  const studentSem = studentData.sem || 5;
  const studentEmail = studentData.email || 'student@bec.edu.in';
  const initials = studentName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="sp-layout">
      {/* SIDEBAR */}
      <div className={`sp-sidebar${sidebarOpen ? '' : ' closed'}`}>
        <div className="sp-logo">
          <img src={clgLogo} alt="BEC" />
          <div><h3>BEC Portal</h3><span>Student</span></div>
        </div>
        <nav className="sp-nav">
          {navLinks.map(([key, label]) => (
            <span key={key} className={`sp-link${page === key ? ' active' : ''}`} onClick={() => setPage(key)}>{label}</span>
          ))}
        </nav>
        <span className="sp-logout" onClick={handleLogout}>🚪 Logout</span>
      </div>

      {/* MAIN */}
      <div className={`sp-main${sidebarOpen ? '' : ' full'}`}>
        <div className="sp-topbar">
          <button className="sp-menu-btn" onClick={() => setSidebarOpen(o => !o)}>☰</button>
          <div className="sp-topbar-title">{titles[page]}</div>
          <div className="sp-topbar-right">
            <span className="sp-notif">🔔</span>
            <div className="sp-user"><div className="sp-avatar">{initials}</div><span>{studentName.split(' ')[0]}</span></div>
          </div>
        </div>

        {/* DASHBOARD */}
        {page === 'dashboard' && (
          <div className="sp-page active">
            <div className="sp-welcome">
              <div><h2>Welcome back, {studentName.split(' ')[0]}! 👋</h2><p>Here's your academic overview for this semester.</p></div>
              <span className="sp-sem-badge">Semester {studentSem} | {studentDept}</span>
            </div>
            <div className="sp-stats">
              {[['📋', '82%', 'Attendance'], ['📊', '74/100', 'Avg. Internal Marks'], ['📝', '3', 'Pending Assignments'], ['💳', '₹12,500', 'Fee Due']].map(([icon, val, label]) => (
                <div className="sp-stat-card" key={label}><div className="sp-stat-icon">{icon}</div><div><h3>{val}</h3><p>{label}</p></div></div>
              ))}
            </div>
            <div className="sp-dash-row">
              <div className="sp-dash-box">
                <h4>Today's Classes</h4>
                {[['9:00 AM', 'Data Structures', 'Room 301'], ['11:00 AM', 'Operating Systems', 'Room 204'], ['2:00 PM', 'DBMS Lab', 'Lab 102'], ['4:00 PM', 'Computer Networks', 'Room 301']].map(([t, s, r]) => (
                  <div className="sp-today-item" key={t}><span className="sp-time">{t}</span><span className="sp-subj">{s}</span><span className="sp-room">{r}</span></div>
                ))}
              </div>
              <div className="sp-dash-box">
                <h4>Recent Notifications</h4>
                <div className="sp-notif-item new"><span>📢</span><p>Internal Assessment 2 scheduled on June 15</p></div>
                <div className="sp-notif-item"><span>📋</span><p>Attendance updated for May 2025</p></div>
                <div className="sp-notif-item"><span>📝</span><p>Assignment 3 uploaded by Dr. Priya</p></div>
                <div className="sp-notif-item"><span>💳</span><p>Fee payment reminder — due June 30</p></div>
              </div>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {page === 'profile' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">My Profile</h2>
            <div className="sp-profile-card">
              <div className="sp-profile-left">
                <div className="sp-profile-avatar">{initials}</div>
                <h3>{studentName}</h3>
                <span>{studentRoll}</span>
                <span className="sp-dept-tag">B.E. {studentDept === 'CSE' ? 'Computer Science' : studentDept === 'ECE' ? 'Electronics & Communication' : studentDept === 'Mech' ? 'Mechanical Engineering' : studentDept === 'Civil' ? 'Civil Engineering' : 'Information Technology'}</span>
              </div>
              <div className="sp-profile-right">
                <div className="sp-profile-grid">
                  {[['Full Name', studentName], ['Roll Number', studentRoll], ['Department', studentDept === 'CSE' ? 'Computer Science & Engineering' : studentDept], ['Semester', `${studentSem}th Semester`], ['Batch', '2021 - 2025'], ['Date of Birth', '15 March 2003'], ['Email', studentEmail], ['Phone', '+91 98765 43210'], ['Parent Name', 'Parent Name'], ['Parent Phone', '+91 98765 00001'], ['Address', '12, Anna Nagar, Chennai - 600 040'], ['Blood Group', 'O+']].map(([label, val]) => (
                    <div className="sp-pfield" key={label}><label>{label}</label><p>{val}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATTENDANCE */}
        {page === 'attendance' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Attendance</h2>
            <div className="sp-att-summary">
              <div className="sp-att-circle">
                <svg viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#c9a84c" strokeWidth="3" strokeDasharray="82, 100" />
                </svg>
                <div className="sp-att-pct">82%</div>
              </div>
              <div className="sp-att-info">
                <h3>Overall Attendance: 82%</h3>
                <p>Total Classes: 120 &nbsp;|&nbsp; Present: 98 &nbsp;|&nbsp; Absent: 22</p>
                <span className="sp-att-status ok">✔ Above 75% — Eligible for Exam</span>
              </div>
            </div>
            <div className="sp-table-wrap">
              <table className="sp-table">
                <thead><tr><th>Subject</th><th>Total</th><th>Present</th><th>Absent</th><th>%</th><th>Status</th></tr></thead>
                <tbody>
                  {[['Data Structures', 24, 21, 3, '87%', 'Good'], ['Operating Systems', 22, 18, 4, '81%', 'Good'], ['DBMS', 20, 16, 4, '80%', 'Good'], ['Computer Networks', 24, 18, 6, '75%', 'Average'], ['Software Engineering', 20, 14, 6, '70%', 'Low'], ['DBMS Lab', 10, 10, 0, '100%', 'Excellent']].map(([sub, tot, pre, abs, pct, status]) => (
                    <tr key={sub}><td>{sub}</td><td>{tot}</td><td>{pre}</td><td>{abs}</td><td>{pct}</td><td><span className={status === 'Low' ? 'badge-low' : status === 'Average' ? 'badge-warn' : 'badge-ok'}>{status}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MARKS */}
        {page === 'marks' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Internal Marks</h2>
            <div className="sp-table-wrap">
              <table className="sp-table">
                <thead><tr><th>Subject</th><th>IA 1 (25)</th><th>IA 2 (25)</th><th>Assignment (10)</th><th>Total (60)</th><th>Grade</th></tr></thead>
                <tbody>
                  {[['Data Structures', 22, 20, 9, 51, 'A'], ['Operating Systems', 18, 19, 8, 45, 'B+'], ['DBMS', 20, 21, 10, 51, 'A'], ['Computer Networks', 15, 17, 7, 39, 'B'], ['Software Engineering', 16, 18, 8, 42, 'B']].map(([sub, ia1, ia2, asgn, tot, grade]) => (
                    <tr key={sub}><td>{sub}</td><td>{ia1}</td><td>{ia2}</td><td>{asgn}</td><td>{tot}</td><td><span className={['A', 'A+'].includes(grade) ? 'badge-ok' : 'badge-warn'}>{grade}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* RESULTS */}
        {page === 'results' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Semester Results</h2>
            <div className="sp-results-tabs">
              {[['r3', 'Sem 3'], ['r4', 'Sem 4']].map(([key, label]) => (
                <button key={key} className={`sp-rtab${resultTab === key ? ' active' : ''}`} onClick={() => setResultTab(key)}>{label}</button>
              ))}
            </div>
            {resultTab === 'r3' && (
              <div className="sp-result-block active">
                <div className="sp-result-summary"><span>GPA: <strong>8.2</strong></span><span>Result: <strong className="badge-ok">Pass</strong></span><span>Arrears: <strong>0</strong></span></div>
                <div className="sp-table-wrap"><table className="sp-table"><thead><tr><th>Subject</th><th>Credits</th><th>Grade</th><th>Points</th></tr></thead><tbody>{[['Data Structures', 4, 'A', 9], ['Computer Architecture', 3, 'B+', 8], ['Discrete Mathematics', 4, 'A+', 10], ['OOP with Java', 3, 'A', 9], ['Digital Electronics', 3, 'B', 7]].map(([s, c, g, p]) => <tr key={s}><td>{s}</td><td>{c}</td><td>{g}</td><td>{p}</td></tr>)}</tbody></table></div>
              </div>
            )}
            {resultTab === 'r4' && (
              <div className="sp-result-block active">
                <div className="sp-result-summary"><span>GPA: <strong>8.5</strong></span><span>Result: <strong className="badge-ok">Pass</strong></span><span>Arrears: <strong>0</strong></span></div>
                <div className="sp-table-wrap"><table className="sp-table"><thead><tr><th>Subject</th><th>Credits</th><th>Grade</th><th>Points</th></tr></thead><tbody>{[['Operating Systems', 4, 'A', 9], ['DBMS', 4, 'A+', 10], ['Computer Networks', 3, 'B+', 8], ['Software Engineering', 3, 'A', 9], ['Web Technology', 3, 'A', 9]].map(([s, c, g, p]) => <tr key={s}><td>{s}</td><td>{c}</td><td>{g}</td><td>{p}</td></tr>)}</tbody></table></div>
              </div>
            )}
          </div>
        )}

        {/* TIMETABLE */}
        {page === 'timetable' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Timetable — Semester 5</h2>
            <div className="sp-table-wrap">
              <table className="sp-table sp-tt">
                <thead><tr><th>Day</th><th>9–10</th><th>10–11</th><th>11–12</th><th>12–1</th><th>2–3</th><th>3–4</th><th>4–5</th></tr></thead>
                <tbody>
                  <tr><td><strong>Mon</strong></td><td><span className="tt-sub">DS</span></td><td><span className="tt-sub">OS</span></td><td><span className="tt-free">—</span></td><td><span className="tt-break">Lunch</span></td><td><span className="tt-sub">CN</span></td><td><span className="tt-sub">SE</span></td><td><span className="tt-free">—</span></td></tr>
                  <tr><td><strong>Tue</strong></td><td><span className="tt-sub">DBMS</span></td><td><span className="tt-free">—</span></td><td><span className="tt-sub">DS</span></td><td><span className="tt-break">Lunch</span></td><td><span className="tt-lab">DBMS Lab</span></td><td><span className="tt-lab">DBMS Lab</span></td><td><span className="tt-lab">DBMS Lab</span></td></tr>
                  <tr><td><strong>Wed</strong></td><td><span className="tt-sub">OS</span></td><td><span className="tt-sub">CN</span></td><td><span className="tt-sub">SE</span></td><td><span className="tt-break">Lunch</span></td><td><span className="tt-sub">DBMS</span></td><td><span className="tt-free">—</span></td><td><span className="tt-free">—</span></td></tr>
                  <tr><td><strong>Thu</strong></td><td><span className="tt-sub">DS</span></td><td><span className="tt-sub">DBMS</span></td><td><span className="tt-free">—</span></td><td><span className="tt-break">Lunch</span></td><td><span className="tt-lab">CN Lab</span></td><td><span className="tt-lab">CN Lab</span></td><td><span className="tt-lab">CN Lab</span></td></tr>
                  <tr><td><strong>Fri</strong></td><td><span className="tt-sub">CN</span></td><td><span className="tt-sub">OS</span></td><td><span className="tt-sub">DS</span></td><td><span className="tt-break">Lunch</span></td><td><span className="tt-sub">SE</span></td><td><span className="tt-sub">DBMS</span></td><td><span className="tt-free">—</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="sp-tt-legend">
              <span className="tt-sub">Theory</span>
              <span className="tt-lab">Lab</span>
              <span className="tt-free">Free</span>
              <span className="tt-break">Break</span>
            </div>
          </div>
        )}

        {/* ASSIGNMENTS */}
        {page === 'assignments' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Assignments</h2>
            <div className="sp-assign-list">
              {[
                { title: 'Binary Tree Implementation', subj: 'Data Structures', faculty: 'Dr. Ramesh', due: 'June 10, 2025', status: 'pending' },
                { title: 'ER Diagram for Library System', subj: 'DBMS', faculty: 'Dr. Priya', due: 'June 12, 2025', status: 'pending' },
                { title: 'TCP/IP Protocol Analysis', subj: 'Computer Networks', faculty: 'Dr. Kumar', due: 'May 28, 2025', status: 'submitted' },
                { title: 'Process Scheduling Algorithms', subj: 'Operating Systems', faculty: 'Dr. Anand', due: 'May 20, 2025', status: 'submitted' },
              ].map(a => (
                <div key={a.title} className={`sp-assign-card ${a.status}`}>
                  <div className="sp-assign-top">
                    <h4>{a.title}</h4>
                    <span className={a.status === 'pending' ? 'badge-low' : 'badge-ok'}>{a.status === 'pending' ? 'Pending' : 'Submitted'}</span>
                  </div>
                  <p>Subject: {a.subj} &nbsp;|&nbsp; Faculty: {a.faculty}</p>
                  <p>{a.status === 'pending' ? `Due: ` : `Submitted: `}<strong>{a.due}</strong></p>
                  <div className="sp-assign-actions">
                    <button className="sp-btn-sm">📎 View</button>
                    {a.status === 'pending' && <button className="sp-btn-sm gold">⬆ Submit</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FEE */}
        {page === 'fee' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Fee Payment</h2>
            <div className="sp-fee-summary">
              <div className="sp-fee-card due"><h4>₹12,500</h4><p>Amount Due</p></div>
              <div className="sp-fee-card paid"><h4>₹45,000</h4><p>Total Paid</p></div>
              <div className="sp-fee-card total"><h4>₹57,500</h4><p>Total Fees</p></div>
            </div>
            <div className="sp-fee-history">
              <h4>Payment History</h4>
              <div className="sp-table-wrap">
                <table className="sp-table">
                  <thead><tr><th>Receipt No.</th><th>Description</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
                  <tbody>
                    <tr><td>REC-2025-001</td><td>Tuition Fee — Sem 5</td><td>₹25,000</td><td>Jan 10, 2025</td><td><span className="badge-ok">Paid</span></td></tr>
                    <tr><td>REC-2024-012</td><td>Tuition Fee — Sem 4</td><td>₹25,000</td><td>Jul 15, 2024</td><td><span className="badge-ok">Paid</span></td></tr>
                    <tr><td>REC-2025-DUE</td><td>Exam Fee — Sem 5</td><td>₹12,500</td><td>Due Jun 30</td><td><span className="badge-low">Pending</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="sp-pay-form">
              <h4>Pay Now</h4>
              <div className="sp-form-row">
                <div className="sp-form-group"><label>Amount (₹)</label><input type="number" defaultValue="12500" /></div>
                <div className="sp-form-group"><label>Payment Mode</label><select><option>UPI</option><option>Net Banking</option><option>Debit Card</option><option>Credit Card</option></select></div>
              </div>
              <button className="sp-pay-btn" onClick={() => alert('Payment gateway integration required for live use.')}>💳 Proceed to Pay</button>
            </div>
          </div>
        )}

        {/* LEAVE */}
        {page === 'leave' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Leave Application</h2>
            <div className="sp-leave-wrap">
              <div className="sp-leave-form-box">
                <h4>Apply for Leave</h4>
                <form onSubmit={submitLeave}>
                  <div className="sp-form-group" style={{ marginBottom: '14px' }}><label>Leave Type</label><select value={leaveForm.type} onChange={e => setLeaveForm(f => ({ ...f, type: e.target.value }))}><option>Medical Leave</option><option>Personal Leave</option><option>Family Emergency</option><option>Other</option></select></div>
                  <div className="sp-form-row">
                    <div className="sp-form-group"><label>From Date</label><input type="date" value={leaveForm.from} onChange={e => setLeaveForm(f => ({ ...f, from: e.target.value }))} /></div>
                    <div className="sp-form-group"><label>To Date</label><input type="date" value={leaveForm.to} onChange={e => setLeaveForm(f => ({ ...f, to: e.target.value }))} /></div>
                  </div>
                  <div className="sp-form-group" style={{ marginBottom: '14px' }}><label>Reason</label><textarea rows="4" value={leaveForm.reason} onChange={e => setLeaveForm(f => ({ ...f, reason: e.target.value }))} placeholder="Describe your reason..."></textarea></div>
                  <button type="submit" className="sp-pay-btn">📩 Submit Application</button>
                </form>
              </div>
              <div className="sp-leave-history-box">
                <h4>Leave History</h4>
                {leaveList.map((l, i) => (
                  <div className="sp-leave-item" key={i}>
                    <div><strong>{l.type}</strong><p>{l.from} – {l.to}</p><p className="sp-leave-reason">{l.reason}</p></div>
                    <span className={l.status === 'Approved' ? 'badge-ok' : 'badge-warn'}>{l.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {page === 'notifications' && (
          <div className="sp-page active">
            <h2 className="sp-page-title">Notifications</h2>
            <div className="sp-notif-full-list">
              {[
                { new: true, icon: '📢', title: 'Internal Assessment 2 Scheduled', msg: 'IA 2 for all 5th semester subjects is scheduled on June 15, 2025. Prepare accordingly.', time: 'Today, 10:30 AM' },
                { new: true, icon: '📝', title: 'New Assignment Uploaded', msg: 'Dr. Priya has uploaded Assignment 3 for DBMS. Due date: June 12, 2025.', time: 'Yesterday, 3:00 PM' },
                { new: false, icon: '💳', title: 'Fee Payment Reminder', msg: 'Exam fee of ₹12,500 is due on June 30, 2025. Please pay before the deadline.', time: 'May 28, 2025' },
                { new: false, icon: '📋', title: 'Attendance Updated', msg: 'Your attendance for May 2025 has been updated. Current: 82%.', time: 'May 25, 2025' },
                { new: false, icon: '🎓', title: 'Semester 4 Results Published', msg: 'Your Semester 4 results are now available. GPA: 8.5. Congratulations!', time: 'May 10, 2025' },
              ].map(n => (
                <div key={n.title} className={`sp-notif-full${n.new ? ' new' : ''}`}>
                  <span className="sp-nf-icon">{n.icon}</span>
                  <div><h4>{n.title}</h4><p>{n.msg}</p><small>{n.time}</small></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentPortalPage;

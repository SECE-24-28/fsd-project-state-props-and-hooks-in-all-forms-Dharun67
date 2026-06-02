export const checkAuth = () => {
  const localLogin = localStorage.getItem('bec_loggedin');
  const sessionLogin = sessionStorage.getItem('bec_loggedin');
  return localLogin !== null || sessionLogin !== null;
};

export const logout = () => {
  localStorage.removeItem('bec_loggedin');
  sessionStorage.removeItem('bec_loggedin');
};

export const logoutStudent = () => {
  localStorage.removeItem('bec_student_logged');
};

export const logoutFaculty = () => {
  localStorage.removeItem('bec_faculty_logged');
};

export const logoutAdmin = () => {
  localStorage.removeItem('bec_admin_logged');
};

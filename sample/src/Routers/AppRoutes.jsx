import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home';
import AboutPage from '../Components/aboutpage';
import DepartmentsPage from '../Pages/DepartmentsPage';
import AdmissionsPage from '../Pages/AdmissionsPage';
import PlacementsPage from '../Pages/PlacementsPage';
import FacilitiesPage from '../Pages/FacilitiesPage';
import ContactPage from '../Pages/ContactPage';
import PortalPage from '../Pages/PortalPage';
import LoginPage from '../Pages/LoginPage';
import StudentLoginPage from '../Pages/StudentLoginPage';
import FacultyLoginPage from '../Pages/FacultyLoginPage';
import AdminLoginPage from '../Pages/AdminLoginPage';
import StudentPortalPage from '../Pages/StudentPortalPage';
import FacultyPortalPage from '../Pages/FacultyPortalPage';
import AdminPortalPage from '../Pages/AdminPortalPage';
import PrivacyPage from '../Pages/PrivacyPage';
import TermsPage from '../Pages/TermsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portal" element={<PortalPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student-login" element={<StudentLoginPage />} />
            <Route path="/faculty-login" element={<FacultyLoginPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/student-portal" element={<StudentPortalPage />} />
            <Route path="/faculty-portal" element={<FacultyPortalPage />} />
            <Route path="/admin-portal" element={<AdminPortalPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
        </Routes>
    );
}   

export default AppRoutes ;

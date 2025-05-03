import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import ProjectForm from './ProjectForm.jsx';
import ViewProjects from './ViewProjects.jsx';
import './App.css';

function AddProject() {
    return (
        <Routes>
            <Route path="/" element={<ViewProjects />} />
            <Route path="/view" element={<ViewProjects />} />
            <Route path="/add" element={<ProjectForm />} />
            <Route path="*" element={
                <div style={{ padding: '40px', textAlign: 'center' }}>
                    <h2>404: Page Not Found</h2>
                    <p>The page you're looking for doesn't exist.</p>
                </div>
            } />
        </Routes>
    );
}

export default AddProject;
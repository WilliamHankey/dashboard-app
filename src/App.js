import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Add Link import here
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Team from './pages/Team';
import Settings from './pages/Settings';
import ProjectDetails from './pages/ProjectDetails';
import AddEditProject from './pages/AddEditProject';
import TeamMemberDetails from './pages/TeamMemberDetails';


const initialProjects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A detailed description of Project Alpha.',
    image: 'https://via.placeholder.com/300x150',
    details: 'More details about Project Alpha. This project focuses on developing an innovative software platform.',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'A detailed description of Project Beta.',
    image: 'https://via.placeholder.com/300x150',
    details: 'More details about Project Beta. This project involves the development of a mobile application for online shopping.',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A detailed description of Project Gamma.',
    image: 'https://via.placeholder.com/300x150',
    details: 'More details about Project Gamma. This project is aimed at improving the cybersecurity infrastructure of a company.',
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'A detailed description of Project Delta.',
    image: 'https://via.placeholder.com/300x150',
    details: 'More details about Project Delta. This project focuses on creating a new marketing strategy for a global brand.',
  },
  {
    id: 5,
    title: 'Project Epsilon',
    description: 'A detailed description of Project Epsilon.',
    image: 'https://via.placeholder.com/300x150',
    details: 'More details about Project Epsilon. This project is centered on the design and implementation of a new CRM system.',
  },
  {
    id: 6,
    title: 'Project Zeta',
    description: 'A detailed description of Project Zeta.',
    image: 'https://via.placeholder.com/300x150',
    details: 'More details about Project Zeta. This project involves the development of an AI-based recommendation engine.',
  },
];

const initialWorkers = [
  // Dummy workers with real images
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [workers] = useState(initialWorkers); // Removed setWorkers since it's not used

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <aside className="bg-gray-900 text-gray-300 w-full md:w-64 p-4">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold">Dashboard</span>
            <i className="fas fa-bars md:hidden"></i>
          </div>
          <nav className="space-y-4">
            <Link to="/" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
              <i className="fas fa-home mr-3"></i> Overview
            </Link>
            <Link to="/projects" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
              <i className="fas fa-folder mr-3"></i> Projects
            </Link>
            <Link to="/tasks" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
              <i className="fas fa-tasks mr-3"></i> Tasks
            </Link>
            <Link to="/team" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
              <i className="fas fa-users mr-3"></i> Team
            </Link>
            <Link to="/settings" className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
              <i className="fas fa-cogs mr-3"></i> Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 flex flex-col p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
            <Route path="/projects/new" element={<AddEditProject projects={projects} setProjects={setProjects} />} />
            <Route path="/projects/edit/:id" element={<AddEditProject projects={projects} setProjects={setProjects} />} />
            <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
            <Route path="/team" element={<Team workers={workers} />} />
            <Route path="/team/:id" element={<TeamMemberDetails workers={workers} />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

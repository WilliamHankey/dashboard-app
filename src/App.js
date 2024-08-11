import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Team from './pages/Team';
import Settings from './pages/Settings';

function App() {
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
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

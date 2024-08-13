import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const dummyProjects = [
    { id: 1, title: 'Project Alpha', description: 'A detailed description of Project Alpha.', image: 'https://placehold.co/300x150', details: 'More details about Project Alpha.' },
    { id: 2, title: 'Project Beta', description: 'A detailed description of Project Beta.', image: 'https://placehold.co/300x150', details: 'More details about Project Beta.' },
    { id: 3, title: 'Project Gamma', description: 'A detailed description of Project Gamma.', image: 'https://placehold.co/300x150', details: 'More details about Project Gamma.' },
    { id: 4, title: 'Project Delta', description: 'A detailed description of Project Delta.', image: 'https://placehold.co/300x150', details: 'More details about Project Delta.' },
    { id: 5, title: 'Project Epsilon', description: 'A detailed description of Project Epsilon.', image: 'https://placehold.co/300x150', details: 'More details about Project Epsilon.' },
    { id: 6, title: 'Project Zeta', description: 'A detailed description of Project Zeta.', image: 'https://placehold.co/300x150', details: 'More details about Project Zeta.' },
  ];

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-700">Projects</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 p-2 rounded-lg">
            <i className="fas fa-search text-gray-600"></i>
          </button>
          <button className="bg-gray-200 p-2 rounded-lg">
            <i className="fas fa-bell text-gray-600"></i>
          </button>
          <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full" />
        </div>
      </header>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-4">All Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-100 p-4 rounded-lg shadow cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

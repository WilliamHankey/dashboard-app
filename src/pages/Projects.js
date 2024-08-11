import React from 'react';

const Projects = () => {
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
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="https://placehold.co/200x150" alt="Project" className="rounded-lg mb-4" />
            <h3 className="font-bold">Project Title</h3>
            <p className="text-sm text-gray-600">Short description of the project.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

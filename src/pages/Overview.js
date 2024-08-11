import React from 'react';

const Overview = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-700">Project Dashboard</h1>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">Tasks Overview</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Task Title</h3>
                <p className="text-sm text-gray-600">Brief task description.</p>
              </div>
              <span className="text-sm text-gray-400">Due: Today</span>
            </li>
          </ul>
        </section>

        <section className="lg:col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img src="https://placehold.co/200x150" alt="Project" className="rounded-lg mb-4" />
              <h3 className="font-bold">Project Title</h3>
              <p className="text-sm text-gray-600">Short description of the project.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-4">Recent Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Update Title</h3>
            <p className="text-sm text-gray-600">Details about the recent update.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;

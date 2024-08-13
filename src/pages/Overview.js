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
        {/* Tasks Overview */}
        <section className="lg:col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">Tasks Overview</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Finalize Project Proposal</h3>
                <p className="text-sm text-gray-600">Ensure all project objectives are clearly outlined.</p>
              </div>
              <span className="text-sm text-gray-400">Due: Today</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Client Meeting Preparation</h3>
                <p className="text-sm text-gray-600">Prepare the slides and handouts for the client meeting.</p>
              </div>
              <span className="text-sm text-gray-400">Due: Tomorrow</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Design Mockup Review</h3>
                <p className="text-sm text-gray-600">Review the design mockups with the design team.</p>
              </div>
              <span className="text-sm text-gray-400">Due: Next Week</span>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="lg:col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img src="https://placehold.co/200x150" alt="Project 1" className="rounded-lg mb-4" />
              <h3 className="font-bold">BuildNoon Project</h3>
              <p className="text-sm text-gray-600">Construction of a new office building in downtown.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img src="https://placehold.co/200x150" alt="Project 2" className="rounded-lg mb-4" />
              <h3 className="font-bold">Market Expansion</h3>
              <p className="text-sm text-gray-600">Expanding market reach to the northern region.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img src="https://placehold.co/200x150" alt="Project 3" className="rounded-lg mb-4" />
              <h3 className="font-bold">Website Redesign</h3>
              <p className="text-sm text-gray-600">Revamping the company website for better UX/UI.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img src="https://placehold.co/200x150" alt="Project 4" className="rounded-lg mb-4" />
              <h3 className="font-bold">Product Launch</h3>
              <p className="text-sm text-gray-600">Launching the new product line in Q4.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Recent Updates Section */}
      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-4">Recent Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Client Feedback Received</h3>
            <p className="text-sm text-gray-600">We received positive feedback on the recent project from the client.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">New Team Member</h3>
            <p className="text-sm text-gray-600">Welcome our new team member, Jane Doe, to the marketing team.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Q3 Targets Achieved</h3>
            <p className="text-sm text-gray-600">Our team successfully achieved all the Q3 targets ahead of time.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Project Delayed</h3>
            <p className="text-sm text-gray-600">The construction project has been delayed due to unforeseen circumstances.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Software Update</h3>
            <p className="text-sm text-gray-600">A new update has been rolled out for our project management software.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">New Client Acquired</h3>
            <p className="text-sm text-gray-600">We have successfully acquired a new client from the tech industry.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;

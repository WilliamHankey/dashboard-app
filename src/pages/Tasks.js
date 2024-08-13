import React from 'react';

const Tasks = () => {
  const dummyTasks = [
    { title: 'Design Homepage', description: 'Create the initial design for the homepage.', due: 'Today' },
    { title: 'Update Database Schema', description: 'Add new fields to the user table.', due: 'Tomorrow' },
    { title: 'Fix Login Bug', description: 'Resolve the issue with the login form.', due: 'Next Week' },
    { title: 'Develop Dashboard', description: 'Build the user dashboard page.', due: 'In 2 Days' },
  ];

  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-700">Tasks</h1>
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
        <h2 className="font-bold text-lg mb-4">All Tasks</h2>
        <ul className="space-y-4">
          {dummyTasks.map((task, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <span className="text-sm text-gray-400">Due: {task.due}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Tasks;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finalize Project Proposal', description: 'Ensure all project objectives are clearly outlined.', dueDate: 'Today', completed: false },
    { id: 2, title: 'Client Meeting Preparation', description: 'Prepare the slides and handouts for the client meeting.', dueDate: 'Tomorrow', completed: false },
    { id: 3, title: 'Design Mockup Review', description: 'Review the design mockups with the design team.', dueDate: 'Next Week', completed: false },
  ]);

  const [projects] = useState([
    { id: 1, title: 'BuildNoon Project', description: 'Construction of a new office building in downtown.', image: 'https://placehold.co/300x150' },
    { id: 2, title: 'Market Expansion', description: 'Expanding market reach to the northern region.', image: 'https://placehold.co/300x150' },
    { id: 3, title: 'Website Redesign', description: 'Revamping the company website for better UX/UI.', image: 'https://placehold.co/300x150' },
    { id: 4, title: 'Product Launch', description: 'Launching the new product line in Q4.', image: 'https://placehold.co/300x150' },
  ]);

  const [updates] = useState([
    { id: 1, title: 'Client Feedback Received', description: 'We received positive feedback on the recent project from the client.' },
    { id: 2, title: 'New Team Member', description: 'Welcome our new team member, Jane Doe, to the marketing team.' },
    { id: 3, title: 'Q3 Targets Achieved', description: 'Our team successfully achieved all the Q3 targets ahead of time.' },
    { id: 4, title: 'Project Delayed', description: 'The construction project has been delayed due to unforeseen circumstances.' },
    { id: 5, title: 'Software Update', description: 'A new update has been rolled out for our project management software.' },
    { id: 6, title: 'New Client Acquired', description: 'We have successfully acquired a new client from the tech industry.' },
  ]);

  const navigate = useNavigate();

  const handleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

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
            {tasks.map(task => (
              <li key={task.id} className={`flex items-center justify-between ${task.completed ? 'line-through text-gray-400' : ''}`}>
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Due: {task.dueDate}</span>
                  <button 
                    className={`ml-4 px-2 py-1 text-white ${task.completed ? 'bg-red-500' : 'bg-green-500'} rounded`}
                    onClick={() => handleTaskComplete(task.id)}
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="lg:col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map(project => (
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
      </div>

      {/* Recent Updates Section */}
      <section className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-4">Recent Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {updates.map(update => (
            <div key={update.id} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold">{update.title}</h3>
              <p className="text-sm text-gray-600">{update.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Overview;

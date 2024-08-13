import React, { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design Homepage', description: 'Create the initial design for the homepage.', due: 'Today', completed: false },
    { id: 2, title: 'Update Database Schema', description: 'Add new fields to the user table.', due: 'Tomorrow', completed: false },
    { id: 3, title: 'Fix Login Bug', description: 'Resolve the issue with the login form.', due: 'Next Week', completed: false },
    { id: 4, title: 'Develop Dashboard', description: 'Build the user dashboard page.', due: 'In 2 Days', completed: false },
  ]);

  const [newTask, setNewTask] = useState({ title: '', description: '', due: '' });
  const [filter, setFilter] = useState('All');

  const handleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.description && newTask.due) {
      const task = {
        id: tasks.length + 1,
        ...newTask,
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '', due: '' });
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Incomplete') return !task.completed;
    return true;
  });

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
        <div className="mb-4">
          <h2 className="font-bold text-lg mb-4">Add New Task</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Task Title"
              className="p-2 border rounded"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Task Description"
              className="p-2 border rounded"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Due Date"
              className="p-2 border rounded"
              value={newTask.due}
              onChange={(e) => setNewTask({ ...newTask, due: e.target.value })}
            />
          </div>
          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-lg mb-4">Filter Tasks</h2>
          <div className="flex space-x-4">
            <button 
              className={`py-2 px-4 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button 
              className={`py-2 px-4 rounded ${filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
              onClick={() => setFilter('Completed')}
            >
              Completed
            </button>
            <button 
              className={`py-2 px-4 rounded ${filter === 'Incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
              onClick={() => setFilter('Incomplete')}
            >
              Incomplete
            </button>
          </div>
        </div>

        <h2 className="font-bold text-lg mb-4">All Tasks</h2>
        <ul className="space-y-4">
          {filteredTasks.map((task, index) => (
            <li key={index} className={`bg-gray-100 p-4 rounded-lg shadow ${task.completed ? 'line-through text-gray-400' : ''}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <span className="text-sm text-gray-400">Due: {task.due}</span>
                </div>
                <button 
                  className={`py-2 px-4 rounded ${task.completed ? 'bg-red-500' : 'bg-green-500'} text-white`}
                  onClick={() => handleCompleteTask(task.id)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Tasks;

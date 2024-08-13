import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditProject = ({ projects, setProjects }) => {
  const { id } = useParams();
  const project = projects.find(p => p._id === id) || { name: '', description: '', status: 'Not Started' };
  const [formData, setFormData] = useState(project);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      setProjects(prev =>
        prev.map(p => (p._id === id ? { ...p, ...formData } : p))
      );
    } else {
      setProjects(prev => [...prev, { ...formData, _id: String(prev.length + 1) }]);
    }
    navigate('/projects');
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Project' : 'Add Project'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Project Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
      </form>
    </div>
  );
};

export default AddEditProject;

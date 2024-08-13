import React, { useState } from 'react';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Project Manager', image: 'https://placehold.co/50x50' },
    { id: 2, name: 'Bob Smith', role: 'Lead Developer', image: 'https://placehold.co/50x50' },
    { id: 3, name: 'Charlie Brown', role: 'UI/UX Designer', image: 'https://placehold.co/50x50' },
    { id: 4, name: 'Diana Ross', role: 'QA Engineer', image: 'https://placehold.co/50x50' },
  ]);

  const [newMember, setNewMember] = useState({ name: '', role: '', image: '' });
  const [editingMember, setEditingMember] = useState(null);

  const handleAddMember = () => {
    if (newMember.name && newMember.role) {
      const newId = teamMembers.length + 1;
      setTeamMembers([...teamMembers, { id: newId, ...newMember }]);
      setNewMember({ name: '', role: '', image: '' });
    }
  };

  const handleEditMember = (id) => {
    const member = teamMembers.find((member) => member.id === id);
    setEditingMember(member);
  };

  const handleSaveEdit = () => {
    setTeamMembers(teamMembers.map((member) => (member.id === editingMember.id ? editingMember : member)));
    setEditingMember(null);
  };

  const handleDeleteMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between bg-white shadow p-4 rounded-lg mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-700">Team</h1>
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

      <section className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="font-bold text-lg mb-4">Add New Team Member</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="p-2 border rounded"
            value={newMember.role}
            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 border rounded"
            value={newMember.image}
            onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
          />
        </div>
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleAddMember}
        >
          Add Member
        </button>
      </section>

      {editingMember && (
        <section className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="font-bold text-lg mb-4">Edit Team Member</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border rounded"
              value={editingMember.name}
              onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              className="p-2 border rounded"
              value={editingMember.role}
              onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="p-2 border rounded"
              value={editingMember.image}
              onChange={(e) => setEditingMember({ ...editingMember, image: e.target.value })}
            />
          </div>
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded mr-2"
            onClick={handleSaveEdit}
          >
            Save
          </button>
          <button 
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={() => setEditingMember(null)}
          >
            Cancel
          </button>
        </section>
      )}

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold text-lg mb-4">Team Members</h2>
        <ul className="space-y-4">
          {teamMembers.map((member) => (
            <li key={member.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
              <img src={member.image} alt={member.name} className="rounded-full mr-4" />
              <div className="flex-1">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
              <button 
                className="bg-yellow-500 text-white py-2 px-4 rounded mr-2"
                onClick={() => handleEditMember(member.id)}
              >
                Edit
              </button>
              <button 
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => handleDeleteMember(member.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Team;

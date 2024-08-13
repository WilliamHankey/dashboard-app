import React from 'react';
import { useParams } from 'react-router-dom';

const TeamMemberDetails = ({ workers }) => {
  const { id } = useParams();
  const worker = workers.find(w => w._id === id);

  if (!worker) return <p>Team member not found.</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{worker.name}</h2>
      <img src={worker.avatar} alt={worker.name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <p>Status: {worker.status}</p>
    </div>
  );
};

export default TeamMemberDetails;

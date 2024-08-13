import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="my-4 rounded-lg" />
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetails;

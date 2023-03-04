import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch list of projects from the API
    fetch('http://localhost:9292/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    // Delete project using the API
    fetch(`http://localhost:9292/projects/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setProjects(projects.filter(project => project.id !== id));
        }
      })
      .catch(error => console.log(error));
  }

  const handleStatusUpdate = (id, newStatus) => {
    // Update project status using the API
    fetch(`http://localhost:9292/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: newStatus
      })
    })
      .then(response => {
        if (response.ok) {
          const updatedProjects = projects.map(project => {
            if (project.id === id) {
              return {
                ...project,
                status: newStatus
              };
            }
            return project;
          });
          setProjects(updatedProjects);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='projects'>
      <h2>Current Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <p>Id: {project.id}</p>
            <p><strong>{project.title}</strong></p>
            <p>Goals: {project.goals}</p>
            <p>Status: {project.status}</p>
            <p>Timeframe: {project.timeframe}</p>
            <p>created_at: {project.created_at}</p>
            <p>updated_at: {project.updated_at}</p>
            <p>timestamps: {project.timestamps}</p>

            <button onClick={() => handleDelete(project.id)}>Delete</button>
            <button onClick={() => handleStatusUpdate(project.id, 'In Progress')}>
              Mark as InProgress
            </button>
            <button onClick={() => handleStatusUpdate(project.id, 'Completed')}>
              Mark as Completed
            </button>
            <button onClick={() => handleStatusUpdate(project.id, 'On Hold')}>
              Mark as onHold
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

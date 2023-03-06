
import React, { useState, useEffect } from 'react';

function ProjectsList(){
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    // Fetch list of projects from the API
    fetch('http://localhost:9292/projects')
      .then(res => res.json())
      .then(data => setCurrentProjects(data))
  }, []);

  function handleStatusUpdate(id, newStatus){
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
      .then(res => {
        if (res.ok) {
          const updatedProjects = currentProjects.map(currentProject => {
            if (currentProject.id === id) {
              return {
                ...currentProject,
                status: newStatus
              };
            }
            return currentProject;
          });
          setCurrentProjects(updatedProjects);
        }
      })
  }

  function handleDelete(id){
    // Delete project using the API
    fetch(`http://localhost:9292/projects/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentProjects(currentProjects.filter(currentProject => currentProject.id !== id));
        }
      })
  }

  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch list of members from the API
    fetch('http://localhost:9292/members')
      .then(response => response.json())
      .then(data => setMembers(data))
  }, []);

  function getRandomMembers(project){
    const randomMembers = [];
    for (let x = 0; x < 5; x++) {
      const randomIndex = Math.floor(Math.random() * members.length);
      const member = members[randomIndex];
      randomMembers.push(member);
    }
    return randomMembers;
  }

  const projects = 
  currentProjects.map((project, index) => (
    <div className='project' key={index}>
      <h6>Proj. No: {project.id}<br/><hr/>
      Title: {project.title}<br/>
      Goals: {project.goals}<br/>
      Status: {project.status}<br/>
      Timeframe: {project.timeframe}<br/>
      created_at: {project.created_at}<br/>
      updated_at: {project.updated_at}</h6>
      <div className='buttons'>
        <button onClick={() => handleStatusUpdate(project.id, 'In Progress')}>
          Mark as InProgress
        </button>
        <button onClick={() => handleStatusUpdate(project.id, 'Completed')}>
          Mark as Completed
        </button>
        <button onClick={() => handleStatusUpdate(project.id, 'On Hold')}>
          Mark as onHold
        </button>
        <button onClick={() => handleDelete(project.id)}>Delete</button>
      </div>
      <div className='members'>
        <h4>Members:</h4>
        <div>
          {getRandomMembers(project).map((member, index) => (
            <p key={index}>{member.name}</p>
          ))}
        </div>
      </div>
    </div>
  ))

  return (
    <div className='projects'>
      <h2>Current Projects</h2>
      <div className='projects_display'>
        {projects}
      </div>
    </div>
  );
};

export default ProjectsList;








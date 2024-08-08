import React from 'react';

const projects = [
  { title: 'Shoplilex', description: 'In just 4 days...' },
  { title: 'Dentique', description: 'In just 4 days...' },
  { title: 'Shopping Zone', description: 'In just 4 days...' },
  { title: 'Burberry', description: 'In just 4 days...' }
];

const Projects = () => (
  <section className="container" id="projects">
    <h2>My Projects</h2>
    {projects.map((project, index) => (
      <div key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </section>
);

export default Projects;

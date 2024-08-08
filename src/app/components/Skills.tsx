import React from 'react';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'Express.js', 'Node.js', 
  'MongoDB', 'SQL', 'React Native', 'AWS', 'Redis'
];

const Skills = () => (
  <section className="container" id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill">{skill}</div>
      ))}
    </div>
  </section>
);

export default Skills;

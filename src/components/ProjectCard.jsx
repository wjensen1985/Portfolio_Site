import React from 'react';
import './project_card.css';

const ProjectCard= ({name, image, github_link, demo_link}) => {
  return (
    <div className='project-card-container container'>
      <div className="img-container">
        <a href="#"><img src={image} alt={`${name} project`} /></a>
      </div>
      <h3>{name}</h3>
      <div className="links_container">
        <a className="btn primary" target='_blank' rel="noopener noreferrer" href={github_link}>Github</a>
        <a className="btn primary" target='_blank' rel="noopener noreferrer" href={demo_link}>Demo</a>
      </div>
    </div>
  )
}

export default ProjectCard
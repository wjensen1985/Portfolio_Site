import React from 'react';
import './portfolio.css';
import ProjectCard from '../../components/ProjectCard';
import Project_data from './project_data.js';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {
          Project_data.map(item => <ProjectCard key={item.name} name={item.name} image={item.image} github_link={item.github_link} demo_link={item.demo_link} />)
        }
      </div>


      {/* <div className="text-with-header-div">
        <h3>test section styling</h3><p>test paragraph section styling: Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, adipisci temporibus totam tempora corporis et possimus consequatur iusto ipsum! Error at tenetur perferendis debitis fugiat, ipsa odio repudiandae odit earum?</p>
      </div> */}
    </section>
  )
}

export default Portfolio
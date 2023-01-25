import React from 'react';
import './portfolio.css';
import Project_card from '../../components/Project_card';
import testp1 from '../../assets/react_logo.png';
import testp2 from '../../assets/react_logo.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        <h3>test3</h3>
        <Project_card pName="test1" />
      </div>
    </section>
  )
}

export default Portfolio
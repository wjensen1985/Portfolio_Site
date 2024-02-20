import React from 'react'
import './About.css'
import {FaDownload} from 'react-icons/fa'
import Resume from '../../assets/Jensen_Resume.pdf'

const About = () => {
  return (
    <section id="about"><h2>About Me</h2>
      <div className="about-container">
        <h3>My Mission</h3>
        <p>I want to build things and share my projects along the way!</p>
        <h3>My Experiences</h3>
        <p>I graduated from the University of Minnesota with a Bachelors in Mechanical engineering and Minor in French Studies.  Like the opposing nature of the two fields I studied, I like to include some creativity in the technical projects that I make.</p>
        <a className="btn primary" href={Resume} download >Download CV <FaDownload/></a>
      </div>
    </section>
  )
}

export default About
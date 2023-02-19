import React from 'react'
import './About.css'
import {FaDownload} from 'react-icons/fa'
import Resume from '../../assets/CV_ex.pdf'

const About = () => {
  return (
    <section id="about"><h2>About Me</h2>
      <div className="about-container">
        <h3>My Mission</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium tenetur inventore ratione, modi, et quae sed totam illum quidem molestias veniam aperiam corporis expedita beatae natus harum, nulla doloremque!</p>
        <h3>My Experiences</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium tenetur inventore ratione, modi, et quae sed totam illum quidem molestias veniam aperiam corporis expedita beatae natus harum, nulla doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium tenetur inventore ratione, modi, et quae sed totam illum quidem molestias veniam aperiam corporis expedita beatae natus harum, nulla doloremque!</p>
        <a className="btn primary" href={Resume} download >Download CV <FaDownload/></a>
      </div>
    </section>
  )
}

export default About
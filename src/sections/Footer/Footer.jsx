import React from 'react'
import './footer.css'
import data from '../Header/data'
import { IconContext } from 'react-icons'

const Footer = () => {
  return (
    // <footer>Footer</footer>
    <IconContext.Provider value={{size: '2rem'}}>
      <footer id='footer__section'>
      <div className="links__container">
        <ul className='section__links'>
          <h3>Site Navigation</h3>
          <a href='#'>Home</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </ul>
        <ul className='section__links'>
          <h3>My Projects</h3>
          <a href='#'>Project 1</a>
          <a href='#'>Project 2</a>
          <a href='#'>Project 3</a>
          <a href='#'>Project 4</a>
        </ul>
        {/* <ul className='section__links'>
          <a href='#'>home</a>
          <a href='#'>portfolio</a>
          <a href='#'>about</a>
          <a href='#'>contact</a>
        </ul> */}
      </div>

      <div className="footer__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target='_blank' rel="noopener noreferrer">{item.icon}</a>)
            }
      </div>

    </footer>
    </IconContext.Provider>
    
  )
}

export default Footer
import React from 'react'
import './header.css'
import HeaderImage from '../../assets/panda_v.jpg'
import data from './data'
import {IconContext} from 'react-icons';

const Header = () => {

  return (
      <IconContext.Provider value={{size: '3rem'}}>
      <header id='header' className='header__class'>
        <div className="container header__container">
          
          <div className="header__profile">
            <img src={HeaderImage} alt="Header" />
          </div>

          <div className="header__bio text-with-header-div">
            <h3>William Jensen</h3>
            <h4>I like to build things</h4>
          </div>

          <div className="header__cta">
            <a href="#portfolio" className='btn primary'>My Projects</a>
            <a href="#contact" className='btn primary'>Contact Me</a>
          </div>

          <div className="header__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target='_blank' rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
        </div>
      </header>
      </IconContext.Provider>
  )
}

export default Header 
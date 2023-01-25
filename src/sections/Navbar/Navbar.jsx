import React from 'react'
import './navbar.css'
import Logo from '../../assets/dog.jpg'
import data from './data'
import {FaMoon, FaSun} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = ({toggleTheme}) => {
    // changing icon
    const [active, setActive] = useState(false);

    const handleChangeActive = () => {
      setActive((curr) => {
        return !curr;
      });
    };


    // navbar scroll logic
  const [navbar, setNavbar] = useState(false);
  
  const navScroll = () => {
    setNavbar(false);
    // console.log('clicked');
    // console.log(navbar);
  }

  const debounce = (fn , delay) => {
    let id;
    return (...args) => {
      if (id) clearTimeout(id);
      // console.log('test');
      if(!navbar){
        setNavbar(true);
      }
      // console.log(navbar);
      id = setTimeout(() => {
        fn(...args);
      }, delay)
    }
  }

  window.addEventListener('scroll', debounce(navScroll, 300));

  return (
    <nav className={navbar ? 'scrolled' : ''}>
      <div className="nav__container">
        
        <div className="nav2__container">
            <div className="logo-holder">
              <a href="index.html" className="nav__logo">
                <img id="logo-img" src={Logo} alt="Logo" />
              </a>      
            </div>
            

            <ul className="nav__menu">
              {
                data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
              }
            </ul>         
        </div>

        <div className="btn__holder">
          <button id='theme__icon' onClick={() => {toggleTheme(); handleChangeActive()}}>{active ? (<FaSun/>) : (<FaMoon/>)}</button>
          {/* <button id='theme__icon' onClick={toggleTheme}><FaSun/></button>
          <button id='theme__icon' onClick={handleChangeActive}>{active ? (<FaSun/>) : (<BsFillMoonFill/>)}</button> */}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import './floatingNav.css'
import data from './data'
import { useState, useEffect } from 'react'
// import { useScrollPosition } from '../../components/useScrollPosition'

const FloatingNav = () => {
  const [active, setActive] = useState('');
  // const scrollPosition = useScrollPosition();

  useEffect(() => {
    const updateActive = () => {
      const sectionAll = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset;
      // console.log(sectionAll[0].offsetTop);
      // console.log(scrollPosition);
      const headerPosition = sectionAll[0].offsetTop;
      // console.log(headerPosition);

      sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        
        if (scrollPosition < (headerPosition - 201)){
          // console.log('home');
          setActive('#');
        }

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight){
          setActive(`#${sectionId}`);
          // console.log(sectionId);
        }
      });
    };

    window.addEventListener('scroll', updateActive);

    updateActive();

    return () => window.removeEventListener('scroll', updateActive);

  }, []);

  return (
    <>
      <ul id='floating_nav'>
        {
          data.map(item=> <li key={item.id}><a className = {active === `${item.link}` ? 'active' : ""} href={item.link}>{item.title}</a></li>)
        }
      </ul> 
    </>  
  )
}

export default FloatingNav


// {/* onClick = {() => setActive(`${item.link}`)}  */}
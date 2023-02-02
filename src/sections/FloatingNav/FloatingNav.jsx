import React from 'react'
import './floatingNav.css'
import data from './data'
import { useState } from 'react'
import { useScrollPosition } from '../../components/useScrollPosition'

const FloatingNav = () => {
  const [active, setActive] = useState('#');
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <ul id='floating_nav'>
        {
          data.map(item=> <li key={item.id}><a onClick = {() => setActive(`${item.link}`)} className = {active === `${item.link}` ? 'active' : ""} href={item.link}>{item.title}</a></li>)
        }
      </ul> 
    </>  
  )
}

export default FloatingNav
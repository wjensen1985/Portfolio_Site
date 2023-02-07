import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="">
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea name="submit" rows="7" defaultValue={""}></textarea>
        <button className='btn primary'>Send Message</button>
      </form>
      
    </section>
  )
}

export default Contact
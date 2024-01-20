import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_ojkghyi', form.current, 't4IZelTVpqYiWOMtI')

    e.target.reset()
  };

  return (
    <section id="contact">
      <div id="contact-wrapper" >
        <h2>Contact Me</h2>
        <div id="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <textarea id="text-input" name="message" rows="7" placeholder="Your Message Here" required></textarea>
            <button type="submit" className='btn primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {GrInstagram} from "react-icons/gr"
import {SiWhatsapp} from "react-icons/si"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqd6nkg', 'template_si7deyp', form.current, 'ZEe6vqSELx7PNC9Ic')

    e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
            <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>gautamcse097@gmail.com</h5>
              <a href='mailto:gautamcse097@gmail.com' target="_blank">send a message</a>
            </article>

            <article className='contact_option'>
            <GrInstagram className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>Follow tech Gautam</h5>
              <a href='https://www.instagram.com/tech_gautam_1/' target="_blank">Send a message</a>
            </article>

            <article className='contact_option'>
            <SiWhatsapp className='contact_option-icon'/>
              <h4>WhatApp</h4>
              <h5>+91 62054-53090</h5>
              <a href='https://api.whatapp.com/send?phone+916205453090' target="_blank">WhatApp Me</a>
            </article>
        </div>
        {/* END OF THE COTACT OPTIONS  */}
      

      <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full Name' required />
          <input type='email' name='email' placeholder='your Email' required />
          <textarea name ="message" row = "7" placeholder='your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

      </div>
    </section>
  )
}

export default Contact
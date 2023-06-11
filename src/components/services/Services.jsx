import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>React Js Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>React.js Expertise</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>JavaScript Proficiency</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Problem-Solving Skills</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Component-Based Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Collaboration and Communication</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous Learning</p>
            </li>
            
          </ul>
        </article>
        {/*  END OF UI/UX  */ }

        <article className='service'>
          <div className='service_head'>
            <h3>Php Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>PHP Proficiency</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>MySQL Database</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Problem-Solving Skills</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Development Concepts</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous Learning</p>
            </li>
            
          </ul>
        </article>
        {/*  END OF WEB DEVELOPMENT */ }

        <article className='service'>
          <div className='service_head'>
            <h3>Android or App Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Android Development Expertise using Java</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Proficiency in Java/Kotlin</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI/UX Design and Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Android Frameworks and Libraries</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Debugging and Testing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous Learning and Adaptability</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */ }
      </div>
    </section>
  )
}

export default Services
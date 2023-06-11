import React from 'react'
import './about.css'
import Me from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolder} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={Me} alt="me" />
        </div>
      </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
          <FaAward className='about_icon'/>
            <h5>Expereince</h5>
            <small>6th-Week Training at vmm institute in Java</small>
          </article>

          <article className='about_card'>
          <FiUsers className='about_icon'/>
            <h5>Skills</h5>
            <small>React Js & php Developer</small>
          </article>

          <article className='about_card'>
          <VscFolder className='about_icon'/>
            <h5>Education</h5>
            <small>B.Tech in CSE From AGC(Amritsar)</small>
          </article>

          <article className='about_card'>
          <VscFolder className='about_icon'/>
            <h5>Project</h5>
            <small>10+ completed project</small>
          </article>
        </div>
        <p>
        I am third year graduate pursuing B.Tech in Computer Science, diligent and curious student with a strong interest in computer science and technology and I am a quick learner and always seeks to expand my knowledge and expertise in the field. With a keen eye for detail and a passion for innovation. I am committed to excellence in my work, hardworking and ambitious individual as always willing to go the extra mile to achieve the goals. In my free time, I enjoys exploring new technologies and taking on coding challenges to sharpen my skills.I have completed many project and want to working in mnc company. This is my portfolio website .I am describing myself their in explain , and those who want to hire me plzz contact me by contact us section .
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>

      </div>

      
    </section>
  )
}

export default About
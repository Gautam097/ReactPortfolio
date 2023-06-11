import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/gh2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'am </h5>
        <h1>Gautam kumar</h1>
        <h5 className='text-light'>Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>scroll Down</a>
      </div>

    </header>
  )
}

export default Header
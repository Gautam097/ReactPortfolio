import React from 'react'
import './testimonial.css'
import '../portfolio/portfolio.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
// import {Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import ' swiper/css';
// import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name:'Tina snow',
    review:'JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. '
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. '
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. '
  },
  {
    avatar:AVTR4,
    name:'Nana Ama McBrown',
    review:'JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. '
  }
]

// const Testimonial = () => {
//   return (
//     <section id='testimonial'>
//       <h5>Review from clients</h5>
//       <h2>Testimonial</h2>

//       <Swiper className='container testimonial_container'
//             // install Swiper modules
//             modules={[Pagination]}
//       spaceBetween={40}
//       slidesPerView={1}
//       pagination={{ clickable: true }}>
//         {
//           data.map(({avatar,name,review},index) =>{
//             return(
//               <SwiperSlide key={index} className='testimonial'>
//           <div className='client_avtar'>
//             <img src={avatar} alt='avatart one'/>
            
//           </div>
//           <h5 className='client_name'>{name}</h5>
//             <small className='client_review'>{review}</small>
//         </SwiperSlide>
//             )
//           })
//         }
//       </Swiper>


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>



      <div className='container portofolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={AVTR1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article>
    </div>

    </section>
  )
}

export default Testimonial
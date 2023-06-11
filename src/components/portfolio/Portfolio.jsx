import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
  id:1,
image:Img1,
title:'Recently in 6th semester I had create Ecommerce website Using Php as backend',
github:'https://github.com/gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:2,
image:Img2,
title:'Movie search wesite using React js and Redux toolkit',
github:'https://github.com/gautam097/Gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:3,
image:Img3,
title:'Dynamic PortFolio website using Php and Mysql',
github:'https://github.com/Gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:4,
image:Img4,
title:'Fee Management system using java and Mysql',
github:'https://github.com/Gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:5,
image:Img5,
title:'Point of Sale using Java and Mysql',
github:'https://github.com/gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:6,
image:Img6,
title:'Hotel Management System in Python using Tkinter',
github:'https://github.com/gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:7,
image:Img1,
title:'MyPortfolio website using Html,css,Javascript',
github:'https://github.com/gautam097',
demo:'https://gautam097.github.io/MyPortfolio.github.io/'
},
{
id:8,
image:Img2,
title:'Hospital Management System using C++',
github:'https://github.com/gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
{
id:9,
image:Img3,
title:'My portfolio website using React Js',
github:'https://github.com/gautam097',
demo:'https://www.linkedin.com/in/gautam-kumar-145351237/'
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>



      {/* <div className='container portofolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/gautam097' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article> */}

        {/* <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/gautam097' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/gautam097' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/gautam097' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/gautam097' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
          <a href='https://github.com/gautam097' className='btn'>GitHub</a>
          <a href='https://dribbble.com/shots/popular' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article> */}  
      {/* </div> */}

      <div className='container portofolio_container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
          <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
          <a href={github} className='btn'>GitHub</a>
          <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article> 

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
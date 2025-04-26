import React from 'react'
import './hero.css'
import darkarrow from '../../assets/darkarrow.png'
const Hero = () => {
  return (
    <div className ='hero container'>
        <div className="hero-text">
            <h1>We ensure better projects for a better placement.</h1>
            <p>
               Unlock your true potential with Project_Library,<br/>
               your gateway to endless growth, knowleadge and success.<br/>
               Whether you are looking to advance your career,<br/>
               explore new passions, or to develop valuable skills,<br/>
                we provide the resources, and inspiration to help you thrive.
            </p>
            <button className='btn'>Explore more <img src={darkarrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero

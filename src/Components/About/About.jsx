import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About Our Project Library</h3>
        <h2>"First, solve the problem. Then, write the code."</h2>
        <p>Embark on a transformative educational journey <br />
        with our website's comprehensive educational features. <br />
         Our cutting edge facilities are designed <br />
         to empower student with the knowleadge, and skills <br />
         needed to excel in the dynamic field of education.</p>
        <p>With our focus on innovation and hands-on learning, <br /> 
        and personalised mentorship, our programs prepare <br />
         aspiring projects, concepts and connections <br />
         to make a meaningful impact on students.</p>

      </div>
    </div>
  )
}
export default About
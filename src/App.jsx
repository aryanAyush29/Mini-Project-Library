import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Feedback from './Components/Feedback/Feedback'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Features!' title='What we offer?'/>
      <Programs/>
      <About/>
      <Title subtitle='Creators' title='Who are we?'/>
      <Campus/>
      <Title subtitle='Feedback' title='What other student says?'/>
      <Feedback/>
      <Title subtitle='Contact US' title='Huh, Why do u want to?'/>
      <Contact/>

      </div>
      
    </div>
  )
}

export default App

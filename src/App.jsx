import React, { useState } from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Feedback from './Components/Feedback/Feedback'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import AddProject from './Components/AddProject/App.jsx' // Import AddProject component

const App = () => {
  
  const [playState, setPlayState] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false); // State for AddProject

  const handleCaptionClick = () => {
    console.log("Caption clicked!"); // Debugging log
    setShowAddProject(true); // Show AddProject component on click
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Features!" title="What we offer?" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Creators" title="Who are we?" />
        <Campus />
        <Title subtitle="Feedback" title="What other student says?" />
        <Feedback />
        <Title subtitle="Contact US" title="Get in touch" />
        <Contact />
        <div className="caption" onClick={handleCaptionClick}>
          {/* Add your caption content here */}
          Click here to add a project
        </div>
        <hr />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      {showAddProject && <AddProject />} {/* Conditionally render AddProject */}
    </div>
  );
};

export default App;
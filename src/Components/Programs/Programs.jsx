import React, { useState } from 'react';
import './Programs.css';
import './Modal.css'; // Import CSS for modal
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import AddProject from '../AddProject/App.jsx'; // Import AddProject component

const Programs = () => {
  const [showAddProject, setShowAddProject] = useState(false); // State for AddProject

  const handleImageClick = () => {
    setShowAddProject(true); // Show AddProject modal on image click
  };

  const closeModal = () => {
    setShowAddProject(false); // Close the modal
  };

  return (
    <div className="programs">
      <div className="program">
        <img
          src={program_1}
          alt=""
          onClick={handleImageClick} // Add onClick handler to the image
          style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
        />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Project Library</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Resource Hub</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Alumni Connect</p>
        </div>
      </div>

      {/* Modal for AddProject */}
      {showAddProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <AddProject />
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
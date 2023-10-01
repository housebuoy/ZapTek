import React, { useState } from 'react';
import './DropdownMenu.css'


const DropdownMenu = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Who we are <box-icon name='chevron-down' color='#9f5ffe' ></box-icon>
      </button>
      {isOpen && (
          <div className="category">            
              <a href='' className="sidebarSubtitle">
                Mission
              </a>
              <a href='' className="sidebarSubtitle">
                Vision
              </a>
              <a href='' className="sidebarSubtitle">
                Goal
              </a>
          </div>
      )}
    </div>

  );
};

export default DropdownMenu;
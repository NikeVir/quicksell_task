import React, { useState } from 'react'
import "../Styles/header.css"

export default function Header({ handleSelectGroupingChange, handleSelectOrderingChange, selectedGroupingOption, selectedOrderingOption }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className='header_main'>
      <div>
        <div>
          <button onClick={handleButtonClick}>Display</button>
        </div>
        {isDropdownVisible && (
          <div className="dropdown">
            <div className='options'>
              <label>Grouping:</label>
              <select value={selectedGroupingOption} onChange={handleSelectGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className='options'>
              <label>Ordering:</label>
              <select value={selectedOrderingOption} onChange={handleSelectOrderingChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}



      </div>
    </div>
  )
}

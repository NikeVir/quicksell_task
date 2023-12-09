import React, { useEffect, useState } from 'react'
import "../Styles/topbar.css"

export default function Header({ SetGroupingOption, SetOrderingOption, GroupingOption, OrderingOption }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleButtonClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleOnchangeGrouping = (e) => {
    setDropdownVisible(!isDropdownVisible);
    SetGroupingOption(e);
  }
  const handleOnchangeOrdering = (e) => {
    setDropdownVisible(!isDropdownVisible);
    SetOrderingOption(e);
  }
  return (
    <div className='header_main'>
      <div>
        <div>
          <button onClick={handleButtonClick}>
            <svg className='header_option_icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
            Display
            <svg className='header_option_arrow' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
          </button>
        </div>
        {isDropdownVisible && (
          <div className="dropdown">
            <div className='options'>
              <label>Grouping</label>
              <select value={GroupingOption} onChange={(e) => handleOnchangeGrouping(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            {
              GroupingOption != 'priority' ?
                <div className='options'>
                  <label>Ordering</label>
                  <select value={OrderingOption} onChange={(e) => handleOnchangeOrdering(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
                : null
            }

          </div>
        )}



      </div>
    </div>
  )
}

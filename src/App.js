import './App.css';
import Column from './components/Column';
import Header from './components/Header';
import PriorityColumn from './components/PriorityColumn';
import UserColumn from './components/UserColumn';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [selectedGroupingOption, setSelectedGroupingOption] = useState(localStorage.getItem('selectedGroupingOption') || 'status');
  const [selectedOrderingOption, setSelectedOrderingOption] = useState(localStorage.getItem('selectedOrderingOption') || 'priority');
  useEffect(() => {
      localStorage.setItem('selectedGroupingOption', selectedGroupingOption);
      localStorage.setItem('selectedOrderingOption', selectedOrderingOption);
  },[ selectedGroupingOption, selectedOrderingOption])
  const handleSelectGroupingChange = (event) => {
    setSelectedGroupingOption(event.target.value);
  };
  const handleSelectOrderingChange = (event) => {
    setSelectedOrderingOption(event.target.value);
  };
  

  return (
    <div className='Main'>
      <Header 
      handleSelectGroupingChange={handleSelectGroupingChange} 
      handleSelectOrderingChange={handleSelectOrderingChange} 
      selectedGroupingOption={selectedGroupingOption}
      selectedOrderingOption={selectedOrderingOption}
      />
      <div >
        {
          selectedGroupingOption === 'status' ? <Column selectedOrderingOption={selectedOrderingOption} /> 
          : selectedGroupingOption === 'priority' ? <PriorityColumn selectedOrderingOption={selectedOrderingOption} /> 
          : <UserColumn selectedOrderingOption={selectedOrderingOption} />
        }
       
      </div>  

    </div>
  );
}

export default App;

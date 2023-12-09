import './App.css';
import Status from './components/Status';
import Header from './components/Header';
import Priority from './components/Priority';
import User from './components/User';
import React, { useState, useEffect } from 'react';

function App() {
  const [GroupingOption, setGroupingOption] = useState(localStorage.getItem('GroupingOption') || 'status');
  const [OrderingOption, setOrderingOption] = useState(localStorage.getItem('OrderingOption') || 'priority');

  useEffect(() => {
  
      localStorage.setItem('GroupingOption', GroupingOption);
      localStorage.setItem('OrderingOption', OrderingOption);
  },[GroupingOption,OrderingOption])

 

  return (
    <div className='Main'>
      <Header 
      SetGroupingOption={setGroupingOption}
      SetOrderingOption={setOrderingOption}
      GroupingOption={GroupingOption}
      OrderingOption={OrderingOption}
      />
      <div >
        {
          GroupingOption === 'status' ? <Status GroupingOption={GroupingOption} OrderingOption={OrderingOption} /> 
          : GroupingOption === 'priority' ? <Priority GroupingOption={GroupingOption} OrderingOption={OrderingOption} /> 
          : <User GroupingOption={GroupingOption} OrderingOption={OrderingOption} />
        }
       
      </div>  

    </div>
  );
}

export default App;

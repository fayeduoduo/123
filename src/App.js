import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [info, setInfo] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
    setInputVal(e.target.value);
  }
  
  const getInfo = () => { 
    console.log(inputVal);
    axios.get(inputVal).then(response => { 
      console.log(response);
    }).catch(error => { 
      console.error('there is no info');
    })
  }

  return (
    <div className="App">
      <input type='text'
        onChange={handleChange}
        value={inputVal}
      />
      <button onClick={getInfo}>Submit</button>
      {info ? <div className='info'>info</div>
            : <div className='info'>'no infomation here'</div>}
    </div>
  );
}

export default App;

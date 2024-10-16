import React, { useState } from 'react'
import './style.css'

function App() {

  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      setPrevCount(prev);
    })
    setCount(count + 1);
  }


  return (
    <div className="App">
      <h4>{ count }</h4>
      <h4>{ prevCount }</h4>
      <button onClick={handleClick}>
        ADD 1
      </button>
    </div>
  );
}

export default App;

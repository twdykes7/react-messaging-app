import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true)
  }

  return (
    <div className="App">
      <p>Welcome to a messenger app!</p>
      <button onClick={handleClick}>Click when ready!</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react'

import './App.css';

function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const handleClick = () => {
  //   setModalIsOpen(true)
  // }

  return (
    <div className="App">
      <p>Welcome to a messenger app!</p>
      {/* <button onClick={handleClick}>Click when ready!</button> */}
      <button onClick={console.log('Then we are ready!')}>Click when ready!</button>
    </div>
  );
}

export default App;

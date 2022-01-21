import React, { useState } from 'react'

import './App.css';
import SMSSender from './components/SMSSender'

function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const handleClick = () => {
  //   // setModalIsOpen(true)
  //   console.log('Then we are ready!')
  // }

  return (
    <div className="App">
      <p>Welcome to a messenger app!</p>
      {/* <button onClick={handleClick}>Click when ready!</button> */}
      <SMSSender />
    </div>
  );
}

export default App;

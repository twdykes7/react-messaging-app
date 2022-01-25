import React, { useState } from 'react'

import './App.css';
import SMSSender from './components/SMSSender'

function App() {

  return (
    <div className="App">
      <p>Welcome to a messenger app!</p>
      <SMSSender />
    </div>
  );
}

export default App;

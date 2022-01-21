import React, { useState } from 'react'

import './SMSSender.css'

const SMSSender = () => {
  const [number, setNumber] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submit working!')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p>
          <label>Number: </label>
          <input type="number" name="name" required />
        </p>
        <p>
          <label>Message: </label>
          <input type="text" name="Message" />
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SMSSender
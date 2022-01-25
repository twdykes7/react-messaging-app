import React, { useState } from 'react'
import axios from 'axios'

import './SMSSender.css'

const SMSSender = () => {
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    /**Here we will do something on submit and also re render a clean form? */
    console.log(number, message)
    axios.post('/sms', {number, message})
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.data)
    })
    setNumber('')
    setMessage('')
  }

  const handleNumChange = (event) => {
    setNumber(event.target.value)
  }

  const handleMsgChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p>
          <label>Number: </label>
          <input type="number" name="name" onChange={handleNumChange} required value={number}/>
          {/*use the pattern built in validator to ensure the number is in correct format*/}
        </p>
        <p>
          <label>Message: </label>
          <input type="text" name="Message" onChange={handleMsgChange} required value={message}/>
          {/* {Do I need to require that the message input be filled out?} */}
        </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SMSSender

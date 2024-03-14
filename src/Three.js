// Create a form that takes user input and displays it in real time
import React, { useState } from 'react'

export default function Three() {

    const [input,setInput] = useState('');

  return (
    <div>
      <input type='text'value={input} onChange={(e)=> setInput(e.target.value)} />
      <p>User input : {input} </p>
    </div>
  )
}

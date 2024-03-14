// implement a basic toggle switch component
import React, { useState } from 'react'

export default function Five() {
  
    const [isToggled,setToggles] = useState(false)
    const handleToggle = () => {
        setToggles(!isToggled);
    } 

  return (
    <div>
      <label>
        <input type='checkbox' onChange={handleToggle}/>

      </label>
      <p>{isToggled ? "On" : "Off" }</p>
    </div>
  )
}

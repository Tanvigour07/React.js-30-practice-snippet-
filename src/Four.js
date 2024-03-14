// Build a list component to display a list of items

import React from 'react'

export default function Four() {

    const items = ['Item1','Item2','Item3','Item4','Item5']

  return (
    <div>
      {items.map((items,index)=>{
        return <li key={index}>{items}</li>
      })}
    </div>
  )
}

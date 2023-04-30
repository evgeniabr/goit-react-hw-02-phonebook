import React from 'react'

export  function Filter({handleChange, value}) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </div>
  )
}

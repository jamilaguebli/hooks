import React from 'react'

function Filtre({searchMov}) {
  return (
    <div>
      <input placeholder='search...' onChange={(e) => searchMov(e.target.value) }></input>

    
    </div>
  )
}

export default Filtre

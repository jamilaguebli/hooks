import React, { useRef , useState } from 'react'



function AddMovie({AddNewMovie}) {
    const[inputs,setInputs]=useState({
       img:"",
        title:"",
        description:"",
        osterURL:"",
        rating:""
    })
     const handleChange =(e) =>{
      setInputs ({...inputs,[e.target.name]:e.target.value})
     }
   
    const handleAdd = () =>{
      AddNewMovie (inputs)
    }
  return (
    <div>
      <input placeholder='img' name='img'  onChange={handleChange}/> 
      
      <input placeholder='title' name='title'  onChange={handleChange}/>
      
      <input placeholder='description' name='description' onChange={handleChange}/>
      
      <input placeholder='posterURL' name='posterURL' onChange={handleChange} />
      
      <input placeholder='rating' name='rating'  onChange={handleChange}/>
      
      <button onClick={ handleAdd}> Add</button>
    </div>
  )
}

export default AddMovie

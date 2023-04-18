import React, { useRef} from 'react'

const AddMovie = ({AddNewMovies}) => {


const titleRef = useRef()
const descriptionRef=useRef()
const ratingRef = useRef()
const posterURLRef= useRef()
const idRef= useRef()





    const handelAdd = ()=>{
      AddNewMovies({
                title :titleRef.current.value,
                description : descriptionRef.current.value ,
                rating :ratingRef.current.value ,
                posterURL : posterURLRef.current.value,
                id : idRef.current.value
          
        })
    }
  return (
    <div>
        <input placeholder='title' name='title'  ref ={titleRef}/>
        <input placeholder='description' name='description' ref ={descriptionRef} />
        <input placeholder='rating' name='rating' ref ={ratingRef}/>
        <input placeholder='posterURL' name='posterURL' ref ={posterURLRef} /><br/>
        <input placeholder='id' name='id' ref ={idRef} /><br/>
        <button onClick={handelAdd}>Add</button>
    </div>
  )
}

export default AddMovie
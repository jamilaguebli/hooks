import React from 'react'
import { useParams , useNavigate} from 'react-router'

const SeeMore  = ({Movies}) => {
const params =useParams()
const Navigate =useNavigate()

const mov = Movies.find(el => el.id == params.id)

return (
    <div>
          <h1>{mov.description}</h1>
          <br/>
          <h6>{mov.posterURL}</h6>
          <br/>
          <button onClick={()=> Navigate('/')}>back to movies list</button>
              


    
    
    </div>
  )
}

export default SeeMore
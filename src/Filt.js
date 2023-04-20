import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Filt = ({searchMovies , searchRate}) => {
   
  return (
    <div>
        <input placeholder='search' onChange={(e)=>searchMovies(e.target.value)}  />
        <br />
        <StarRatingComponent
    name="stars" 
    onStarClick={(value)=>searchRate(value)}
    starColor="#ffb400	" /* color of selected icons, default `#ffb400` */
    emptyStarColor="#333" /* color of non-selected icons, default `#333` */
    
/>
     </div>
  )
}

export default Filt 
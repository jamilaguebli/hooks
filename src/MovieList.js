import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({Movies}) => {
  return (
    <div>
     
     { Movies.map((el,i) => <MovieCard el = {el} key = {i}  />) }
     
      
    </div>
  )
}

export default MovieList
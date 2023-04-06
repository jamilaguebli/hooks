import React from 'react'
import MovieCard from './MovieCard';
function MovieList({movies}) {
  return (
    <div>
      {
      movies.map((el,i) => <MovieCard el= {el} key={i}/>)
      }
    </div>
  )
}

export default MovieList


import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import React, { useState } from 'react';
import AddMovie from './AddMovie';
import Filtre from './Filtre';
function App() {
  const [Keywords,setKeywords]=useState('')

  const [movies,setMovies]=useState([{
      img:"https://images4.alphacoders.com/573/57394.jpg" , title:"movie1", description:"description1",posterURL:"ddd",rating:"2" },
      {
      img:"https://images4.alphacoders.com/573/57394.jpg" , title:"movie2", description:"description2",posterURL:"ddd",rating:"3" },
      {
      img:"https://images4.alphacoders.com/573/57394.jpg" , title:"movie3", description:"description3",posterURL:"ddd",rating:"4" },
    ])
    const AddNewMovie =(newMovies)=>{
      setMovies([...movies,newMovies])
    } 
    const searchMov = (text)=> {
      setKeywords(text)
    }
    
  return (
    <div className="App">
            <AddMovie AddNewMovie ={AddNewMovie}/>
            <Filtre searchMov={searchMov}></Filtre> 
            <MovieList movies={movies.filter(elm => elm.title.toLocaleLowerCase().includes(Keywords.toLocaleLowerCase().trim()))}></MovieList>
  
       
    </div>
  );
}

export default App;

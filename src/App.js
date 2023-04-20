
import React from 'react'
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Filt from './Filt';
import { useState } from 'react';
import "./App.css"

import {Routes, Route} from 'react-router-dom'
import SeeMore from './SeeMore';



function App() {
  const [ keywords, setkeywords]= useState("")
  
  const [rate, setrate]= useState(1)

  const [Movies , setMovies] = useState([

              { id :1 ,title : "movie1", description : "desc1", rating : 5 ,posterURL : "https://images4.alphacoders.com/573/57394.jpg"},
              { id :2 ,title : "movie2", description : "desc2 ", rating : 2 ,posterURL : "https://images4.alphacoders.com/573/57394.jpg"},
              { id :3 ,title : "movie3", description : "desc3", rating : 4 ,posterURL :"https://images4.alphacoders.com/573/57394.jpg"}
  ])
  const AddNewMovies= (newMovie)=>{

    setMovies([...Movies , newMovie])
  }


  const searchMovies =(text) =>{

    setkeywords(text)
  }   

  const searchRate=(number)=>{
    setrate(number)
  }

  return (
    <div className="App">
    
      


      <Routes>
           
      
           <Route path='/' element={   
              <>
                <Filt  searchMovies= {searchMovies}  searchRate={searchRate} /> 

                <MovieList Movies = {Movies.filter(elm => elm.title.toLocaleLowerCase().includes(keywords.toLocaleLowerCase().trim())&& elm.rating>= rate)} />
                
                <AddMovie AddNewMovies = {AddNewMovies}/>
              </> 
            } />
         
       
           <Route  exact path='/seemore/:id'   element={<SeeMore Movies={Movies} />}/>

      </Routes>



      
      
    </div>
  );
}

export default App;
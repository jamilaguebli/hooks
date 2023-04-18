
import React from 'react'
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Filter from './Filter ';
import { useState } from 'react';
import "./App.css"

import {Routes, Route} from 'react-router-dom'
import SeeMore from './SeeMore';



function App() {
  const [ keywords, setkeywords]= useState("")
  
  const [rate, setrate]= useState(1)

  const [Movies , setMovies] = useState([

              { id :1 ,title : "movie1", description : "desc1", rating : 5 ,posterURL : "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_Godfather%2C_The_Game.jpg/220px-The_Godfather%2C_The_Game.jpg"},
              { id :2 ,title : "movie2", description : "desc2 ", rating : 2 ,posterURL : "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg"},
              { id :3 ,title : "movie3", description : "desc3", rating : 4 ,posterURL :"https://w0.peakpx.com/wallpaper/149/827/HD-wallpaper-joker-2020-joaquin-phoenix-movies-smile.jpg"}
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
                <Filter  searchMovies= {searchMovies}  searchRate={searchRate} /> 

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
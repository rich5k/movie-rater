import Footer from './Footer';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import './tailwindcss/styles.css';
import MovieList from './MovieList';
import React,{ useState, useEffect } from 'react';
import {API_URL} from './config';
import './Home.css';
function Home() {
  
  const [movies, setMovies]= useState(null);
  
  useEffect(()=>{
    fetch(`${API_URL}/api/movies`,{
      method: "GET",
      mode:'cors'
    })
    .then(res =>{
      return res.json();
    })
    .then(data=>{
      setMovies(data);
    })
  },[])
    return (
      <div className="Home">
        
        <div class="flex flex-col bg-black">
          <Navbar></Navbar>
          <div class="flex flex-row-reverse">
            <Link to="/add">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-12 my-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            </Link>

          </div>
          <div class="flex-grow container mx-auto py-4 grid lg:grid-cols-3 sm:grid-cols-2">
            {movies && <MovieList movies ={movies} />}
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
  
  export default Home;
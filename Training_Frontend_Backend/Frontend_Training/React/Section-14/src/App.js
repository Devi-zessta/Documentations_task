import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

// import { format } from 'date-fns';

function App() {
  const [Movies, setMovies] = useState([]);
  const [IsLoading,setLoading]=useState(false);
  const [error,setError]=useState();
  // const [date,SetDate]=useState();


  // function clickHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           releaseDate: movieData.release_date,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       setMovies(transformedData);
  //     });
  // }

  const fetchMovieHandler=useCallback( async()=> {
    setLoading(true);
    setError(null);
    try{
    const response = await fetch("https://swapi.dev/api/films/")
    if(!response.ok){
      throw new Error('something went wrong!!!...');
    }
      
    const Data=await response.json();
   
        const transformedData = Data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            releaseDate: movieData.release_date,
            openingText: movieData.opening_crawl,
          };
        });
        setMovies(transformedData);
      }
      catch(error){
      

          setError(error.message);
      }
        setLoading(false);
      
  },[]);
  
  useEffect(()=>{
    fetchMovieHandler()
  },[fetchMovieHandler]);

  // function DateChangeHandler(event){
  //    console.log(event.target.value);
  //    SetDate(event.target.value);
  // }
 
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       {!IsLoading && Movies.length>0 && <MoviesList movies={Movies} />}
       {IsLoading && <p> Loading ....</p>}
       {!IsLoading && Movies.length===0 && !error && <p>No movies found</p>}
       {!IsLoading && error && <p>{error}</p>}
       {/* <input type='date' onChange={DateChangeHandler} value={}></input>
        <p>{format(new Date(), 'dd/mm/yyyy')}</p> */}
      </section>
    </React.Fragment>
  );
}

export default App;

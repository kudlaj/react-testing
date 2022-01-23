import './App.css';
import React, { useState } from 'react';
import MoviesList from './components/MoviesList';


export const API = {
  getMovies() {
    console.log('************ getMovies 1 ************');
      return fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
  }
}

function App() {
  console.log('************ App ************');
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    console.log('fetchMoviesHandler');
    API.getMovies().then(data => {
      console.log(data);
      setMovies(data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        };
      }));
    });
  };

  return (
    <div className="App">
      <h1>Testing demo</h1>
      <div><button onClick={fetchMoviesHandler}>Get movies</button></div>
      <section data-testid="movies"><MoviesList movies={movies} /></section>
    </div>
  );
}

export default App;

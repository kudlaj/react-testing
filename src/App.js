import './App.css';
import React from 'react';
import MoviesList from './components/MoviesList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviesData } from './store/movies-store'


function App() {
  const moviesSlice = useSelector((state) => state.movies);
  console.log(moviesSlice);
  const dispatch = useDispatch();

  const fetchMoviesHandler = () => {
    dispatch(fetchMoviesData());
  };

  return (
    <div className="App">
      <h1>Testing demo</h1>
      <div><button onClick={fetchMoviesHandler}>Get movies</button></div>
      <section data-testid="movies"><MoviesList movies={moviesSlice.moviesList} /></section>
    </div>
  );
}

export default App;

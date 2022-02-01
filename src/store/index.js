import { configureStore } from '@reduxjs/toolkit';
import uiMoviesSlice from './movies-store';

const store = configureStore({
    reducer: { movies: uiMoviesSlice.reducer },
  });
  
  export default store;
  
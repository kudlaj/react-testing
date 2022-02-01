import { createSlice } from '@reduxjs/toolkit';

const uiMoviesSlice = createSlice({
    name: 'movies',
    initialState: { listVisible: false, moviesList: [] },
    reducers: {
        setMovieData(state, action) {
            const movieList = action.payload.movies;
            state.listVisible = true;
            state.moviesList = movieList;
        },
    },
});

export const fetchMoviesData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://swapi.dev/api/films/'
            );
            if (!response.ok) {
                throw new Error('Could not fetch movies!');
            }
            const data = await response.json();
            return data;
        };

        try {
            const moviesData = await fetchData();
            const moviesList = moviesData.results.map(movie => {
                return {
                  id: movie.episode_id,
                  title: movie.title,
                  openingText: movie.opening_crawl,
                  releaseDate: movie.release_date
                };
              });
            dispatch(
                moviesActions.setMovieData({ 
                    listVisible: true,
                    movies: moviesList
                })
            );
        } catch (error) {
           console.log('Error');
        }
    };
};

export const moviesActions = uiMoviesSlice.actions;
export default uiMoviesSlice;
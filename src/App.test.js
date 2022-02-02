import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMoviesData } from './store/movies-store';
import uiMoviesSlice from './store/movies-store';

const MOCK_STORE_INITIAL = {
  movies: {
    moviesList: [
      {
        id: 1,
        title: 'A New Dope',
        openingText: 'Bla bla bla',
        releaseDate: '23/06/2088'
      },
    ]
  }
};



describe('App Test', () => {

  test('should show list with movies when button is clicked', async () => {
    render(<Provider store={store}><App /></Provider>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    await screen.findByText('A New Hope');
    const movie = screen.getAllByRole('listitem');
    expect(movie.length).toBe(2);
  });

  test('should show list with movies from mockstore', async () => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)(MOCK_STORE_INITIAL);
    const spy = jest.spyOn(mockStore, 'dispatch');
    render(<Provider store={mockStore}><App /></Provider>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    await screen.findByText('A New Dope');
    expect(spy).toHaveBeenCalled();

  });

  test('should launch setMovieData Action when dispatch fetchMoviesData', async () => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)(MOCK_STORE_INITIAL);
    await mockStore.dispatch(fetchMoviesData());
    render(<Provider store={mockStore}><App /></Provider>);
    expect((mockStore.getActions()[0].type)).toBe('movies/setMovieData');
    expect(mockStore.getActions()[0].payload.movies).toHaveLength(2);
  });

  test('should test the reducer', async () => {
    const state = uiMoviesSlice.reducer(MOCK_STORE_INITIAL.movies, {
      type: 'movies/setMovieData',
      payload: {
        movies: [
          {
            id: 1,
            title: 'A New Dope',
            openingText: '',
            releaseDate: ''
          },
          {
            id: 2,
            title: 'A Second Dope',
            openingText: '',
            releaseDate: ''
          }
        ]
      }
    });
    expect(state.moviesList).toHaveLength(2);
  });

});
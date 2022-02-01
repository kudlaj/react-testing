import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

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
    const mockStore = configureMockStore(middleware)({
      movies: {
      istVisible: true,
      moviesList: [
        {
          id: 1,
          title: 'A New Hope',
          openingText: '',
          releaseDate: ''
      },
      {
          id: 2,
          title: 'A Second Hope',
          openingText: '',
          releaseDate: ''
      }
      ]
    }})

    mockStore.dispatch = jest.fn(mockStore.dispatch);
    render(<Provider store={mockStore}><App /></Provider>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    await screen.findByText('A New Hope');
    const movie = screen.getAllByRole('listitem');
    expect(movie.length).toBe(2);
  });

});


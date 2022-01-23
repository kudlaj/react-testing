import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('App Test', () => {

  test('should show list with movies when button is clicked', async () => {
    render(<App />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    await screen.findByText('A New Hope');
    const movie = screen.getByRole('listitem');
    expect(movie).toBeInTheDocument();
  });

});


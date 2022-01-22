import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
  test('should have a button', () => {
    render(<App />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

});


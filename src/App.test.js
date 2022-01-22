import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Testing demo/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should fail', () => {
    throw new Error('Not yet implemented');
  });
});


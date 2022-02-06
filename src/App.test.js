import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
  test('should have the title: "Testing demo"', () => {
    render(<App />);
    const linkElement = screen.getByText(/Testing demo/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should have a button', () => {
    throw new Error('Not yet implemented');
  });

  test('should have a blue button with the initial text: "Turn to red"', () => {
    throw new Error('Not yet implemented');
  });

  test('should have a button that turns to red when clicked and change the text to', () => {
    throw new Error('Not yet implemented');
  });


});

